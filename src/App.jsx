import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Page/Home/Home";
import MainLayout from "./MainLayout";
import Blog from "./Page/Blog/Blog";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/blog',element: <Blog /> },
      { path: '/navbar',element: <Navbar /> },
      { path: '/footer',element: <Footer /> },
    ]
  },
]);


