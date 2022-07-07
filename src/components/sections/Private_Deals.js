import React, {Component} from "react";
import classNames from 'classnames';
import Image from "../elements/Image";
import '../Css/styles.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import 'react-accessible-accordion/dist/fancy-example.css';
import Investors_Manager from "./Investors_Manager";
import { NavLink } from "react-router-dom";
import Button from '../elements/Button';






const Private_Deals = ({
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
    
             
        <div className="row" >
  
               <div className="row">
               <div className="col-md-1"></div>
               <div className="col-md-11">
               <div className="m-5 p-4">
               <div className="row">
               <div className="row" >
                <div className="col-md-8">
                <div className="cta-slogan">
                    <br/>
                    <br/>
                    <h2>
                       Automate Your<br/><span style={{color:"#2ECC71"}}>Fundraising</span> process</h2><br/>
                       <span>Invite Investors And Fundraising Digitally So That You Can<br/>Focus On Building Your Busniess </span>
            
                </div>

                </div>

                <div className="col-md-4">
                
                    <div className="cta-action" align="right"> 
                          <Image
                               src={require('./../../assets/images/Mixed.jpg')}
                               alt="Features tile icon 01"
                               width={700}
                               height={300}
                            />
                     </div>

                </div>
                
                     
                
                
              </div>              
              </div>

              <br/>
              <br/>
                
                <div className="row ">
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

                </div>

                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                    
               <Image
                  src={require('./../../assets/images/invest (2).png')}
                  alt="Features split 02"
                  width={528}
                  height={300} />
                </div>
                    <div className="col-md-6" >
                      <div align='center'>
                      <h3>
                           Data-driven insights
                        </h3>
                     <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p></div>  
                    
                    </div>

                </div>


                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                    <h2><span style={{color:"#2ECC71"}}>Schedule</span> A call<br/></h2><br/>
                    <span>Invite Investors And Fundraising Digitally So That You Can Focus On Building Your Busniess </span>

                    </div>
                    <div className="col-md-6">
                    <Image
                  src={require('./../../assets/images/invest (2).png')}
                  alt="Features split 02"
                  width={528}
                  height={300} />

                    </div>
                    
                </div>
                <hr/>


                <div className="row">
                    <Investors_Manager split/>
                </div>

                <br/>
                <div className="row">
                    <h2 align='center'>For Startups</h2>

                </div>

                <br/>
                <div className="row">
                    <div className="col-md-4">
                        <div className="tiles-item reveal-from-bottom" style={{backgroundColor:"white"}} >
                             <div className="tiles-item-inner">
                                  <div className="features-tiles-item-content">
                                        <h4 className="mt-0 mb-8" align="left">
                                              Robust Workflow
                                            </h4>
                                         <p className="m-0 text-sm" align="left">
                                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                                           </p>
                                    </div>
                                </div>
                             </div>
                    </div>
                    <div className="col-md-4">
                    <div className="tiles-item reveal-from-bottom" style={{backgroundColor:"white"}} >
                             <div className="tiles-item-inner">
                                  <div className="features-tiles-item-content">
                                        <h4 className="mt-0 mb-8" align="left">
                                              Robust Workflow
                                            </h4>
                                         <p className="m-0 text-sm" align="left">
                                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                                           </p>
                                    </div>
                                </div>
                             </div>
                    </div>
                    <div className="col-md-4">
                    <div className="tiles-item reveal-from-bottom" style={{backgroundColor:"white"}} >
                             <div className="tiles-item-inner">
                                  <div className="features-tiles-item-content">
                                        <h4 className="mt-0 mb-8" align="left">
                                              Robust Workflow
                                            </h4>
                                         <p className="m-0 text-sm" align="left">
                                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                                           </p>
                                    </div>
                                </div>
                             </div>
                    </div>
                </div>

                <br/>
                <div className="row">
                    <div className="col-md-6">
                    <h2>
                       <span style={{color:"#2ECC71"}}>Get in Touch</span> With Our<br/>Team Today</h2><br/>
                       <span>Invite Investors And Fundraising Digitally So That You Can Focus On Building Your Busniess </span>
                    
                       <Button tag="a"  style={{backgroundColor:"#2ECC71",borderRadius:8,color:"white"}} wideMobile href="">
                           Schedule Call
                        </Button>
                    </div>
                    
                    <div className="col-md-6">
                    <div className="cta-action" align="right"> 
                          <Image
                               src={require('./../../assets/images/Mixed.jpg')}
                               alt="Features tile icon 01"
                               width={300}
                               height={100}
                            />
                     </div>


                    </div>

                </div>

                
            
          
        
        

                

             
                       
              
             






              </div>
              </div>
              </div>
              </div>


    </body>          
              

              


              
               
               

) ;       
};



export default Private_Deals;