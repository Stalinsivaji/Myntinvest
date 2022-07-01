import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';
import { NavLink } from 'react-router-dom';
import Image from '../elements/Image';
const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Investors_Startups= ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );


  return (
    <section
      {...props}
      className={outerClasses}>
       <div className={tilesClasses} align="center">
          <div className="hero-content">
          <nav className="navbar navbar-expand-sm bg-Secondary navbar-white " >
            <div className="container-fluid">
              <ul className="navbar-nav">
                
              <li className="nav-item">
                  <NavLink to="/Investors" className="nav-link" style={{color:" #2ECC71"}}>Startups</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Crypto" className="nav-link" >Crypto</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Realestate" className="nav-link" >Real Estate</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          </div>
         </div>
      <div className="container">&nbsp;
        <div
          className={innerClasses} style={{backgroundColor:"#f9faf9"}}>
          <div className="cta-slogan">
            <h1 className="m-0" >
              Invest Now In <span style={{color:"#2ECC71"}}>Startups</span></h1><br/>
              <span>Browse Current Investment Opportunities With Us<br/>All Companies Are <span style={{color:"#2ECC71"}}>Vetted & Pass Due Diligence</span> </span>
             &nbsp;
              <div className="reveal-from-bottom" data-reveal-delay="600" style={{paddingTop:30}} >
                <ButtonGroup>
                  <Button tag="a" color="primary" style={{borderRadius:8,color:"white"}} wideMobile href="">
                    Become an Investors
                    </Button>
                    <Button tag="a" style={{borderRadius:8,color:"Dark",backgroundColor:"white"}} wideMobile href="">
                    How it Works 
                    </Button>
                </ButtonGroup><br/>
                <p>Investments Are Risky And May Result in Total <br/>Loss Of Capital.<u>Learn More</u></p>
              </div>
          </div>
          <div className="cta-action"> 
          <Image
                      src={require('./../../assets/images/Mixed.jpg')}
                      alt="Features tile icon 01"
                      width={300}
                      height={300}
                     />
          </div>
        </div>
      </div>
    </section>
  );
}

Investors_Startups.propTypes = propTypes;
Investors_Startups.defaultProps = defaultProps;

export default Investors_Startups;