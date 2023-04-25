import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = ( ) => {
  const data = useSelector(state => state.rootReducer.data);
  const navigate = useNavigate();

  const handleItemClick = date => {
    const filteredData = data.filter(item => item.date === date);
    navigate(`/details`, { state: { data: filteredData } });
  };

  return (
  <div>
    <h1>Stats By Year</h1>
    <div className='stats-container'>
       <ul>
        {data.map(item => (
          <div key={item.date} onClick={() => handleItemClick(item.date)}>
            <span>
            {item.calendarYear}
            <br/>
            Net Cash <br/>
            {item.netCashProvidedByOperatingActivities.toLocaleString()}
            </span>
          </div>
        ))}
      </ul>
    </div>
  </div>
  )
};

export default Home;