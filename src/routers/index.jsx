import { createBrowserRouter } from "react-router-dom"

import Layout from "../layouts"
import Home from "../pages/Home"
import Skill from "../pages/Skill"
import Work from "../pages/Work"
import Contact from "../pages/Contact"
import ErrosPage from "../pages/ErrosPage"


export const routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrosPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "skill",
                element: <Skill />
            },
            {
                path: 'work',
                element: <Work />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    }
])


