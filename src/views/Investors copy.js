import React from 'react';
// import sections
import Investors_Startups from '../components/sections/Investors_Startups';
import Investors_Now from '../components/sections/Investors_Now';
import Funded_Company from '../components/sections/Funded_Company';
import Deals_Community from '../components/sections/Deals_Community';
import Investors_Thousand from '../components/sections/Investors_Thousand';
import Investors_Invest from '../components/sections/Investors_Invest';
import Investor_Navbar from '../components/sections/Investor_Navbar';

const Investors = () => {

  return (
    <>
      <Investor_Navbar/>
      <Investors_Startups split/>
      <Investors_Now/>
      <Funded_Company />
      <Investors_Thousand/>
      <Investors_Invest/>
      <Deals_Community split/>
     
    </>
  );
}

export default Investors;