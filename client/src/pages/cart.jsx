import { useAtom } from 'jotai';
import React from 'react';
import { cartAtom } from '../jotai/cartAtoms';
import OrderCart from '../components/orderCart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cart] = useAtom(cartAtom);
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    if (cart.length === 0) return 0;
    return cart.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Cart is Empty');
    } else {
      navigate('/orders');
    }
  };

  return (
    <div className="bg-light min-vh-100">
      <div className="container py-5">
        <h2 className="h4 mb-4">Your Cart</h2>

        <div className="card">
          <div className="card-body">
            {cart.length === 0 ? (
              <div className="text-center text-muted py-4">Your cart is empty.</div>
            ) : (
              <div className="list-group">
                {cart.map((item, index) => (
                  <div key={index} className="list-group-item">
                    <OrderCart title={item.title} price={item.price} />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="card-footer d-flex justify-content-between align-items-center">
            <div>
              <strong>Total Price :</strong>{' '}
              <span className="text-primary ms-2">₹ {calculateTotalPrice()}</span>
            </div>
            <div>
              <button
                className="btn btn-outline-secondary me-2"
                onClick={() => navigate('/')}
              >
                Continue Shopping
              </button>
              <button className="btn btn-primary" onClick={handleCheckout}>
                Proceed to CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
