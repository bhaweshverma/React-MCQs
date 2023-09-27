import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Accordion from "./components/Accordion";
import AccordionWithCommonState from "./components/AccordionWithCommonState";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/accordion",
    element: <Accordion />
  },
  {
    path: "/accordion2",
    element: <AccordionWithCommonState />
  }
]);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
