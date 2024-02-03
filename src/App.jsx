import './App.css'
import { useAuth0 } from "@auth0/auth0-react";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  Outlet
} from "react-router-dom";
import { NavBar, Footer, Loading } from "./components";
import { Home, Login, ErrorPage, Weather} from "./pages";
import ProtectedRoutes from "./auth/protected-route";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
    errorElement: <ErrorPage/>
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
          path: "/",
          element: <Home />,
      },
      {
        path: "/weather/:city",
        element: <Weather />,
    },
],
    errorElement: <ErrorPage/>
  },
]);

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className='main-container'>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
