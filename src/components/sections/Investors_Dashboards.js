import React, {Component} from "react";
import classNames from 'classnames';
import Button from '../elements/Button';
import Image from "../elements/Image";
import '../Css/styles.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


import {
  Card,
  CardHeader,
    
} from "@material-ui/core";


const Investors_Dashboards = ({
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

               <nav aria-label="breadcrumb">
                            <ol class="breadcrumb arr-right">
                              <li class="breadcrumb-item text-sm" aria-current="page" style={{color:"Grey"}}>Investor</li>
                              <li class="breadcrumb-item text-sm active" aria-current="page" style={{color:'#23b347'}}>Dashboard</li>
                              <li class="breadcrumb-item text-sm text-dark active"><a class="opacity-5 text-dark" href="/Portfolio">Portfolio</a></li>
                              <li class="breadcrumb-item text-sm text-dark active"><a class="opacity-5 text-dark" href="/Investors_Analystics">Analystics</a></li>
                            </ol>
                          </nav>



                
                
              </div>              
              </div>
              
              <br/>
              <br/>
              <div className="row">
                 <h4><strong>Overview</strong>&nbsp;<p style={{fontSize:10,}}>Goog Morning Laura</p></h4>
              </div>


              <br/>
              <div className="row">
                <div className="col-md-4">
                  
                     &nbsp;
                      <Card  style={{backgroundColor:"#E9F7EF ",width:360,height:120}}>
                            <p style={{fontSize:12,padding:15}}>Total Investment value</p>
                            <strong style={{fontSize:25,padding:15,}}>$21.,500.00</strong>
                          </Card>

        
                    
                </div>
                
               
                <div className="col-md-4">

  
                 
                    &nbsp;                       
                    <Card   style={{backgroundColor:"#FDF2E9",width:360,height:120,alignItems:''}}>
                        <p style={{fontSize:12,padding:15}}>Startups Invested</p>
                        <strong style={{fontSize:25,padding:15,marginTop:-40}}>25</strong>
                      </Card>

        
                  
                </div>

                <div className="col-md-3">
                  &nbsp;
                    <Card   style={{backgroundColor:"#F2F3F4 ",width:200,height:120,alignItems:''}}>
                         <p style={{fontSize:12,alignItems:'center',marginTop:40}} className='text-center' >View All <br/>Investment<br/></p>
                            
                      </Card>
                
                </div>
              </div>


              <br/>
              <br/>
              <div className="row">
              
                    <h3 align="left">Complete Your Profile <br/><span style={{fontSize:15,color:"grey"}}>Complete your profile to start investing! </span></h3>
                  
              </div>

              <br/>
              <div className="row">
                     <Card style={{backgroundColor:"#FDF2E9",width:400,height:150,borderRadius:15}}>
                        <div className="row">
                             <div className="col-md-7" align="left" style={{paddingTop:8}}> <strong>KYC</strong>
                                <p style={{fontSize:9,color:"grey"}}>Complete your online KYC to start investing keep your PAN card handy!</p>
                              </div>          
                        <div className="col-md-4" align="center">
                        <Button tag="a" color="secondary" style={{backgroundColor:"red",borderRadius:10,marginTop:10}}  wideMobile href="/Investors_Details" className='text-white'>
                        PENDING
                        </Button>
                        </div> 
                        </div>
                        </Card>&nbsp;&nbsp;&nbsp;&nbsp;

                        
                        <Card style={{backgroundColor:"whitesmoke",width:'auto',height:150,borderRadius:15}}>
                        <div className="row"><div className="col-md-6" align="left" style={{paddingTop:8}}> <strong>Payment Details</strong>
                        <p style={{fontSize:9,color:"grey"}}>Complete your Payment Detailse</p></div>          
                        <div className="col-md-6" align="center">
                        <Button tag="a" color="secondary" style={{backgroundColor:"red",borderRadius:10,marginTop:10}}  className='text-white'wideMobile href="/Payment_Details">
                        PENDING
                        </Button>
                        </div> 
                        </div>
                        </Card>

              </div>

                        <br/>
                        <div className='row'>
                        <h3>Our Community</h3>

                        </div>

                        <br/>
                        <br/>
                        <div className="row">
                               <Card  style={{backgroundColor:"white",width:'auto'}}>
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

                           <br/>
                           <br/>
                           <div className="row">
                              <Card  style={{backgroundColor:"white",width:'auto'}}>
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

                             <br/>
                             <div className='row'>
                                  <div className="reveal-from-bottom" data-reveal-delay="600" align="Center">
                                      <Button tag="a" color="primary" style={{borderRadius:8,color:"white",width:'auto'}} wideMobile href="">
                                       View More
                                      </Button>
                                    </div>

                              </div>


              
              
             






              </div>
              </div>
              </div>
              </div>


    </body>          
              

              


              
               
               

) ;       
};



export default Investors_Dashboards;