import { ChangeEvent, useState } from "react";
import { useInfiniteQuery, keepPreviousData } from "@tanstack/react-query";

import Header from "../../components/Header/Header";
import HomeGallery from "../../components/HomeGallery/HomeGallery";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./page.css";
import { GET } from "../../api/apiHelpers";

const API_KEY = import.meta.env.VITE_API_KEY;
const RESULTS_PER_PAGE = 10;

const Homepage = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const {
    data: collection,
    fetchNextPage,
    isFetching,
    isLoading,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["collection"],
    queryFn: ({ pageParam }) =>
      GET({
        url: `/collection?key=${API_KEY}&ps=${RESULTS_PER_PAGE}&p=${pageParam}&q=${searchedValue}`,
      }),
    initialPageParam: 0,
    getNextPageParam: (_, allPages) => {
      return allPages.length + 1;
    },
    placeholderData: keepPreviousData,
  });

  const handleSearchSubmit = (value: string) => {
    const formatSearchedValue = value.toLowerCase().split(" ").join("+");
    setSearchedValue(formatSearchedValue);
    refetch();
  };

  return (
    <>
      <Header />
      <div className="container">
        <SearchBar onSearchValue={handleSearchSubmit} />
        <HomeGallery
          data={collection}
          fetchNextPage={fetchNextPage}
          isFetching={isFetching}
          isLoading={isLoading}
          isFetchingNextPage={isFetchingNextPage}
        />
      </div>
    </>
  );
};

export default Homepage;
