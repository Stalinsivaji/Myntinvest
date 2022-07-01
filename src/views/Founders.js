import React from 'react';
// import sections
import Founders_Tiles from '../components/sections/Founders_Tiles';
import Investors_Manager from '../components/sections/Investors_Manager';
import Accord from '../components/sections/Accord';
import Deals_Community from '../components/sections/Deals_Community';
import Founders_Raising from '../components/sections/Founders_Raising';
import Founders_Process from '../components/sections/Founders_Process';



// <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
// <Testimonial topDivider />
const Founders = () => {

  return (
    <>
     <Deals_Community split/>
     <Founders_Tiles topDivider/>
     <Founders_Process/>
     <Founders_Raising/>
     <Investors_Manager split/>
     <Accord/>
    </>
  );
}

export default Founders;