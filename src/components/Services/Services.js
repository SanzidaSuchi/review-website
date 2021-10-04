
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
                courses.map(course => <div>
                            <div class="col g-4">
                                <img src={course.images} alt="" />
                                <div class="card">
                                    <img src="" alt="" />
                                    <div class="card-body">
                                        <h5 class="card-title">{course.coursetitle}</h5>
                                        <p class="card-text">{course.courseduration}</p>
                                        <p class="card-text">{course.courseid}</p>
                                    </div>
                                </div>
                            </div>
                        </div>)
            }
        </div>
    );
};

export default Services;