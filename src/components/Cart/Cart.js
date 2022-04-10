import React from "react";
const Cart = (props) => {
  const { cart } = props;

  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  let tax = total * (10 / 100);
  tax = parseFloat(tax.toFixed());
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h2>This is summary</h2>
      <p>seleted items:{quantity}</p>
      <p>Total Price:{total}</p>
      <p>Total Shipping:{shipping}</p>
      <p>Tax:{tax}</p>
      <p>Grand Total:{grandTotal}</p>
    </div>
  );
};

export default Cart;
