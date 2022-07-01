import React, {useState,setState} from 'react';
import Image from '../elements/Image';
import {NavLink,Link} from "react-router-dom";
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';
import '../Css/styles.css';
import {
    Box,
    Card,
    CardHeader,
      
  } from "@material-ui/core";
  
function Investors_Dashboards() {
    
    

    return(
        <body className='bg-white' >
            <div className='container'>
            
                <div className='row' style={{padding:50,height:1100}}>
                    <div className='row'>
                    <div className="hero-content">
                        <nav className="navbar navbar-expand-sm bg-Secondary navbar-white " >
                              <div className="container-fluid">
                                <ul className="navbar-nav" style={{fontSize:13}}>
                                  
                                <li className="nav-item" >
                                    <NavLink to="/Investors"  className="nav-link" >Investor</NavLink>
                                  </li>
                                  <li className="nav-item">
                                    <NavLink to="/Investors_Dashboards" className="nav-link" style={{color:'#23b347'}} >Dashboard</NavLink>
                                  </li>
                                  <li className="nav-item">
                                    <NavLink to="/" className="nav-link" >Protfolio</NavLink>
                                  </li>
                                  <li className="nav-item">
                                    <NavLink to="/" className="nav-link" >Analytics</NavLink>
                                  </li>
                                </ul>
                              </div>
                            </nav>
                            </div>
                       <div className='col-md-12'>
                         <h4><strong>Overview</strong>&nbsp;<p style={{fontSize:10,}}>Goog Morning Laura</p></h4>
                        </div> 

                    </div>
                
                        
                    <div className='row' style={{hight:80,marginTop:-60}}>
                      <div className='col-md-5'>
                                                
                        <Box>
                          <Card  style={{backgroundColor:"#E9F7EF ",width:360,height:120}}>
                            <p style={{fontSize:12,padding:15}}>Total Investment value</p>
                            <strong style={{fontSize:25,padding:15,}}>$21.,500.00</strong>
                            </Card>

        
                         </Box>
                       </div>

                        <div className='col-md-5'>
                                      

                         <Box>
                          <Card   style={{backgroundColor:"#FDF2E9",width:360,height:120,alignItems:''}}>
                            <p style={{fontSize:12,padding:15}}>Startups Invested</p>
                            <strong style={{fontSize:25,padding:15,marginTop:-40}}>25</strong>
                            </Card>

        
                         </Box>
                        </div>

                        <div className='col-md-2'>
                        <Card   style={{backgroundColor:"#F2F3F4 ",width:200,height:120,alignItems:''}}>
                            <p style={{fontSize:12,alignItems:'center',marginTop:40}} className='text-center' >View All <br/>Investment<br/></p>
                            
                            </Card>

                        </div>
                     </div>&nbsp;

                       
                       
                       
                       
                       
                       
                        <div className='row' align="left">
                            <h3 align="left">Complete Your Profile <br/><span style={{fontSize:15,color:"grey"}}>Complete your profile to start investing! </span></h3>
                      
                        </div><br/>

                        <div className='row' style={{height:20,marginTop:-30}}>
                            <div className='col-md-6'>
                            <Card   style={{backgroundColor:"#F2F3F4",width:480,height:120,alignItems:''}}>
                              <strong style={{fontSize:25,padding:25}}>KYC</strong>
                              
                              <div style={{marginLeft:350}}>
                                <button style={{backgroundColor: "red",border:0,fontSize:20}} className='text-white'>
                                     PENDING
                                </button>
                                </div>
                              
                              <p style={{fontSize:12,padding:15,height:100}}>Complete your online KYC to start investing<br/>keep your PAN card handy!</p>      
                            </Card>
                            </div>

                            <div className='col-md-6'>
                             <Card   style={{backgroundColor:"#F2F3F4",width:480,height:120,alignItems:''}}>
                              <strong style={{fontSize:25,padding:25}}>Payment Details</strong>
                              
                               <div style={{marginLeft:350}}>
                                  <button style={{backgroundColor: "red",border:0,fontSize:20}} className='text-white'>
                                     PENDING
                                    </button>
                                </div>
                              
                                <p style={{fontSize:12,padding:15,height:100}}>Complete your Payment Details</p>
                              
                             </Card>
                            </div>

                        </div>

                        <div className='row' style={{marginTop:50}}>
                            <div className='col-md-12'>
                                <h3>Our Community</h3>
                                <Card  style={{backgroundColor:"white",width:1000}}>
                                  <CardHeader
                                      avatar={ <Image
                                        src={require('./../../assets/images/inv1.jpg')}
                                        alt="Features tile icon 01"
                                        width={80}
                                        height={80} />}
                                      title="Gerald Becker"
                                      subheader="2 months ago"
        
                                     />&nbsp;
                                  <span style={{color:"grey",fontSize:13}}>Recommendation oj jeff Brown in Day One newsletter. The concept is so good that it's obvious to me that<br/>&nbsp;&nbsp;this is a very good investment.Go Team!!</span>
                                 </Card>
 
                            </div>

                        </div>

                        


                        <div className='row' style={{marginTop:-20}}>
                            <div className='col-md-12'>
                                
                                <Card  style={{backgroundColor:"white",width:1000}}>
                                  <CardHeader
                                      avatar={ <Image
                                        src={require('./../../assets/images/inv2.webp')}
                                        alt="Features tile icon 01"
                                        width={80}
                                        height={80} />}
                                      title="Gerald Becker"
                                      subheader="2 months ago"
        
                                     />&nbsp;
                                  <span style={{color:"grey",fontSize:13}}>Recommendation oj jeff Brown in Day One newsletter. The concept is so good that it's obvious to me that<br/>&nbsp;&nbsp;this is a very good investment.Go Team!!</span>
                                 </Card>
 
                            </div>

                        </div>

                  <div className="reveal-from-bottom" data-reveal-delay="600" align="Center">
                  <Button tag="a" color="primary" style={{borderRadius:8,color:"white",width:300}} wideMobile href="/Investors_Kyc">
                  View More
                  </Button>
                  </div>
                </div>
            </div>
        </body>
   )
}
export default Investors_Dashboards;        