import { useEffect, useState } from "react";
import { useInfiniteQuery, keepPreviousData } from "@tanstack/react-query";

import { HomeGallery, SearchBar, Modal } from "@/components";
import fetchCollection from "@/services/fetchCollection";
import "./page.css";
import ArtObjectPreview from "@/components/ArtObjectPreview/ArtObjectPreview";

const Homepage = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const [openedArtObject, setOpenedArtObject] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: collection,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["collection", searchedValue],
    queryFn: ({ pageParam }) => fetchCollection(pageParam, searchedValue),
    initialPageParam: 0,
    getNextPageParam: (_, allPages) => {
      return allPages.length + 1;
    },
    placeholderData: keepPreviousData,
  });

  console.log("COLLECTION : ", collection);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [isOpen]);

  const handleSearchSubmit = (value: string) => {
    const formatSearchedValue = value.toLowerCase().split(" ").join("+");
    setSearchedValue(formatSearchedValue);
    refetch();
  };

  const handleOpenModal = (objectNumber: string) => {
    setIsOpen(true);
    setOpenedArtObject(objectNumber);
  };

  return (
    <>
      <SearchBar onSearchValue={handleSearchSubmit} />
      <HomeGallery
        data={collection}
        fetchNextPage={fetchNextPage}
        isLoading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
        onItemClick={handleOpenModal}
      />
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <ArtObjectPreview objectNumber={openedArtObject} />
      </Modal>
    </>
  );
};

export default Homepage;
