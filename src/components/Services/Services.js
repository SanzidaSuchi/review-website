
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
        
        <div className="row row-cols-1 row-cols-md-3 g-4">
            
            {
                courses.map(course => <div className="my-4">
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
    );
};

export default Services;