import React, { useEffect, useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';


const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(()=>{
      fetch('./courseData.json')
      .then( res => res.json())
      .then( data => setCourses(data.slice(0,6)))
  },[])

  return (
    <div>
     
     <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.utoronto.ca/sites/default/files/085A2145-Edit-main.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-primary">First slide label</h3>
            <p className="text-primary">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://umanitoba.ca/sites/default/files/styles/3x2_900w/public/2019-07/admissions-undergraduate-studies-02.jpg?itok=yZq5aX8F"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-primary">Second slide label</h3>
            <p className="text-primary">
               consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://umanitoba.ca/sites/default/files/2021-09/excited-students-news.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-primary">Third slide label</h3>
            <p className="text-primary">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
<div className="row row-cols-1 row-cols-md-3">
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
      </Container>
      
    </div>
  );
};
     

export default Home;