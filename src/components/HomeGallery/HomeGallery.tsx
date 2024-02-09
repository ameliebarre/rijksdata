import "./HomeGallery.css";

type HomeGalleryProps = {
  data: any;
  fetchNextPage: () => void;
  onItemClick: () => void;
  isFetchingNextPage: boolean;
  isLoading: boolean;
  isFetching: boolean;
};

const HomeGallery = ({
  data,
  fetchNextPage,
  onItemClick,
  isLoading,
  isFetching,
  isFetchingNextPage,
}: HomeGalleryProps) => {
  const handleFetchNextPage = () => {
    fetchNextPage();
  };

  if (isLoading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <>
      <div className="gallery">
        {data?.pages.map((collection: any) => {
          return collection.artObjects.map((object: any) => {
            return (
              <div
                key={object.id}
                className="gallery__item"
                onClick={onItemClick}
              >
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
