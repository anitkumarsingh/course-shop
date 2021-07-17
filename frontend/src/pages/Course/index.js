import React, { useState, useEffect } from 'react';
import { API_BASE_URL, YOUTUBE_URL } from '../../constant';
import { youtubeUrlParser } from '../../utils/youtubeUrlParser';

const Course = (props) => {
	const { id } = props?.match?.params;
	const [course, setCourse] = useState({});

	const fetchSingleCourse = async () => {
		const fetchCourse = await fetch(`${API_BASE_URL}/courses/${id}`);
		const result = await fetchCourse.json();
		setCourse(result.course);
	};
	useEffect(() => {
		fetchSingleCourse();
	}, [id]);

	const { title, videoLink } = course;

	return (
		<section className='home section'>
			<h2 className='section__title'>{title}</h2>
			<div className='home__container container grid'>
				{videoLink &&
					videoLink.length > 0 &&
					videoLink.map((video, index) => {
						return (
							<iframe
								style={{ boxShadow: '5px 5px 25px 0 rgb(46 61 73 / 20%)' }}
								key={index}
								title='course'
								width='955'
								height='515'
								src={`${YOUTUBE_URL}/${youtubeUrlParser(video)}`}
								allowFullScreen
								frameborder='0'></iframe>
						);
					})}
			</div>
		</section>
	);
};

export default Course;
