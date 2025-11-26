import { createBrowserRouter } from "react-router-dom";
import Guepp from "../pages/Guepp";
import MuyLibriana from "../pages/MuyLibriana";
import YamilGomez from "../pages/YamilGomez";
import SerSalon from "../pages/SerSalon";
import GueppCard from "../pages/GueppCard";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Guepp />,
    },
    {
        path: "/muylibriana",
        element: <MuyLibriana />,
    },
    {
        path: "/guepp-card",
        element: <GueppCard />,
    },
    {
        path: "/ser-salon",
        element: <SerSalon />,
    },
    {
        path: "/yamilgomez",
        element: <YamilGomez />,
    }
]);