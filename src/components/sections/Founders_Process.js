import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';


const propTypes = {
    ...SectionSplitProps.types
  }
  
  const defaultProps = {
    ...SectionSplitProps.defaults
  }
  
  const Founders_Process = ({
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
  
    const sectionHeader = {
      title: '',
      paragraph: 'We Created A Streamlined,Startup-Friendly Process That Makes Running An Investment Campaign Easy And Affordable.'
    };

    return (
        <section
        {...props}
        className={outerClasses}
      >
        <div className="container" >
          <div className={innerClasses}>&nbsp;
          <h2 align="Center"><span style={{color:"#2ECC71"}}>Easy </span>Process</h2>&nbsp;
           <SectionHeader data={sectionHeader} className="center-content" />

                   <Accordion >
            <AccordionItem >
                <AccordionItemHeading>
                <AccordionItemButton >
                     01&nbsp;&nbsp;Apply Application First!
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                      Additionally,the SEC limits the maximum amount you can invest
                      across all startup using the Reg CF legel framework based on your
                      finalcial situation.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        02&nbsp;&nbsp; Camgain agreement is signed!(Onboarding 3-6 weeks)
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                       As part of our commitment to broadening investing access,Republic
                       allows investments starting at $10- the lowest in the industry.
                    </p>
                    <p>
                     Ultimately,every startup fundraising on Republic sets its own
                     minimum investments,often starting at $25 or $100.
                    </p>
                    <p>
                      Additionally,the SEC limits the maximum amount you can invest
                      across all startup using the Reg CF legel framework based on your
                      finalcial situation.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       03&nbsp;&nbsp;Form C filed & Campaign launches (Campign liv 2.5 - 3.5 months)
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                      Additionally,the SEC limits the maximum amount you can invest
                      across all startup using the Reg CF legel framework based on your
                      finalcial situation.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       04&nbsp;&nbsp;Campaign closes (Alumni community Until exit)
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                      Additionally,the SEC limits the maximum amount you can invest
                      across all startup using the Reg CF legel framework based on your
                      finalcial situation.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
         </Accordion>
        </div>
       
      </div>
    </section>
);
}

Founders_Process.propTypes = propTypes;
Founders_Process.defaultProps = defaultProps;

export default Founders_Process;