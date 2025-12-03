import { createBrowserRouter } from "react-router-dom";
import Guepp from "../pages/Guepp";
import MuyLibriana from "../pages/MuyLibriana";
import YamilGomez from "../pages/YamilGomez";
import SerSalon from "../pages/SerSalon";
import GueppCard from "../pages/GueppCard";
import InspeccionRio3Cala1 from "../pages/InspeccionRio3Cala1";
import CSDecoHome from "../pages/CSDecoHome";


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
        path: "/inspeccionrio3cala1",
        element: <InspeccionRio3Cala1 />,
    },
    {
        path: "/cs-decohome",
        element: <CSDecoHome />,
    },
    {
        path: "/yamilgomez",
        element: <YamilGomez />,
    }
]);