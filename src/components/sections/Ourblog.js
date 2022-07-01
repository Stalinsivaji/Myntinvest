import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import { NavLink } from 'react-router-dom';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Ourblog= ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
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

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">&nbsp;
      
              <div className="col-md-12">
               <nav className="navbar navbar-expand-sm bg-Secondary navbar-white ">
                                <ul className="navbar-nav" style={{fontSize:20}}>
                                <li className="nav-item" >
                                    <NavLink to="/"  className="nav-link" style={{color:"Grey"}}>Resources</NavLink>
                                  </li>
                                  <li className="nav-item">
                                    <NavLink to="/Blog" className="nav-link" style={{color:'#23b347'}} >Blog</NavLink>
                                  </li>
                                  <li className="nav-item">
                                    <NavLink to="/" className="nav-link" >Support</NavLink>
                                  </li>
                                  <li className="nav-item">
                                    <NavLink to="/FAQ" className="nav-link" >FAQ</NavLink>
                                  </li>
                                </ul>
                            </nav>
              </div>
        <div
          className={innerClasses} style={{backgroundColor:"#f9faf9"}}>
              <div className="cta-action" align="Right"> 
                  <Image
                      src={require('./../../assets/images/Laptop.jpg')}
                      alt="Features tile icon 01"
                      width={800}
                      height={800}
                     />
          </div>&nbsp;
          <div className="cta-slogan" align="Center">&nbsp;
            <h4 className="m-0" >
             <span style={{color:"#2ECC71"}}>INDUSTRY EDUCATION</span><br/>
              <b>What does it mean to have equity in a company ? </b></h4>
              <span style={{color:"grey"}}>A comprehensive understanding of what equity is and how it works</span>
             &nbsp;
              <div className="reveal-from-bottom" data-reveal-delay="600">
                 <h6><b>by Lee Morgan</b><br/><span style={{color:"grey"}}>July 23,2022</span></h6>  
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Ourblog.propTypes = propTypes;
Ourblog.defaultProps = defaultProps;

export default Ourblog;