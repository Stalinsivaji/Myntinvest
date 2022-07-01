import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Home_Cta = ({
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
  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
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
      <div className="container" style={{paddingBottom:200}}>
        <div
          className={innerClasses} style={{backgroundColor:"#f9faf9"}}
        >
          <div className="cta-slogan">
            <h2 className="m-0" style={{color:"black"}}>
             $700M+  <br/>
             </h2><p>Invested Since 2022</p>
          </div> 
          <div className="cta-slogan">
            <h1 className="m-0" style={{color:"black"}}>
             |
             </h1>
          </div> 
          <div className="cta-action">
          <h2 className="m-0" style={{color:"black"}}>
             1.5Million+  <br/>
             </h2><p align="center">Members</p>
          </div>
          <div className="cta-slogan">
            <h1 className="m-0" style={{color:"black"}}>
             |
             </h1>
          </div> 
          <div className="cta-action">
          <h2 className="m-0" style={{color:"black"}}>
             600K+ <br/>
             </h2><p align="center">Deals Done</p>
          </div>
        </div>&nbsp;
             
          <div className={tilesClasses}>
          <div className="cta-action">
            
            <div className="reveal-from-bottom" data-reveal-delay="600">
            <ButtonGroup>
                  <Button tag="a" color="primary" style={{backgroundColor:"#F1C404", borderRadius:8,color:"white"}} wideMobile href="">
                    Startups
                    </Button>
                  <Button tag="a" color="secondary" style={{backgroundColor:"#AAB7B8",borderRadius:8,color:"white"}} wideMobile href="">
                    Crypto
                    </Button>
                    <Button tag="a" color="primary" style={{backgroundColor:"#AAB7B8", borderRadius:8,color:"white"}} wideMobile href="">
                    Real Estate
                    </Button>
                </ButtonGroup>
              </div>
            
          </div>
          </div>
      </div>
    </section>
  );
}

Home_Cta.propTypes = propTypes;
Home_Cta.defaultProps = defaultProps;

export default Home_Cta;