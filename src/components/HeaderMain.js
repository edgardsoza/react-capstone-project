import React from 'react';
import { NavLink } from "react-router-dom";
import { BiMicrophone } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

export const fetchData = async () => {
  const URL = 'https://financialmodelingprep.com/api/v3/cash-flow-statement/AAPL?limit=120&apikey=32a7228a5dce3f5e80b7d0e3a36e851b';
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  return data;
};

const Header = () => (
  <div className='header-container'>
    <NavLink  style={{textDecoration: 'none'}} to="/"dangerouslySetInnerHTML={{ __html: "&lt;" }} />
    <h1>International Filings</h1>
    <BiMicrophone />
    <FiSettings />
  </div>
);

export default Header;