import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';
import Image from '../elements/Image';
const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Private_Deals_Team= ({
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
        <div
          className={innerClasses} style={{backgroundColor:"#F2F3F4"}}
        >
          <div className="cta-slogan">
            <h1 className="m-0" >
            <span style={{color:"#2ECC71"}}>Get in Touch</span> With Our<br/>Team Today</h1><br/>
            <span>Invite Investors And Fundraising Digitally So That You Can Focus On Building Your Busniess </span>
            &nbsp;
              <div className="reveal-from-bottom" data-reveal-delay="600" style={{paddingTop:30}} >
                <ButtonGroup>
                  <Button tag="a" color="primary" style={{backgroundColor:"#2ECC71",borderRadius:8,color:"white"}} wideMobile href="">
                  Schedule Call

                    </Button>
                </ButtonGroup>
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

Private_Deals_Team.propTypes = propTypes;
Private_Deals_Team.defaultProps = defaultProps;

export default Private_Deals_Team;