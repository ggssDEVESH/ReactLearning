import React, { lazy, Suspense, useEffect, useState } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const About = lazy(() => import("./components/About"));
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    
    //authentication 
    const[userName, setUserName] = useState("");

    useEffect(() => {
        const data = {
            name: "devesh gokavarapu"
        };
        setUserName(data.name);
    })

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName}}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
        {
            path: "/",
            element: <Body />,
        },
        {
            path: "/about",
            element: <Suspense fallback = {<Shimmer />}><About /></Suspense>,
        },
        {
            path: "/Grocery",
            element: <Suspense fallback = {<Shimmer />}><Grocery /></Suspense>,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />,
        },
        {
            path: "/cart",
            element: <Cart />,
        },
    ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
