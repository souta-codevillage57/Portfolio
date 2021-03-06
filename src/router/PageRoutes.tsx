import { Home } from "../components/pages/Home"
import { Skills } from "../components/pages/Skills"
import { Products } from "../components/pages/Products"
import { Contact } from "../components/pages/Contact"

export const pageRoutes = [

    {
        exact: true,
        path: "/",
        children: <Home />
    },
    {
        exact: false,
        path: "skills",
        children: <Skills />
    },
    {
        exact: false,
        path: "products",
        children: <Products />
    },
    {
        exact: false,
        path: "contact",
        children: <Contact />
    }
]