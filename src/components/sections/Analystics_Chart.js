import React, {Component} from "react";
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
import Image from "../elements/Image";
import Button from '../elements/Button';
import '../Css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';



  
const Analystics_Chart = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
    ...props
  }) => {
 
const tilesClasses = classNames(
'tiles-wrap',
pushLeft && 'push-left'
);return (

       <body>

            <div className="row">
               <div className="col-md-1"></div>
               <div className="col-md-11">
               <div className="m-5 p-4">
               <div className="row">
               <div className="col-md-12">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb arr-right">
                      <li class="breadcrumb-item text-sm" aria-current="page" style={{color:"Grey"}}>Startup</li>
                      <li class="breadcrumb-item text-sm text-dark active"><a class="opacity-5 text-dark" href="/Startup_Dashboard">Dashboard</a></li>
                      <li class="breadcrumb-item text-sm text-dark active"><a class="opacity-5 text-dark" href="/Campaign">Campaign</a></li>
                      <li class="breadcrumb-item text-sm active" aria-current="page" style={{color:'#23b347'}}>Analystics</li>
                    </ol>
                  </nav>
                </div>           
              </div>
              <br/>        
    

                <div className="col-md-12">      
                 <Accordion  >
                    <AccordionItem >
                        <AccordionItemHeading >
                        <AccordionItemButton style={{backgroundColor:"#f9faf9"}}>
                        <b style={{color:'#23b347'}}>Total Revenue(TR)</b>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p style={{color:'grey'}}>
                            Additionally,the SEC limits the maximum amount you can invest
                            across all startup using the Reg CF legel framework based on your
                            finalcial situation.
                            </p>
                            <div className="row">
                            <div className="col-md-9">  
                            <h6><b>Data (upload the proper chart with genuine data presented in it)<code style={{color:"red"}}>*</code></b></h6></div>
                            <div className="col-md-3"> <Button tag="a" color="Secondary" style={{backgroundColor:"white", borderRadius:8,color:"grey"}} wideMobile href="">
                                    Reupload
                            </Button></div>
                            </div>
                            <div className="row">
                            <div className="features-tiles-item-image mb-16" style={{paddingRight:10,backgroundColor:"white"}}>
                                <Image
                                src={require('./../../assets/images/Stock.png')}
                                alt="Stock"
                                width={1000}
                                height={1000} />
                            </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                    </Accordion>

            
                    <Accordion  >
                    <AccordionItem >
                        <AccordionItemHeading >
                        <AccordionItemButton style={{backgroundColor:"#f9faf9"}}>
                        <b>Growth Profit Amrgin(%)</b>
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

                    <Accordion  >
                    <AccordionItem >
                        <AccordionItemHeading >
                        <AccordionItemButton style={{backgroundColor:"#f9faf9"}}>
                       <b>Monthly Recurring Revenue (MRR)</b>
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


                    <Accordion  >
                    <AccordionItem >
                        <AccordionItemHeading >
                        <AccordionItemButton style={{backgroundColor:"#f9faf9"}}>
                       <b>Customer Churn Rate (%)</b> 
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


                    <Accordion  >
                    <AccordionItem >
                        <AccordionItemHeading >
                        <AccordionItemButton style={{backgroundColor:"#f9faf9"}}>
                        <b>Monthly Active Users (MAU)</b>
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

                    <Accordion  >
                    <AccordionItem >
                        <AccordionItemHeading >
                        <AccordionItemButton style={{backgroundColor:"#f9faf9"}}>
                       <b> LTV: CAC Ratio</b>
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
                     


        
        </body>
    );  
};
export default Analystics_Chart;        