import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const router = createBrowserRouter([

    {path: "/home", element: <Home />},

])

export default router;