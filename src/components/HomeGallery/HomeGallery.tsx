import { useInfiniteQuery, keepPreviousData } from "@tanstack/react-query";

import { GET } from "../../api/apiHelpers";

import "./HomeGallery.css";

const API_KEY = import.meta.env.VITE_API_KEY;
const RESULTS_PER_PAGE = 10;

const HomeGallery = () => {
  const {
    data: collection,
    fetchNextPage,
    isFetching,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["collection"],
    queryFn: ({ pageParam }) =>
      GET({
        url: `/collection?key=${API_KEY}&ps=${RESULTS_PER_PAGE}&p=${pageParam}`,
      }),
    initialPageParam: 0,
    getNextPageParam: (_, allPages) => {
      return allPages.length + 1;
    },
    placeholderData: keepPreviousData,
  });

  const handleFetchNextPage = () => {
    fetchNextPage();
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="gallery">
        {collection?.pages.map((collection: any) => {
          return collection.artObjects.map((object: any) => {
            return (
              <div key={object.id} className="gallery__item">
                <img
                  width={300}
                  height={400}
                  src={object.webImage.url}
                  alt={object.title}
                />
                <div className="gallery__item-overlay">
                  <span className="gallery__item-title">{object.title}</span>
                </div>
              </div>
            );
          });
        })}
      </div>
      <div className="load-more">
        <button
          className="load-more__button"
          type="button"
          disabled={isFetchingNextPage}
          onClick={handleFetchNextPage}
        >
          Load more
        </button>
        <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      </div>
    </>
  );
};

export default HomeGallery;
