import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resList } = props;
    const {name,cloudinaryImageId, cuisines, costForTwo, avgRating, sla} = resList?.info

    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img alt ="image" className="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h5>{name}</h5>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{sla?.slaString}</h5>
        </div>
    )
}

export default RestaurantCard;