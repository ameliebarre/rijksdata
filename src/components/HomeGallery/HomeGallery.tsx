import { useQuery } from "@tanstack/react-query";

import { GET } from "../../api/apiHelpers";

import "./HomeGallery.css";

const API_KEY = import.meta.env.VITE_API_KEY;
const RESULTS_PER_PAGE = 10;

const HomeGallery = () => {
  const {
    isLoading,
    error,
    data: collection,
  } = useQuery({
    queryKey: ["collection"],
    queryFn: () =>
      GET({ url: `/collection?key=${API_KEY}&ps=${RESULTS_PER_PAGE}&p=0` }),
  });

  console.log("DATA : ", collection);

  return (
    <div className="gallery">
      {collection?.artObjects.map((object: any) => {
        return (
          <div key={object.id} className="gallery__item">
            <img src={object.webImage.url} alt={object.title} />
            <div className="gallery__item-overlay">
              <span className="gallery__item-title">{object.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeGallery;
