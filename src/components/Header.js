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
        <div className="header">
            <div className="logo-container">
               <img className="logo" src= {LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                <li>
                    Online Status: {onlineStatus ? "Online" : "Offline"}
                </li>
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link to="/about"> About Us </Link> 
                </li>
                <li>
                    <Link to="/contact"> Contact Us </Link>
                </li>
                <li>Cart</li>
                <button className="login" onClick={btnOnClick}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;