import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName,setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    
    const btnOnClick = () => {
        if(btnName === "Login"){
            setBtnName("Logout")
        }
        else{
            setBtnName("Login")
        }
    }

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg px-2">
            <div className="logo-container">
               <img className="w-56" src= {LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                <li className="px-4">
                    Online Status: {onlineStatus ? "Online" : "Offline"}
                </li>
                <li className="px-4">
                    <Link>Home</Link>
                </li>
                <li className="px-4">
                    <Link to="/about"> About Us </Link> 
                </li>
                <li className="px-4">
                    <Link to="/Grocery"> Grocery </Link>
                </li>
                <li className="px-4">
                    <Link to="/contact"> Contact Us </Link>
                </li>
                <li className="px-4 font-bold cursor-pointer" > 
                    <Link to='/cart'> Cart - {cartItems.length} Items </Link>
                </li>
                <button className="login" onClick={btnOnClick}>{btnName}</button>
                <li className="px-4" >{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;