import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/np-social' element={<HomePage />} />
      <Route path="/np-social/login" element={<Login />} />       
      <Route path="/np-social/register" element={<Register />} /> 
      <Route path="/np-social/dashboard" element={<MainLayout/>}>            
        <Route path="/np-social/dashboard" element={<Dashboard />} />  
      </Route>         
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



