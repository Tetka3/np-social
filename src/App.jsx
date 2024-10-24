import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
// import Dashboard from "./pages/Dashboard";
// import MainLayout from "./layouts/MainLayout";

// import Register from "./pages/Register";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />   
          
      
    </>
  )
);

function App() {    

  return (
    <>   
      <RouterProvider router={router}/>       
    </>
  )
}

export default App;



