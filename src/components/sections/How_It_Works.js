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
  
  const How_It_Works = ({
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
      title: 'How It Works',
      paragraph: 'Understand how MyntInvests different processes work to Complete a successful deal'
    };

    return (
        <section
        {...props}
        className={outerClasses}
      >
        <div className="container" >
        <SectionHeader data={sectionHeader} className="center-content" />
        <div className="row">
                <h4>01 Create a Profile</h4>
                <p>It only takes a Minute. Sign up here to start the process.</p>
                <hr/>
              </div>

              <div className="row">
                <h4>02 Risks & KYC</h4>
                <p>Acknowledge the risks involved and Complete a quick KYC to ensure that you are aware of the risk startup investment entails</p>
                <hr/>
              </div>

              <div className="row">
                <h4>03 Study the deal inside out</h4>
                <p>Once you're inside a deal, carry out your own due dilligence by going through legal documents, deal terms and the pitch itself.</p>
                <hr/>
              </div>

              <div className="row">
                <h4>04 Invest</h4>
                <p>Chose Your investment amount, Payment method, agree to the Terms and Conditions and Complete your investment.</p>
                <hr/>
              </div>

              <div className="row">
                <h4>05 Sign the agreement</h4>
                <p>Once you invest, you will be able to e-sign the T-SAFE agreement(at the end of the campaign) Make sure you sign it at the earliest, to reduce delays.</p>
                <hr/>
              </div>

              <div className="row">
                <h4>06 Post investment process</h4>
                <p>The founder signs and your security certificates are issued in case of delays, this process can take upto 20 days</p>
                
              </div>
          <div className={innerClasses}>&nbsp;
         
           
         <div className="row">
         <h3>FAQs (Frequently Asked Questions)</h3>
         </div>
            <Accordion >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How does my investment reach the startup?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>
                 You can see when the minimal funding amount has been crossed on the deal page. in this case, the startup may choose to:
                 Accept all the funds raised until the closure of the deal
                 Choose to reduse the amount invested by each investor by a certain ratio, i.e.,pro rata the amount in order to allocate securities to each investor<br/>to take only a certain quantum of funds
                 Choose to randomly allot funds based on a lucky draw mechanism
                 Choose to close the deal prematurely as soon as the target is reached          
                 The decision lies Completely with the company and its stakeholders and the decision will be communicated to you over email.
                          </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What happens when a deal is oversubscribed?
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
                Can the startup reject my investment?
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
            <AccordionItem >
                        <AccordionItemHeading >
                        <AccordionItemButton>
                        What is the Private deal?
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
                    <AccordionItem >
                        <AccordionItemHeading >
                        <AccordionItemButton >
                        How do I track my investments?
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

How_It_Works.propTypes = propTypes;
How_It_Works.defaultProps = defaultProps;

export default How_It_Works;