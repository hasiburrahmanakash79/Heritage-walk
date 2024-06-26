import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import TicketBooking from "../Pages/TicketBooking/TicketBooking";
import TravellerInformation from "../Pages/TravellerInfo/TravellerInformation";
import UseCardDetails from "../components/UseCardDetails";
import Accommodation from "../Pages/Accommodation/Accommodation";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blogs/Blog/Blog";
import BlogDetails from "../Pages/Blogs/BlogDetails/BlogDetails";
import DetailsInfo from "../Pages/TravellerInfo/DetailsInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/booking",
        element: <TicketBooking />,
      },
      {
        path: "/cardDetails",
        element: <UseCardDetails />,
      },
      {
        path: "/traveller",
        element: <TravellerInformation />,
      },
      {
        path: "/accommodation",
        element: <Accommodation />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails />,
      },
      {
        path: "/detailTravelInfo/:id",
        element: <DetailsInfo />,
      },
    ],
  },
]);

export default router;
