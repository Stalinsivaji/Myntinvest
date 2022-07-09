import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { NavLink } from 'react-router-dom';
const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Private_Deals_Tiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: '',
    paragraph: '',
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <h2 align="center">What Describes You<span style={{color:"#2ECC71 "}}> The Best</span></h2>
          <div className="row" align='center'>    
                  
                     <nav className="navbar navbar-expand-sm bg-Secondary navbar-white " >
                          <div className="container-fluid justify-content-center" >
                                <ul className="navbar-nav ">
                          
                                       <li className="nav-item">
                                            <NavLink to="/" className="nav-link" style={{color:" #2ECC71"}}  >Founder</NavLink>
                                         </li>
                                        <li className="nav-item">
                                            <NavLink to="/" className="nav-link" >Investor</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/" className="nav-link" >Syndicate</NavLink>
                                        </li>
                                </ul>
                            </div>
                         </nav>
                    
                </div>
         <div className={splitClasses}>

        
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                  Data-driven insights
                  </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/invest (3).png')}
                  alt="Features split 03"
                  width={700}
                  height={500} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">  
                <h2 className="mt-0 mb-12">
                <span style={{color:"#2ECC71"}}>Schedule</span> A call
                  </h2><br/>
                <p className="m-0">
                Invite Investors And Fundraising Digitally So That You Can Focus On Building Your Busniess </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/invest (1).png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Private_Deals_Tiles.propTypes = propTypes;
Private_Deals_Tiles.defaultProps = defaultProps;

export default Private_Deals_Tiles;