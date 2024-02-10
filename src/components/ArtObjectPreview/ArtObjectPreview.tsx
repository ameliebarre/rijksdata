import { useQuery } from "@tanstack/react-query";

import fetchObjectDetails from "@/services/fetchObjectDetails";
import "./ArtObjectPreview.css";

type ArtObjectPreviewProps = {
  objectNumber: string;
};

const ArtObjectPreview = ({ objectNumber }: ArtObjectPreviewProps) => {
  const { data: object } = useQuery({
    queryKey: ["collection"],
    queryFn: () => fetchObjectDetails(objectNumber),
  });

  return (
    <div className="object">
      <div className="object__image">
        <img src={object?.artObject.webImage.url} />
      </div>
      <div className="object__container">
        <div className="object__details">
          <h3 className="object__details-title">{object?.artObject.title}</h3>
          <p className="object__details-description">
            {object?.artObject.description}
          </p>
        </div>
        <button type="button" className="object__view-details">
          View details
        </button>
      </div>
    </div>
  );
};

export default ArtObjectPreview;
