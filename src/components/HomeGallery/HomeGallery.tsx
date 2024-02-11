import { InfiniteData } from "@tanstack/react-query";
import DotLoader from "react-spinners/ClipLoader";

import { ArtObject, Collection } from "@/interfaces/collection";
import "./HomeGallery.css";

type HomeGalleryProps = {
  data?: InfiniteData<Collection, unknown>;
  fetchNextPage: () => void;
  onItemClick: (objectNumber: string) => void;
  isFetchingNextPage: boolean;
  isLoading: boolean;
};

const HomeGallery = ({
  data,
  fetchNextPage,
  onItemClick,
  isLoading,
  isFetchingNextPage,
}: HomeGalleryProps) => {
  const handleFetchNextPage = () => {
    fetchNextPage();
  };

  if (isLoading) {
    return (
      <div className="loading">
        <DotLoader
          color="#6b6b6b"
          size={90}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <>
      <div className="gallery">
        {data?.pages.map((collection: Collection) => {
          return collection?.artObjects?.map((object: ArtObject) => {
            return object?.webImage?.url ? (
              <div
                key={object?.id}
                className="gallery__item"
                onClick={() => onItemClick(object?.objectNumber)}
              >
                <img
                  width={300}
                  height={400}
                  src={object?.webImage?.url}
                  alt={object?.title}
                />
                <div className="gallery__item-overlay">
                  <span className="gallery__item-title">{object?.title}</span>
                </div>
              </div>
            ) : null;
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
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      </div>
    </>
  );
};

export default HomeGallery;
