import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Home from "./pages/Home"
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/services",
    element: <Services/>
  },
  {
    path: "/*",
    element: <NotFound/>
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
