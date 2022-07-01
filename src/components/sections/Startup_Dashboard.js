import React from "react";
import classNames from 'classnames';
import Image from "../elements/Image";
import Button from '../elements/Button';
import ButtonGroup from "../elements/ButtonGroup";
import { NavLink } from "react-router-dom";
import '../Css/styles.css';
import {
    Card   
  } from "@material-ui/core";

const Color = {
    color:"grey"
}



const Startup_Dashboard = ({
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
    
             
        <div className="row text-center">
  
               <div className="row">
               <div className="col-md-1"></div>
               <div className="col-md-11">
               <div className="m-5 p-4">
               <div className="row">
               <div className="col-md-12">
               <nav className="navbar navbar-expand-sm bg-Secondary navbar-white ">
                                <ul className="navbar-nav" style={{fontSize:20}}>
                                <li className="nav-item" >
                                    <NavLink to="/"  className="nav-link" style={{color:"Grey"}}>Startup</NavLink>
                                  </li>
                                  <li className="nav-item">
                                    <NavLink to="/Blog" className="nav-link" style={{color:'#23b347'}} >Dashboard</NavLink>
                                  </li>
                                  <li className="nav-item">
                                    <NavLink to="/" className="nav-link" >Campaign</NavLink>
                                  </li>
                                  <li className="nav-item">
                                    <NavLink to="/FAQ" className="nav-link" >Analystics</NavLink>
                                  </li>
                                </ul>
                            </nav>
              </div>

              
                 <h3 align="left" style={{marginTop:100}}>Raise with MyntInvest</h3>
                 <p align="left" style={Color}>We collect and determine the purposes and means of the processing of certainin formation that may also receive,and process Personal Information controlled and stored by third parties with your consent </p>
                 <Card style={{backgroundColor:"#F2F3F4",width:500,height:180}}>
                <div className="row"><div className="col-md-6" align="left" style={{marginTop:18}}> <strong>E-Sign</strong>
                <p style={{fontSize:12,color:"grey"}}>E-Sign your aggrementes to finalize investment in your Campaign</p></div>          
                <div className="col-md-6" >
                <Button style={{backgroundColor:"#2ECC71",borderRadius:10,fontSize:20,marginTop:18}}  className='text-white'>
                Download
                </Button>
                </div>  
                </div>      
                </Card>
                <h3 align="left" style={{marginTop:50}}>About</h3>
                <div className="row">
                <div className="col-md-5">
                <Card style={{backgroundColor:"#FDF2E9",width:500,height:160}}>
                <div className="row"><div className="col-md-6" align="left" style={{marginTop:18}}> <strong>Company Profile</strong>
                <p style={{fontSize:12,color:"grey"}}>Tell us a little about your company</p></div>          
                <div className="col-md-6" >
                <Button tag="a" color="secondary" style={{backgroundColor:"#2ECC71",borderRadius:10,fontSize:20,marginTop:18,color:"white"}} wideMobile href="/Startup_Company">
                Completed
                    </Button>
                </div>
                </div>      
                </Card>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-5">
                <Card style={{backgroundColor:"#F4F6F6 ",width:500,height:160}}>
                <div className="row"><div className="col-md-6" align="left" style={{marginTop:18}}> <strong>Team</strong>
                <p style={{fontSize:12,color:"grey"}}>Tell us a little about your team</p></div>          
                <div className="col-md-6" >
                <Button style={{backgroundColor:"red",borderRadius:10,fontSize:20,marginTop:18}}  className='text-white'>
                Pending
                </Button>
                </div>
                </div>      
                </Card>
                </div>  
                </div>

                <h3 align="left" style={{marginTop:50}}>Pitch</h3>
                <div className="row">
                <div className="col-md-5">
                <Card style={{backgroundColor:"#EAFAF1 ",width:500,height:250}}>
                <div className="row">
                <div className="col-md-6" align="left" style={{marginTop:18}}> <strong>Pitch Deck</strong>
                <p style={{fontSize:12,color:"grey"}}>This will be displayed to your potential Investors</p></div>          
                <div className="col-md-6" >
                <Button style={{backgroundColor:"red",borderRadius:10,fontSize:20,marginTop:18}}  className='text-white'>
                Pending
                </Button>
                </div>
                </div> 
                <div className="row" style={{marginBotom:200}}>
                 <div className="col-md-10"><Button style={{backgroundColor:"#2ECC71",borderRadius:10,fontSize:13,marginTop:18}}  className='text-white'>
                Upload a PDF
                </Button>&nbsp;
                <Button style={{backgroundColor:"white",borderRadius:10,fontSize:13,marginTop:18}}  className='text-dark'>
                Create a Pitch
                </Button></div>   
                <div className="col-md-2"></div>   </div>     
                </Card>
                </div>

                <div className="col-md-2"></div>

                <div className="col-md-5">
                <Card style={{backgroundColor:"#F4F6F6 ",width:500,height:250}}>
                <div className="row"><div className="col-md-6" align="left" style={{marginTop:18}}> <strong>Review Pitch</strong>
                <p style={{fontSize:12,color:"grey"}}>Review your Pitch(created using MyntInvest pitch builder)</p></div>          
                <div className="col-md-6" >
                <Button style={{backgroundColor:"#2ECC71",borderRadius:10,fontSize:20,marginTop:18}}  className='text-white'>
                Completed
                </Button>
                </div>
                </div>      
                </Card>
                </div>  
                
                </div>
                </div>
                </div>
                </div>
                </div>
                
            <div className={tilesClasses}>
                <div className="">
                    <Card style={{height:550,width:350}}>
                        <div className="row" style={{marginTop:150}}>
                            <div className="col-md-4"></div>
                            <div className="col-md-4"><h6 style={{color:'grey'}}>Add a New Campaign</h6><Button style={{backgroundColor:"white",fontSize:30,color:"grey",backgroundColor:"#ECF0F1 "}}>+</Button></div>
                            <div className="col-md-4"></div></div>
                    </Card></div>&nbsp;

                <div className="" align="center">  
                 <Card> 
                    <div className="tiles-item reveal-from-bottom" data-reveal-delay="400" >
              <div className="tiles-item-inner" >
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/card7.jpg')}
                      alt="Features tile icon 07"
                      width={500}
                      height={500} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" align="left">
                    Arwork
                    </h4>
                  <p className="m-0 text-sm" align="left">
                    Apparel thats boosts your immune health,cognition,recovery and sleep.
                    </p><br/>
                    <p align="left" style={{color:"grey"}} >Santa Monica,CA</p>
                <ButtonGroup>
                <Button tag="a" color="secondary" style={{backgroundColor:"white",borderRadius:8,color:"orange",fontSize:10}} wideMobile href="">
                    B2C
                    </Button>
                  <Button tag="a" color="secondary" style={{backgroundColor:"#FADBD8",borderRadius:8,color:"RED",fontSize:10}} wideMobile href="">
                    HEALTH & WELLNESS
                    </Button>
                </ButtonGroup>
                </div>
              </div>
            </div></Card></div>
                <div className=""></div>
        

           </div>
           </div>

) ;       
};



export default Startup_Dashboard;