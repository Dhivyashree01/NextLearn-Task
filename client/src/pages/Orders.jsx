import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { cartAtom } from '../jotai/cartAtoms';

const Orders = () => {
    const [isShowForm, setIsShowForm] = useState(true);
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);
    const [cart] = useAtom(cartAtom);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const courseIds = cart.map(c => c.id);
            const payload = { ...formData, courses: courseIds };

            const res = await fetch('http://localhost:3000/saveOrders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const txt = await res.text();
                console.error('Server returned error body:', txt);
                setIsShowForm(false);
                setIsOrderPlaced(false);
                throw new Error('Bad response: ' + res.status);
            }

            const data = await res.json();
            setIsShowForm(false);
            setIsOrderPlaced(true);
        } catch (err) {
            console.error('fetch error:', err);
        }
    };

    return (
        <div className="bg-white min-vh-100">
            <div className="container py-5">
                {isShowForm ? (
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h3 className="card-title mb-3 text-primary">Checkout — Order Form</h3>
                                    <form onSubmit={onSubmit} className="row g-3">
                                        <div className="col-12">
                                            <label className="form-label">Name</label>
                                            <input type='text' placeholder='Name'
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Email</label>
                                            <input type='text' placeholder='Email'
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Phone</label>
                                            <input type='text' placeholder='Phone'
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="form-control"
                                            />
                                        </div>

                                        <div className="col-12 d-flex justify-content-between align-items-center">
                                            <small className="text-muted">Courses in cart: <span className="fw-semibold text-dark ms-1">{cart.length}</span></small>
                                            <button type="submit" className='btn btn-primary'>Submit Order</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            {isOrderPlaced ? (
                                <div className="alert alert-success text-center shadow-sm">
                                    <h5 className="mb-1">Payment Successful</h5>
                                    <p className="mb-0">Thank you for your purchase. Check your email for details.</p>
                                </div>
                            ) : (
                                <div className="alert alert-danger text-center shadow-sm">
                                    <h5 className="mb-1">You are not a valid User</h5>
                                    <p className="mb-0">Please try again or contact support.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Orders;
