import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Projectpage from "./pages/Projectpage";
import Home from "./pages/Home";
import Footer from "./components/footer";

function App() {
  const route = createBrowserRouter([
    {
      path: "/projects",
      element: <Projectpage />,
    },
    {
      path: "/",
      element: <Home />,
    }
  ]);

  return (
    <>
      <RouterProvider router={route} />
    
    </>
  );
}

export default App;
