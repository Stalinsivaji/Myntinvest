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
      <ul className="list-reset" >
        
        <div style={{paddingLeft:15}} align="left"><li>
          <p to="#0" style={{paddingLeft:10}}><b>INVESTORS </b></p>
          <Link to="/Deals">Deals</Link>&nbsp;
          <Link to="/Learn">MXi Cafe </Link>&nbsp;
          <Link to="/How_It_Works">How it works?</Link>
        </li></div>&nbsp;

        <div style={{paddingLeft:15,paddingTop:20}} align="left"><li>
        <p to="#0" style={{paddingLeft:10}}><b>STARTUPS </b></p>
          <Link to="/Login">Login</Link>&nbsp;
          <Link to="#0">Raise</Link>&nbsp;
          <Link to="/FAQ">FAQs</Link>&nbsp;
        </li></div>&nbsp;

        <div style={{paddingLeft:28,paddingBottom:5}} align="left"><li>
        <p to="#0" style={{paddingLeft:10}}><b>LEGAL/CONTACT</b></p>
          <Link to="/Risks">Risks Of Investment</Link>&nbsp;
          <Link to="/Privacy_Policy">Privacy Policy </Link>&nbsp;
          <Link to="/Terms_Condition">Terms & Conditions  </Link>
        </li></div>&nbsp;
      </ul>&nbsp;
    </nav>
  );
}

export default FooterNav;