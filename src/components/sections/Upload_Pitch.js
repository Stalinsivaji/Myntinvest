import React, {useState} from 'react';
import '../Css/styles.css';
import {NavLink,Link} from "react-router-dom";
import Image from '../elements/Image';
import Button from '../elements/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from '../elements/ButtonGroup';
import { Card } from '@material-ui/core';
import PropTypes from 'prop-types';

  


const Upload_Pitch = ({onUpload} )  => { 
   

    return (
        <>
        <body className='' >
            <div className='container'>
                       
                <div className='row' style={{height:700,marginTop:100}}>
                    <div className='row'>
                      <div className="hero-content">
                         <nav className="navbar navbar-expand-sm bg-Secondary navbar-white " >
                            <div className="container-fluid" style={{marginTop:-40}}>
                                  <ul className="navbar-nav" style={{fontSize:13}}>
                                  
                                      <li className="nav-item">
                                          <NavLink to="/Startup_Dashboard" className="nav-link" style={{color:"#B1B0AD"}}>Back to Dashboard</NavLink>
                                        </li>
                                  
                                    </ul>
                              </div>
                            </nav>

                           <div className='container'>
                              <div className='row' style={{height:700}}>
                                    <div className='col-md-12'>
                                        <h3>Pitch</h3>
                                       
                                        <div className='row'>
                                        <div className="col-md-12">
                                            <h5 style={{fontSize:20}}>Upload Pitch Deck</h5>
                                            <p style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt libero vel elementum at cum tupis eget. Viverra ultrices lacus, lectus volutpat sociis vitae mauris<br/>porta faugiat. Nec, vitae facilisi elementum eu est vel quis platea. Diam pharetra nec malesuada mi purus erat.</p>
                                    
                                            <h6>Max Value:50MB</h6>
                                            <div className='FilesDragAndDrop__area' style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:12}}>
                                            Drag & Drop or Click to Browser
                                          <span
                                              role='img'
                                              aria-label='emoji'
                                              className='area__icon'
                                            >
                                             &#128526;
                                            </span>
                                           </div>

                            
                                            
                                            
                                         </div>
                                         
                                         
                                         
                                         

                                        
                                        </div>
                                       <br/>
                                        <div className='row'>
                                          <div className='col-md-6' align="center">
                                               <ButtonGroup>
                                                    <Button tag="a"  style={{backgroundColor:"#2ECC71",borderRadius:8,color:"white"}} wideMobile href="/Startup_Dashboard">
                                                           Submit
                                                    </Button>
                                                </ButtonGroup>
                                        
                                            </div>
                                            </div>
                                     
                                     </div>
                                 </div>

                             </div>
                             
                        </div>

                     </div>

                </div>     


                        

                        
                
            
            
            
            
            
            
            
            
            
            
            
            </div> 

                    
                    

        </body>


            
            
        </>
    );
};




Upload_Pitch.propTypes = {onUpload: PropTypes.func.isRequired}
export default Upload_Pitch;