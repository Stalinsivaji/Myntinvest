import React, {Component} from "react";
import classNames from 'classnames';
import Button from '../elements/Button';
import Image from "../elements/Image";
import '../Css/styles.css';
import {
  Card   
} from "@material-ui/core";


const Learn = ({
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
                <br/>
               <div className="row" >

                <h3>learn</h3>             
                <p>understand How MyntInvest's Different Processes Work To Complete A Successful Deal</p>   

                
              </div>              
              </div>

               <div className="row" style={{marginTop:50}}>
                <Card style={{backgroundColor:"whitesmoke",width:500,height:170,borderRadius:15}}>
                <div className="row"><div className="col-md-6" align="left" style={{marginTop:18}}> <strong>How it works</strong>
                <p style={{fontSize:10,color:"grey"}}>Understand how MyntInvest's different Processes work to Complete a successful deal</p></div>          
                <div className="col-md-6" >
                <Button tag="a" color="secondary" style={{backgroundColor:"#2ECC71",borderRadius:10,marginTop:15}}  className='text-white' wideMobile href="/How_It_Works">
                VIEW
                </Button>
                </div> 
                </div>
                </Card>&nbsp;&nbsp;


                <Card style={{backgroundColor:"whitesmoke",width:500,height:170,borderRadius:15}}>
                <div className="row"><div className="col-md-6" align="left" style={{marginTop:18}}> <strong>Blogs</strong>
                <p style={{fontSize:10,color:"grey"}}>Stay up to date with what's brewing in the Startup ecosystems</p></div>          
                <div className="col-md-6" >
                <Button tag="a" color="secondary" style={{backgroundColor:"#2ECC71",borderRadius:10,marginTop:15}}  className='text-white' wideMobile href="/Blog">
                VIEW
                </Button>
                </div> 
                </div>
                </Card>
                </div>
              
              <br/>
              <br/>
              <div className='row'>
                <h3>Quick Reads</h3>
                <p>Quick Courses To Digest in Less Than 30 Minutes</p>
              </div>

              <br/>
              <div className="row">
                <div className="col-md-8">
                <Image
                      src={require('./../../assets/images/Metaverse.jpg')}
                      alt="Metaverse"
                      width={700}
                      height={600} 
                    />
                </div>   
                
               
                
                
                <div className="col-md-4" data-reveal-delay="200">
             
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/card6.jpg')}
                      alt="Features tile icon 05"
                      width={500}
                      height={500} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" align="left">
                    Lorem ipsum dolor sit amet
                    </h4>
                  <p className="m-0 text-sm"  align="left">
                       If you're wondering how to send cold messages on Linkedin without...
                    </p><br/>
                    <span  align="left">by Lee Morgan</span><br/>
                    <span  align="left" style={{color:"grey"}}>July 23,2022</span>
                </div>
              
            </div>
                
              </div>


            <div className="row">
              
            <div className="col-md-4" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/card1.jpg')}
                      alt="Features tile icon 01"
                      width={500}
                      height={500} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" align="left">
                    Lorem ipsum dolor sit amet
                    </h4>
                  <p className="m-0 text-sm"  align="left">
                       If you're wondering how to send cold messages on Linkedin without...
                    </p><br/>
                    <span  align="left">by Lee Morgan</span><br/>
                    <span  align="left" style={{color:"grey"}}>July 23,2022</span>
                </div>
              </div>
            </div>

            
            <div className="col-md-4" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/card5.jpg')}
                      alt="Features tile icon 05"
                      width={500}
                      height={500} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" align="left">
                    Lorem ipsum dolor sit amet
                    </h4>
                  <p className="m-0 text-sm"  align="left">
                       If you're wondering how to send cold messages on Linkedin without...
                    </p><br/>
                    <span  align="left">by Lee Morgan</span><br/>
                    <span  align="left" style={{color:"grey"}}>July 23,2022</span>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/card6.jpg')}
                      alt="Features tile icon 05"
                      width={500}
                      height={500} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" align="left">
                    Lorem ipsum dolor sit amet
                    </h4>
                  <p className="m-0 text-sm"  align="left">
                       If you're wondering how to send cold messages on Linkedin without...
                    </p><br/>
                    <span  align="left">by Lee Morgan</span><br/>
                    <span  align="left" style={{color:"grey"}}>July 23,2022</span>
                </div>
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



export default Learn;