import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resList } = props;
    const {name,cloudinaryImageId, cuisines, costForTwo, avgRating} = resList?.info

    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img alt ="image" className="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h4>{name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;