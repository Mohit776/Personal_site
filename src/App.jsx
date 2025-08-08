import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Projectpage from "./pages/Projectpage";
import Home from "./pages/Home";
import lenis from "./Lenis.js"; // make sure path is correct

function App() {
  const route = createBrowserRouter([
    { path: "/projects", element: <Projectpage /> },
    { path: "/", element: <Home /> },
  ]);

  return <RouterProvider router={route} />;
}

export default App;
