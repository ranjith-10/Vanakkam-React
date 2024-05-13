import { URL_LOGO } from "../utils/constants";

const RestaurantCards = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, avgRatingString, sla, cuisines, areaName } = resData;
    const { slaString } = sla;

    return (
        <div className="res-card">
            <img className="res-image" src={URL_LOGO + cloudinaryImageId} />
            <div className="res-content">
                <h3>{name}</h3>
                <div className="res-rating">
                    <h4>{avgRatingString}</h4>
                    <h4 className="res-delivery">{slaString}</h4>
                </div>
                <h5>{cuisines.join(", ")}</h5>
                <h5>{areaName}</h5>
            </div>
        </div>
    )
}

export default RestaurantCards;