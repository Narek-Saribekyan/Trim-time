import React from 'react';
import * as ReactDOM from "react-dom/client";
import Barbershop from './components/Barbershop/Barbershop';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/:name",
    element: <Barbershop/>
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} >
      
    </RouterProvider>
);
