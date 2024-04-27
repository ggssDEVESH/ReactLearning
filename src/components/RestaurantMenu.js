import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex,setShowIndex] = useState(null);

  
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name } = resInfo?.data.cards[2]?.card?.card?.info;
  const item =
    resInfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;
  const categories =
    (resInfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards).filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <h2 className="font-bold text-lg">Menu</h2>
      <p>
        {categories.map((category, index) => (
          <RestaurantCategory key={category?.card?.card.title} data = {category?.card?.card}
           showItems = {
            (index === showIndex)? true : false
           }
           setShowIndex = {() => 
            {
              (showIndex === index) ? setShowIndex(null) : setShowIndex(index)
            }
          }
          />
        ))}
      </p>
    </div>
  );
};

export default RestaurantMenu;
