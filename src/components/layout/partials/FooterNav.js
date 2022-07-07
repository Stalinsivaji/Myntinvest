import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Button from '../../elements/Button';


const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset" style={{paddingRight:50,paddingTop:100}}>
        
        <div style={{paddingLeft:80}} align="left"><li>
          <p to="#0" style={{paddingLeft:10}}><b>RESOURCES</b></p>
          <Link to="/Blog">Blog</Link>&nbsp;
          <Link to="#">Support</Link>&nbsp;
          <Link to="#0">Newsletter</Link>
        </li></div>

        <div style={{paddingLeft:80,paddingTop:40}} align="left"><li>
        <p to="#0" style={{paddingLeft:10}}><b>INVESTORS</b></p>
          <Link to="/How_It_Works">How it Works</Link>&nbsp;
          <Link to="#0">Invest</Link>&nbsp;
          <Link to="#0">Risk</Link>&nbsp;
          <Link to="/FAQ">FAQ</Link>
        </li></div>

        <div style={{paddingLeft:100,paddingBottom:5}} align="left"><li>
        <p to="#0" style={{paddingLeft:10}}><b>STARTUPS</b></p>
          <Link to="/Login">Log In</Link>&nbsp;
          <Link to="#0">Why Raise</Link>&nbsp;
          <Link to="/Learn">Learn</Link>
        </li></div>

         <div style={{paddingLeft:80,paddingBottom:5}} align="left"><li>
        <p to="#0" style={{paddingLeft:10}}><b>COMPANY</b></p>
          <Link to="/Privacy_Policy">Privacy Policy</Link>&nbsp;
          <Link to="#0">Terms of Service</Link>&nbsp;
          <Link to="#0">Code of Conduct</Link>
        </li></div>
      </ul>&nbsp;
     
      <div className='Container' style={{paddingLeft:100}}>
        <Button color="primary" style={{backgroundColor:"#23b347",borderRadius:8,color:"white"}}>New</Button>&nbsp;
        Refer a startup,get <strong>$2,500</strong>
      </div>
    </nav>
  );
}

export default FooterNav;