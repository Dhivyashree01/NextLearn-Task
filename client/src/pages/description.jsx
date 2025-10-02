import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cartAtom } from '../jotai/cartAtoms';

const Description = () => {
    const { id } = useParams();
    const [course, setCourses] = useState({});
    const [cart, setCart] = useAtom(cartAtom);

    const fetchCourseById = async () => {
        const res = await fetch(`http://localhost:3000/getCourseById/${id}`);
        const data = await res.json();
        setCourses(data);
    };

    useEffect(() => {
        fetchCourseById();
    }, []);

    const addToCart = () => {
        const exists = cart.find((c) => c.id === course.id);
        if (exists) return alert("Course already exists");
        setCart([...cart, course]);
    };

    return (
        <div className="bg-white min-vh-100">
            <div className='container py-5'>
                <div className="card shadow-sm">
                    <div className="row g-0">
                        <div className="col-md-4 d-flex align-items-center justify-content-center p-4 bg-light">
                            <div className="text-center">
                                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: 120, height: 120, fontSize: 18 }}>
                                    Quick Look
                                </div>
                                <p className="mt-3 text-muted mb-0">Begin Your Journey</p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">{course.title}</h3>
                                <p className="card-text text-muted">{course.description}</p>
                                <p className="h5 text-primary">₹ {course.price}</p>
                                <div className="mt-4">
                                    <button className="btn btn-primary me-2" onClick={addToCart}>Add To Cart</button>
                                    <button className="btn btn-outline-secondary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;
