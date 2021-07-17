import React from 'react';

const Card = ({ courses }) => {
	return (
		<section className='portfolio section container' id='portfolio'>
			<h2 className='section__title'>Courses</h2>
			<span className='section__subtitle'>Our Best Selling Courses</span>
			<div className='portfolio__container grid'>
				{courses &&
					courses.length > 0 &&
					courses.map((course) => {
						return (
							<div className='portfolio__content2' key={course.id}>
								<a href='#/'>
									<img
										src={course.thumbnailURL}
										alt={course.title}
										className='portfolio__img2'
									/>
								</a>
								<div className='portfolio__data2'>
									<span className='portfolio__subtitle2'>
										<i className='uil uil-rupee-sign'></i>
										{course.price}
									</span>
									<a href='#/'>
										<h2 className='portfolio__title2'>{course.title}</h2>
									</a>
									<a className='button button-link button--flex' href='/#'>
										<i className='uil uil-shopping-cart'></i> Buy Now
									</a>
								</div>
							</div>
						);
					})}
			</div>
		</section>
	);
};

export default Card;
