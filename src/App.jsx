import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Error from "./pages/Error";
import Characters from "./pages/characters";
import Episodes from "./pages/Episodes";
import RootLayout from "./pages/Root";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const showCartHandler = () => {
    setCartIsShow(true)
  }
  const hideCartHandler = (e) => {
    e.preventDefault()
    setCartIsShow(false)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout showCartHandler={showCartHandler}/>,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Characters /> },
        { path: "/episodes", element: <Episodes /> },
  
      ],
    },
  ]);
  return (
    <>
     <RouterProvider router={router} />
     {cartIsShow && <Cart hideCartHandler={hideCartHandler}/>}
    </>
  );
}

export default App;
