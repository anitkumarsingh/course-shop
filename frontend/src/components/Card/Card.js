import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ courses }) => {
  return (
    <section className="portfolio section container" id="portfolio">
      <h2 className="section__title">Courses</h2>
      <span className="section__subtitle">Our Best Selling Courses</span>
      <div className="portfolio__container grid">
        {courses &&
          courses.length > 0 &&
          courses.map((course) => {
            return (
              <div className="portfolio__content2" key={course.id}>
                <Link to={`/course/${course._id}`}>
                  <img
                    src={course.thumbnailURL}
                    alt={course.title}
                    className="portfolio__img2"
                  />
                </Link>
                <div className="portfolio__data2">
                  <span className="portfolio__subtitle2">
                    <i className="uil uil-rupee-sign"></i>
                    {course.price}
                  </span>
                  <Link to={`/course/${course._id}`}>
                    <h2 className="portfolio__title2">{course.title}</h2>
                  </Link>
                  <Link
                    to={`/payment/${course.price}`}
                    className="button button-link button--flex"
                  >
                    <i className="uil uil-shopping-cart"></i> Buy Now
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Card;
