import AboutPage from "./Pages/AboutPage";
import Dynamic from "./Pages/Dynamic";
import HomePage from "./Pages/HomePage";
import LinkLayouts from "./layouts/LinkLayout";

const router = [
    {
        element: <LinkLayouts/>,
        path: "/",
        children: 
    [   {
            element: <HomePage/>,
            index: true
        },

        {
            element: <AboutPage/>,
            path: "about"
        }
    ]},
    
    {
        element: <Dynamic/>,
        path: "/facts/:id"
    }
]

export default router