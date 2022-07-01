import React, {useState} from 'react';
import '../Css/styles.css';
import {NavLink,Link} from "react-router-dom";
import Image from '../elements/Image';
import Button from '../elements/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



  


const Investors_Pan = () => {
   

    return (
        <>
        <body className='bg-white' >
            <div className='container'>
                       
                <div className='row' style={{height:1000,marginTop:100}}>
                    <div className='row'>
                      <div className="hero-content">
                         <nav className="navbar navbar-expand-sm bg-Secondary navbar-white " >
                            <div className="container-fluid" style={{marginTop:-40}}>
                                  <ul className="navbar-nav" style={{fontSize:13}}>
                                  
                                      <li className="nav-item">
                                          <NavLink to="/Investors" className="nav-link" style={{color:"#B1B0AD"}}>Back to Dashboard</NavLink>
                                        </li>
                                  
                                    </ul>
                              </div>
                            </nav>

                           <div className='container'>
                              <div className='row' style={{height:500}}>
                                    <div className='col-md-12'>
                                        <h3>Complete Your Profile</h3>
                                        <p style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt libero vel elementum at cum tupis eget. Viverra ultrices lacus, lectus volutpat sociis vitae mauris<br/>porta faugiat. Nec, vitae facilisi elementum eu est vel quis platea. Diam pharetra nec malesuada mi purus erat.</p>
                                       <div className='row'> 
                                        <div className='col-md-2' align="left">
                                        <a href=''><Image   src={require('./../../assets/images/kyc1.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{padding:10,fontSize:15}}>KYC</p></a>
                                        </div>
                                        
                                        <div className='col-md-2 ' align="left">
                                        <a href='' ><Image   src={require('./../../assets/images/payment.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{padding:10,marginLeft:-30,fontSize:15}}>Payment Details</p></a>
                                        </div>
                                        </div>
                                        
                                        
                                        <div className='row'>
                                        <div className="col-md-12">
                                            <h5 style={{fontSize:20}}>Verify PAN CARD</h5><br/>
                                            <h6>Permanent Account Number (PAN)</h6>
                                            <div class="input-group mb-3" style={{width:400}}>
                                            <input type="text" class="form-control" style={{backgroundColor:"#E5E8E8",color:"grey"}} placeholder="Enter PAN NO." />
                                            </div>
                                            <h6>Date of Birth</h6>
                                            <div class="input-group mb-3" style={{width:400}}>
                                            <input type="text" class="form-control" style={{backgroundColor:"#E5E8E8",color:"grey"}} placeholder="DD"/>
                                            <input type="text" class="form-control" style={{backgroundColor:"#E5E8E8",color:"grey"}} placeholder="MM"/>
                                            <input type="text" class="form-control" style={{backgroundColor:"#E5E8E8",color:"grey"}} placeholder="YYYY"/>
                                            </div>
                                            <br/>
                                        
                            
                                            </div>
                                    <div className='col-md-8' align="center">
                                    
                                        <Button tag="a" color="primary" style={{borderRadius:8,color:"white"}} wideMobile href="Investors_Bank">
                                           Verify & Continue
                                         </Button>
                                        
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





export default Investors_Pan;