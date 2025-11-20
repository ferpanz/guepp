import { createBrowserRouter } from "react-router-dom";
import Guepp from "../pages/Guepp";
import MuyLibriana from "../pages/MuyLibriana";
import Aurora from "../pages/Aurora";
import Ectech from "../pages/Ectech";


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
        path: "/ectech",
        element: <Ectech />,
    }
]);