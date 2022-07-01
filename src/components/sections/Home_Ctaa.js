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

const Home_Ctaa = ({
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
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">&nbsp;
        <div
          className={innerClasses} style={{backgroundColor:"#F2F3F4"}}
        >
          <div className="cta-slogan">
            <span className="m-0" style={{color:"black"}}>
            Trusted By Hundreds</span><br/>
              <span style={{color:"black"}}>Of Companies</span>
              
          </div>
          <div className={tilesClasses}>
          <div className="cta-action">
            
            <div className="reveal-from-bottom" data-reveal-delay="600">
            <ButtonGroup>
                  <Button tag="a" color="secondary" style={{backgroundColor:"#E9E9FF",borderRadius:5,color:"grey"}} wideMobile href="">
                    9UNICORNS
                    </Button>
                  <Button tag="a" color="primary" style={{backgroundColor:"grey",color:"white"}} wideMobile href="">
                    Better
                    </Button>
                    <Button tag="a" color="secondary" style={{backgroundColor:"#E9E9FF",borderRadius:5,color:"grey"}} wideMobile href="">
                    R
                    </Button>
                  <Button tag="a" color="secondary" style={{backgroundColor:"#E9E9FF",borderRadius:5,color:"grey"}} wideMobile href="">
                    L I V W E L L
                    </Button>
                    <Button tag="a" color="primary" style={{backgroundColor:"grey",color:"white"}} wideMobile href="">
                    Better
                    </Button>
                </ButtonGroup>
              </div>
            
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Home_Ctaa.propTypes = propTypes;
Home_Ctaa.defaultProps = defaultProps;

export default Home_Ctaa;