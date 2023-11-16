import React from 'react';
import * as ReactDOM from "react-dom/client";
import Barbershop from './components/Barbershop/Barbershop';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { store } from './toolkitRedux';
import { Provider } from 'react-redux';
import App from './App';
import Page404 from "./components/Page404/page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/barbershop/:id",
    element: <Barbershop />
  },
  {
    path: "*",
    element: <Page404 />,
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} >

    </RouterProvider>
  </Provider>
);
