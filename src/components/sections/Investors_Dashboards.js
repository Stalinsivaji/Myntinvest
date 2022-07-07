import React, {useState,setState} from 'react';
import Image from '../elements/Image';
import {NavLink,Link} from "react-router-dom";
import Button from '../elements/Button';
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
            
                <div className='row' style={{padding:50,height:1600}}>
                    <div className='row'>&nbsp;
                        <div className="col-md-12">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb arr-right">
                              <li class="breadcrumb-item text-sm" aria-current="page" style={{color:"Grey"}}>Investor</li>
                              <li class="breadcrumb-item text-sm active" aria-current="page" style={{color:'#23b347'}}>Dashboard</li>
                              <li class="breadcrumb-item text-sm text-dark active"><a class="opacity-5 text-dark" href="/Portfolio">Portfolio</a></li>
                              <li class="breadcrumb-item text-sm text-dark active"><a class="opacity-5 text-dark" href="/Investors_Analystics">Analystics</a></li>
                            </ol>
                          </nav>
                        </div>
                       <div className='col-md-12'>
                         <h4><strong>Overview</strong>&nbsp;<p style={{fontSize:10,}}>Goog Morning Laura</p></h4>
                        </div> 

                    </div>
                
                        
                    <div className='row' style={{marginTop:-60}}>
                      <div className='col-md-5' style={{marginTop:10}}>
                                                
                        <Box>
                          <Card  style={{backgroundColor:"#E9F7EF ",width:360,height:120}}>
                            <p style={{fontSize:12,padding:15}}>Total Investment value</p>
                            <strong style={{fontSize:25,padding:15,}}>$21.,500.00</strong>
                            </Card>

        
                         </Box>
                       </div>

                        <div className='col-md-5' style={{marginTop:10}}>
                                      

                         <Box>
                          <Card   style={{backgroundColor:"#FDF2E9",width:360,height:120,alignItems:''}}>
                            <p style={{fontSize:12,padding:15}}>Startups Invested</p>
                            <strong style={{fontSize:25,padding:15,marginTop:-40}}>25</strong>
                            </Card>

        
                         </Box>
                        </div>

                        <div className='col-md-2' style={{marginTop:10}}>
                        <Card   style={{backgroundColor:"#F2F3F4 ",width:200,height:120,alignItems:''}}>
                            <p style={{fontSize:12,alignItems:'center',marginTop:40}} className='text-center' >View All <br/>Investment<br/></p>
                            
                            </Card>

                        </div>
                     </div>&nbsp;

                       
      
                        <div className='row' align="left">
                            <h3 align="left">Complete Your Profile <br/><span style={{fontSize:15,color:"grey"}}>Complete your profile to start investing! </span></h3>
                        </div>


                        <div className="row">
                        <Card style={{backgroundColor:"#FDF2E9",width:400,height:150,borderRadius:15}}>
                        <div className="row"><div className="col-md-6" align="left" style={{marginTop:18}}><strong>KYC</strong>
                        <p style={{fontSize:10,color:"grey"}}>Complete your online KYC to start investing keep your PAN card handy!</p></div>          
                        <div className="col-md-6" align="center" >
                        <Button tag="a" color="secondary"style={{backgroundColor:"red",borderRadius:10,marginTop:10}} wideMobile href="/Investors_Details" className='text-white'>
                        PENDING
                        </Button>
                        </div> 
                        </div>
                        </Card>&nbsp;&nbsp;&nbsp;&nbsp;

                        <Card style={{backgroundColor:"whitesmoke",width:400,height:150,borderRadius:15}}>
                        <div className="row"><div className="col-md-6" align="left" style={{marginTop:18}}> <strong>Payment Details</strong>
                        <p style={{fontSize:12,color:"grey"}}>Complete your Payment Detailse</p></div>          
                        <div className="col-md-6" align="center">
                        <Button tag="a" color="secondary" style={{backgroundColor:"red",borderRadius:10,marginTop:10}}  className='text-white'wideMobile href="/Payment_Details">
                        PENDING
                        </Button>
                        </div> 
                        </div>
                        </Card>
                        </div>

                        <div className='row' style={{paddingLeft:30}}>
                            <div className='row' style={{marginTop:10}}>
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
                                  <span style={{color:"grey",fontSize:13}}>Recommendation oj jeff Brown in Day One newsletter. The concept is so good that it's obvious to me that this is a very good investment.Go Team!!</span>
                                 </Card>
 
                            </div>

                        </div>

                        


                        <div className='row'>
                            <div className='row' style={{marginTop:10,paddingLeft:30}}>
                                
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
                                  <span style={{color:"grey",fontSize:13}}>Recommendation oj jeff Brown in Day One newsletter. The concept is so good that it's obvious to me that this is a very good investment.Go Team!!</span>
                                 </Card>
 
                            </div>

                        </div>

                  <div className="reveal-from-bottom" data-reveal-delay="600" align="Center" style={{marginTop:10}}>
                  <Button tag="a" color="primary" style={{borderRadius:8,color:"white",width:300}} wideMobile href="">
                  View More
                  </Button>
                  </div>
                </div>
            </div>
        </body>
   )
}
export default Investors_Dashboards;        