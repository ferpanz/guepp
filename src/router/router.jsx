import { createBrowserRouter } from "react-router-dom";
import Guepp from "../pages/Guepp";
import MuyLibriana from "../pages/MuyLibriana";
import Aurora from "../pages/Aurora";
import YamilGomez from "../pages/YamilGomez";
import SerSalon from "../pages/SerSalon";


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
        path: "/aurora",
        element: <Aurora />,
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