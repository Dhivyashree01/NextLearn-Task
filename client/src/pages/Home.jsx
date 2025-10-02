import React, { useEffect, useState } from 'react'
import Coursecard from '../components/Coursecard';

const Home = () => {
    const [courses, setCourses] = useState([]);

    const fetchAllCourses = async () => {
        const res = await fetch("http://localhost:3000/getAllCourses");
        const result = await res.json();
        setCourses(result);
    }

    useEffect(() => {
        fetchAllCourses();
    }, [])

    return (
        <div className="bg-light min-vh-100">
            <div className="container py-5">
                <div className="mb-4 text-center">
                    <h2 className="h3 mb-0">Featured Courses</h2>
                    <small className="text-muted">Hand-picked courses to boost your skills</small>
                </div>


                <div className="row g-4">
                    {
                        courses.length === 0 ? (
                            <div className="col-12 text-center py-5">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <div className="mt-2 text-muted">Loading...</div>
                            </div>
                        ) : (
                            courses.map((course) => (
                                <div key={course.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <Coursecard title={course.title} price={course.price} id={course.id} />
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
