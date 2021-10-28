import { Skills } from "../components/pages/Skills"
import { Products } from "../components/pages/Products"
import { Contact } from "../components/pages/Contact"
import { Home } from "../components/pages/Home"

export const pageRoutes = [

    {
        exact=true,
        path: "/home",
        children: <Home />
    },
    {
        exact=false,
        path: "/skills",
        children: <Skills />
    },
    {
        exact=false,
        path: "/products",
        children: <Products />
    },
    {
        exact=false,
        path: "/contact",
        children: <Contact />
    }
]