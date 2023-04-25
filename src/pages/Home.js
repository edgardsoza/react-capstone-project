import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const data = useSelector(state => state.rootReducer.data);

  return (
  <div>
    <h1>Stats By Year</h1>
    <div className='stats-container'>
      <ul>
        {data.map(item => (
          <li key={item.date}>{item.calendarYear}</li>
        ))}
      </ul>
    </div>
  </div>
  )
};

export default Home;