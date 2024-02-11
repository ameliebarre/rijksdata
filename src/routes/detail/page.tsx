import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { GoArrowLeft as ArrowLeft } from "react-icons/go";

import fetchObjectDetails from "@/services/fetchObjectDetails";
import "./page.css";

const Details = () => {
  const { objectNumber } = useParams();
  const navigate = useNavigate();

  const { data: objectDetail } = useQuery({
    queryKey: ["detail", objectNumber],
    queryFn: () => fetchObjectDetails(objectNumber ? objectNumber : ""),
  });

  return (
    <>
      <div className="back">
        <button className="back__button" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
          Back
        </button>
      </div>
      <div className="object">
        <img
          className="object__detail-image"
          src={objectDetail?.artObject?.webImage?.url}
          alt={objectDetail?.artObject?.title}
        />
        <div className="object__detail">
          <div className="object__detail-header">
            <h2 className="object__detail-header--title">
              {objectDetail?.artObject?.title}
            </h2>
            <div className="object__detail-header--colors">
              {objectDetail?.artObject?.colors.map((color, index) => {
                return (
                  <span
                    key={`${color}-${index}`}
                    style={{ backgroundColor: color.hex }}
                  ></span>
                );
              })}
            </div>
          </div>
          <div className="object__detail-makers">
            {objectDetail?.artObject?.principalMaker}
          </div>
          <p className="object__detail-date">
            {objectDetail?.artObject?.dating.presentingDate}
          </p>
          <p className="object__detail-makerLine">
            {objectDetail?.artObject?.label.makerLine}
          </p>
          <p className="object__detail-description">
            {objectDetail?.artObject?.label?.description !== null
              ? objectDetail?.artObject?.label.description
              : objectDetail?.artObject?.plaqueDescriptionEnglish}
          </p>
          <div className="object__detail-materials">
            {objectDetail?.artObject?.materials.map((material, index) => {
              return <span key={`${material}-${index}`}>#{material}</span>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
