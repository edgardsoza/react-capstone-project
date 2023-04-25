import React, {useEffect} from 'react';
import { NavLink } from "react-router-dom";
import { BiMicrophone } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { fetchData } from './fetchData';

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      dispatch({ type: 'SET_DATA', payload: data });
    };
    getData();
  }, [dispatch]);

return (
  <div className='header-container'>
    <NavLink  style={{textDecoration: 'none'}} to="/"dangerouslySetInnerHTML={{ __html: "&lt;" }} />
    <h1>International Filings</h1>
    <BiMicrophone />
    <FiSettings />
  </div>
);
}

export default Header;