
import React, { useState } from "react";

import PayPal from "./PayPal";
const botonPaypal = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checkout, setCheckOut] = useState(false);

  return (
    <div className="App">
      {checkout ? (
        <PayPal />
      ) : (
        <button className="btn btn-block btn-outline-primary" data-toggle="modal"
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}

export default botonPaypal
