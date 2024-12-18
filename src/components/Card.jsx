import React from 'react';

const Cart = ({ cartItems, handleCheckout }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{minHeight: '100vh'}}>
      <div className="max-w-4xl mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg mb-3">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-4 mb-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h2 className="text-lg font-bold">{item.name}</h2>
                      <p className="text-gray-600">Price: ${item.price}</p>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold">
                    ${item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Total:</h3>
                <p className="text-xl font-bold">${totalPrice.toFixed(2)}</p>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
