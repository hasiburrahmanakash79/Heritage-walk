import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import TicketBooking from "../Pages/TicketBooking/TicketBooking";
import UseCardDetails from "../components/UseCardDetails";

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
      },{
        path: "/cardDetails",
        element: <UseCardDetails/>
      }
    ],
  },
]);

export default router;
