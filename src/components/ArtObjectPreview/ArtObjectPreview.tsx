import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import fetchObjectDetails from "@/services/fetchObjectDetails";
import "./ArtObjectPreview.css";

type ArtObjectPreviewProps = {
  objectNumber: string;
};

const ArtObjectPreview = ({ objectNumber }: ArtObjectPreviewProps) => {
  const navigate = useNavigate();
  const { data: object } = useQuery({
    queryKey: ["details"],
    queryFn: () => fetchObjectDetails(objectNumber),
  });

  return (
    <div className="preview">
      <div className="preview__image">
        <img src={object?.artObject?.webImage.url} />
      </div>
      <div className="preview__container">
        <div className="preview__details">
          <h3 className="preview__details-title">{object?.artObject?.title}</h3>
          <p className="preview__details-description">
            {object?.artObject?.description}
          </p>
        </div>
        <button
          type="button"
          className="preview__view-details"
          onClick={() => navigate(`/collection/detail/${objectNumber}`)}
        >
          View details
        </button>
      </div>
    </div>
  );
};

export default ArtObjectPreview;
