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
import Image from '../elements/Image';
import Input from "../elements/Input";
const propTypes = {
    ...SectionSplitProps.types
  }
  
  const defaultProps = {
    ...SectionSplitProps.defaults
  }
  
  const FAQ = ({
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
  
   
    return (
        <section
        {...props}
        className={outerClasses}
      >
        <div className="container" >
        <div className="col-md-12">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb arr-right">
                    <li class="breadcrumb-item text-sm" aria-current="page" style={{color:"Grey"}}>Resources</li>
                    <li class="breadcrumb-item text-sm text-dark active"><a class="opacity-5 text-dark" href="/Blog">Blog</a></li>
                    <li class="breadcrumb-item text-sm text-dark active"><a class="opacity-5 text-dark" href="/">Support</a></li>
                    <li class="breadcrumb-item text-sm active" aria-current="page" style={{color:'#23b347'}}>FAQ</li>
                </ol>
                </nav>
            </div>
            <h2 align="center">Frequently Asked <span style={{color:'#23b347'}}>Questions</span></h2>
            <div className="features-tiles-item-content">
                  <div className="col-md-12">
                    <Input id="newsletter" type="email" style={{backgroundColor:"white",textColor:"white"}} label="Subscribe" labelHidden hasIcon="right" placeholder="Enter The Keyword Here To Search The Question">
                      <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
                      </svg>
                    </Input>
                  </div>
                </div><hr/> &nbsp;
          <div className="row">
          <h2 align="left">Campaign Logistics</h2>

                   <Accordion >
            <AccordionItem >
                <AccordionItemHeading>
                <AccordionItemButton >
                     Can I close my Campaign early?
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
                        How do my updates get featured in Republic marketing materials?
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
                       How much equity should our company allocate for this?
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
                       What is the typical Campaign duration?
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
        </div>&nbsp;

        <div className="row">
          <h2 align="left">Eligibility</h2>
                   <Accordion >
            <AccordionItem >
                <AccordionItemHeading>
                <AccordionItemButton >
                     Are there any restrictions on incorportion type for companies fundraising on Republic?
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
                        Can companies based outside the Us raise money on Republic?
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
                       Does my companies need tobe incorporated in a particular state to fundraise on Republic?
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
                       How do I Know if my finalcials are GAAP compliant?
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
                        What are GAAP Financial and when do I need them to be "Reviewed"?
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
        </div>&nbsp;

        <div className="row">
          <h2 align="left">Campaign Logistics</h2>

                   <Accordion >
            <AccordionItem >
                <AccordionItemHeading>
                <AccordionItemButton >
                     Can I close my Campaign early?
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
                        How do my updates get featured in Republic marketing materials?
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
                       How much equity should our company allocate for this?
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
                       What is the typical Campaign duration?
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
        </div>&nbsp;

        <div className="row">
          <h2 align="left">Eligibility</h2>
                   <Accordion >
            <AccordionItem >
                <AccordionItemHeading>
                <AccordionItemButton >
                     Are there any restrictions on incorportion type for companies fundraising on Republic?
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
                        Can companies based outside the Us raise money on Republic?
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
                       Does my companies need tobe incorporated in a particular state to fundraise on Republic?
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
                       How do I Know if my finalcials are GAAP compliant?
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
                        What are GAAP Financial and when do I need them to be "Reviewed"?
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

FAQ.propTypes = propTypes;
FAQ.defaultProps = defaultProps;

export default FAQ;