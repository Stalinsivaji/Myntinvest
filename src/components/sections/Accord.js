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
  
  const Accord = ({
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
      paragraph: ''
    };

    return (
        <section
        {...props}
        className={outerClasses}
      >
        <div className="container" >
          <div className={innerClasses}>&nbsp;
          
           <SectionHeader data={sectionHeader} className="center-content" />

           <div className={splitClasses}>
            <div className="split-item" >
              <div className="split-item-content center-content-mobile reveal-from-left"  data-reveal-container=".split-item">
                <div className="text-lg text-color-dark fw-600 tt-u mb-8">
                  Frequently Asked <span style={{color:"#23b347"}}>Questions</span>
                  </div>
                  <Accordion >
                      <AccordionItem >
                          <AccordionItemHeading>
                              <AccordionItemButton >
                                  What is MynInvest?
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
                                  How can I invest?
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
                                  What is MyntInvest?
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
                                  What is MyntInvest?
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
        
        <div className="split-item-content center-content-mobile reveal-from-left"  data-reveal-container=".split-item">
                <div className="text-lg text-color-dark fw-600 tt-u mb-8">&nbsp;</div>
                <Accordion >
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton >
                                What is MynInvest?
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
                                What is  MyntInvest?
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
                                What is MyntInvest?
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
                                What is MyntInvest?
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
        </div>
      </div>
    </div>
  </section>
);
}

Accord.propTypes = propTypes;
Accord.defaultProps = defaultProps;

export default Accord;