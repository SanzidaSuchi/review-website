
import React, { useEffect, useState } from 'react';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('./courseData.json')
        .then( res => res.json())
        .then( data => setCourses(data))
    },[])
    console.log(courses)
    return (
        
        <div className="container">
            <div className="text-center my-4">
                <h1 className="fw-bold">Our Courses</h1>
                <p className="fw-bolder">With unique access to the latest industry news and insights, we deliver world-class learning programmes
                    with a lasting impact. We deliver training in more than 20 different topic areas including:</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                courses.map(course => 
                <div className="my-4">

                    <div className="col g-4">
                        <div className="card mx-2">
                            <img src={course.images} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{course.coursetitle}</h5>
                                <p className="card-text">{course.courseduration}</p>
                                <p className="card-text">{course.courseid}</p>
                            </div>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Services;