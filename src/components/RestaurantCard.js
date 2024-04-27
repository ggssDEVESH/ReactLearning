import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {
    const { resList } = props;
    const { loggedInUser } = useContext(UserContext);
    const {name,cloudinaryImageId, cuisines, costForTwo, avgRating, sla} = resList?.info

    return(
        <div className="m-4 p-4 w-[250px] bg-gray-50 hover:bg-gray-300">
            <img alt ="image" className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
            <h5 className="font-bold py-4 text-lg">{name}</h5>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{sla?.slaString}</h5>
            <h5>user: {loggedInUser}</h5>
        </div>
    )
}

export const withPromotedRestaurantCard = (RestaurantCard) => {
    return ( (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Recommended</label>
                <RestaurantCard {...props}/>
            </div>
        )

    }
    )
}

export default RestaurantCard;