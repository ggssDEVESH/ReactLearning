import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [restList,setRestList] = useState(resList)
    
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    let filteredList = restList.filter((res) => res.info.avgRating > 4)
                    setRestList(filteredList)
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {
                    restList.map((res) => <RestaurantCard key = {res.info.id} resList = {res}/>)
                }
            </div>
        </div>
    )
}

export default Body;