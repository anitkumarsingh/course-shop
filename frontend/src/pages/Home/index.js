import React, { useEffect } from 'react';
import Card from '../../components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../../redux/actions/courses';

const Home = () => {
  const dispatch = useDispatch();
  const { courses, loading } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <Card courses={courses} />
      </div>
    </section>
  );
};

export default Home;
