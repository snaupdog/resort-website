import * as React from "react";
import * as ReactDOM from "react-dom/client";



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page";
import Root from "./routes/root";
import Contact from "./routes/contact";
import Facilities from "./routes/facilities";
import Bookings from "./routes/bookings";










const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
      errorElement: <ErrorPage />,
  },

  {
    path: "/contacts",
    element: <Contact />,
  },

  {
    path: "/facilities",
    element: <Facilities />,
  },

  {
    path: "/bookings",
    element: <Bookings />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
