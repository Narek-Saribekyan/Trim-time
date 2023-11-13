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
    element: <Barbershop />
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} >

    </RouterProvider>
  </Provider>
);
