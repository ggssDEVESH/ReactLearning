import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName,setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    
    const btnOnClick = () => {
        if(btnName === "Login"){
            setBtnName("Logout")
        }
        else{
            setBtnName("Login")
        }
    }

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
                <li className="px-4" >Cart</li>
                <button className="login" onClick={btnOnClick}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;