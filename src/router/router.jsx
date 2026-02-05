import { createBrowserRouter } from "react-router-dom";
import Guepp from "../pages/Guepp";
import MuyLibriana from "../pages/MuyLibriana";
import YamilGomez from "../pages/YamilGomez";
import SerSalon from "../pages/SerSalon";
import GueppCard from "../pages/GueppCard";
import InspeccionRio3Cala1 from "../pages/InspeccionRio3Cala1";
import CSDecoHome from "../pages/CSDecoHome";
import Detail from "../pages/Detail";
import Onix from "../pages/Onix";
import ColorPony from "../pages/ColorPony";
import ListteHogar from "../pages/ListteHogar";
import GreenClover from "../pages/GreenClover";
import FarmaciasPonte from "../pages/FarmaciasPonte";


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
        path: "/detail-jg",
        element: <Detail />,
    },
    {
        path: "/yamilgomez",
        element: <YamilGomez />,
    },
    {
        path: "/onix",
        element: <Onix />,
    },
    {
        path: "/colorpony",
        element: <ColorPony />,
    },
    {
        path: "/listtehogar",
        element: <ListteHogar />,
    },
    {
        path: "/greenclover",
        element: <GreenClover />
    },
    {
        path: "/farmaciasponte",
        element: <FarmaciasPonte />
    }
]);