import React from "react";
import LayOut from "../ui/LayOut";
import CartDetails from "../features/cart/component/CartDetails";

const CartPage = () => {
  return (
    <div className="page-wrapper">
      <LayOut>
        <CartDetails />
      </LayOut>
    </div>
  );
};

export default CartPage;
