import { useDispatch } from "react-redux";
import Offcanvas from "../UI/Offcanvas";
import "./Cart.css";
import CartItem from "./CartItem.jsx";
import { cartActions } from "../../store/index.js";
import { useState } from "react";


const Cart = ({ hideCartHandler }) => {
  const [isClearButton, setIsClearButton]=useState(false);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
  };

  
  return (
    <Offcanvas hideCartHandler={hideCartHandler}>
      <div className="cart-head">
        <h2>My Favorites</h2>
        <a href="/" className="cart-close" onClick={hideCartHandler}>
          x
        </a>
      </div>

      <div className="total">
        <CartItem setIsClearButton={setIsClearButton} />
      </div>

     {isClearButton ? <div className="actions">
        <button className="cart-clear" onClick={handleClearCart}>
          Clear
        </button>
      </div>:""}
      
    </Offcanvas>
  );
};

export default Cart;
