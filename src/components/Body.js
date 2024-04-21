import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [restList, setRestList] = useState([]);
  const [searchText,setSearchText] = useState("");
  const [filterRest,setFilterRest] = useState([]);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const dataAll = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await dataAll.json();
    //optional chaining
    setRestList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  if(!onlineStatus){
    return (
      <h1>YOU ARE OFFLINE...</h1>
    )
  }

  return restList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div>
            <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button onClick={() => { 
                let searchFilter = restList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilterRest(searchFilter)
                console.log(searchText)
            }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = restList.filter((res) => res.info.avgRating > 4);
            setFilterRest(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterRest.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}><RestaurantCard resList={res} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
