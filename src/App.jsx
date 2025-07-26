import { RouterProvider , createBrowserRouter } from "react-router";
import Projectpage from "./components/Projectpage";
import Home from "./pages/Home";



function App() {

  const route  = createBrowserRouter([
    {
      path: "/projects",
      element: <Projectpage/>,
    },
     {
      path: "/",
      element: <Home/>,
    }
  ])

  return (
   
    <>
    <RouterProvider router={route} />
    
    
    </>
  );
}

export default App;