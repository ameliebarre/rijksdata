import { useEffect, useState } from "react";
import { useInfiniteQuery, keepPreviousData } from "@tanstack/react-query";

import { Header, HomeGallery, SearchBar, Modal } from "@/components";
import fetchCollection from "@/services/fetchCollection";
import "./page.css";

const Homepage = () => {
  const [searchedValue, setSearchedValue] = useState("");
  //const [collectionDetails, setCollectionDetails] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: collection,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["collection"],
    queryFn: ({ pageParam }) => fetchCollection(pageParam, searchedValue),
    initialPageParam: 0,
    getNextPageParam: (_, allPages) => {
      return allPages.length + 1;
    },
    placeholderData: keepPreviousData,
  });

  console.log(collection);

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

  const handleOpenModal = () => {
    setIsOpen(true);
    //setCollectionDetails();
  };

  return (
    <>
      <Header />
      <div className="container">
        <SearchBar onSearchValue={handleSearchSubmit} />
        <HomeGallery
          data={collection}
          fetchNextPage={fetchNextPage}
          isLoading={isLoading}
          isFetchingNextPage={isFetchingNextPage}
          onItemClick={handleOpenModal}
        />
      </div>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        This is Modal Content!
      </Modal>
    </>
  );
};

export default Homepage;
