import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/home";
import Users from "./pages/Users/users";
import Products from "./pages/Products/products";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Menu from "./components/Menu/menu";
import Login from "./pages/Login/login";
import "./styles/global.scss"
function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
    {
      path:"/login",
      element:<Login/>,
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
