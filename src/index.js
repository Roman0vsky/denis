import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Info from "./components/Info/Info";
import Main from "./components/Main/Main";
import Training from "./components/Training/Training";
import Error from "./components/Error/Error";
import Default from "./components/Default/Default";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Default /> },
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "/info",
        element: <Info />,
      },
      {
        path: "/training",
        element: <Training />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
