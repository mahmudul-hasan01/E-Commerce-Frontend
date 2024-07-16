import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Page/Home/Home";
import MainLayout from "./MainLayout";
import Blog from "./Page/Blog/Blog";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Shop from "./Page/Shop/Shop";
import SingleProduct from "./Page/Shop/SingleProduct";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/blog',element: <Blog /> },
      { path: '/shop',element: <Shop /> },
      { path: '/shop/:id',element: <SingleProduct /> },
      { path: '/navbar',element: <Navbar /> },
      { path: '/footer',element: <Footer /> },
    ]
  },
]);


