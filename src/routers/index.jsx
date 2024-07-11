import { createBrowserRouter } from "react-router-dom"

import Layout from "../layouts"
import Home from "../pages/Home"
import Skill from "../pages/Skill"
import Work from "../pages/Work"
import Contact from "../pages/Contact"


export const routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "home",
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


