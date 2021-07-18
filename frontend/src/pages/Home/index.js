import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import { API_BASE_URL } from '../../constant';

const Home = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    const res = await fetch(`${API_BASE_URL}/courses`);
    const result = await res.json();
    setCourses(result.courses);
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <Card courses={courses} />
      </div>
    </section>
  );
};

export default Home;
