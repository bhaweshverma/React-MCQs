import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Accordion from "./components/Accordion";
import AccordionWithCommonState from "./components/AccordionWithCommonState";
import Movies from "./components/MovieApp/Movies";
import MovieDetail from "./components/MovieApp/MovieDetail";
import { AppContextProvider } from "./utilities/context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/accordion",
    element: <Accordion />,
  },
  {
    path: "/accordion2",
    element: <AccordionWithCommonState />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/movies/:movieId",
    element: <MovieDetail />,
  },
]);
root.render(
  // <StrictMode>
  <AppContextProvider>
    <RouterProvider router={router} />
  </AppContextProvider>,
  // </StrictMode>,
);
