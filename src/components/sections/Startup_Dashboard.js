import React from "react";
import classNames from 'classnames';
import Image from "../elements/Image";
import Button from '../elements/Button';
import ButtonGroup from "../elements/ButtonGroup";
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
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb arr-right">
                      <li class="breadcrumb-item text-sm" aria-current="page" style={{color:"Grey"}}>Startup</li>
                      <li class="breadcrumb-item text-sm active" aria-current="page" style={{color:'#23b347'}}>Dashboard</li>
                      <li class="breadcrumb-item text-sm text-dark active"><a class="opacity-5 text-dark" href="/Campaign">Campaign</a></li>
                      <li class="breadcrumb-item text-sm text-dark active"><a class="opacity-5 text-dark" href="/Analystics">Analystics</a></li>
                    </ol>
                  </nav>
                </div>
                <h3 align="left" style={{marginTop:100}}>Raise with MyntInvest</h3>
                 <p align="left" style={Color}>We collect and determine the purposes and means of the processing of certainin formation that may also receive,and process Personal Information controlled and stored by third parties with your consent </p>
                
                 <Card style={{backgroundColor:"whitesmoke",width:450,height:200,borderRadius:15}}>
                <div className="row"><div className="col-md-6" align="left" style={{marginTop:18}}> <strong>E-Sign</strong>
                <p style={{fontSize:11,color:"grey"}}>E-Sign your aggrementes to finalize investment in your Campaign</p></div>          
                <div className="col-md-6" align="center">
                <Button tag="a" color="secondary" style={{backgroundColor:"#2ECC71",borderRadius:10,marginTop:15}}  className='text-white' wideMobile href="/">
                Download
                </Button>
                </div> 
                </div>
                </Card>

               
                <h3 align="left" style={{marginTop:50}}>About</h3>
                <div className="row">
                <Card style={{backgroundColor:"#FDF2E9",width:450,height:210,borderRadius:15}}>
                <div className="row"><div className="col-md-6" align="left" style={{marginTop:18}}> <strong>Company Profile</strong>
                <p style={{fontSize:11,color:"grey"}}>Tell us a little about your company</p></div>          
                <div className="col-md-6" align="center">
                <Button tag="a" color="secondary" style={{backgroundColor:"#2ECC71",borderRadius:10,marginTop:15}}  className='text-white' wideMobile href="/Company_Info">
                Completed
                </Button>
                </div> 
                </div>
                </Card>&nbsp;&nbsp;&nbsp;&nbsp;


                <Card style={{backgroundColor:"whitesmoke",width:450,height:210,borderRadius:15}}>
                <div className="row"><div className="col-md-6" align="left" style={{marginTop:18}}> <strong>Team</strong>
                <p style={{fontSize:12,color:"grey"}}>Tell us a little about your team</p></div>          
                <div className="col-md-6" align="center">
                <Button tag="a" color="secondary" style={{color:"white",backgroundColor:"Red",borderRadius:10,marginTop:18}}  className='text-white' wideMobile href="/Team_Info">
                Pending
                </Button>
                </div> 
                </div>
                </Card>
                </div>

                <h3 align="left" style={{marginTop:50}}>Pitch</h3>
                <div className="row">
                <Card style={{backgroundColor:"#EAFAF1 ",width:500,height:360,borderRadius:15}}>
                <div className="row"><div className="col-md-6" align="left" style={{marginTop:18}}> <strong>Pitch Deck</strong>
                <p style={{fontSize:11,color:"grey"}}>This will be displayed to your potential Investors</p></div>          
                <div className="col-md-6" align="center">
              
                <Button tag="a" color="secondary" style={{backgroundColor:"red",borderRadius:10,marginTop:15}}  className='text-white' wideMobile href="/">
                Pending
                </Button>
                
                </div> 
                &nbsp;
                <div className="row"  style={{marginBotom:300}}>
                   
                 <div className="col-md-12" align='center' >
                 <ButtonGroup>
                 <Button tag="a" className='text-white' style={{backgroundColor:"#2ECC71",borderRadius:10,marginTop:12}} wideMobile href="/Upload_Pitch">
                 Upload a PDF
                  </Button>

                  <Button tag="a" className='text-dark' style={{backgroundColor:"white",borderRadius:10,marginTop:12}} wideMobile href="/Create_Pitch">
                  Create a Pitch
                  </Button>
                  </ButtonGroup> 
                  </div>
                 </div>  
                </div>
                </Card>&nbsp;&nbsp;&nbsp;&nbsp;


               
                <Card style={{backgroundColor:"#F4F6F6 ",width:450,height:360,borderRadius:15}}>
                <div className="row" ><div className="col-md-6"  style={{marginTop:18}}> <strong>Review</strong>
                <p style={{fontSize:12,color:"grey"}}>Review your Pitch(created using MyntInvest pitch builder)</p></div>          
                <div className="col-md-6" align="center">
                <Button style={{backgroundColor:"#2ECC71",borderRadius:10,marginTop:18}}  className='text-white' wideMobile href="/">
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
                
            <div className={tilesClasses} >
                
                    <Card style={{height:550,width:350,borderRadius:15}} align="center">
                        <div className="row"  style={{marginTop:150}}>
                            <div className="col-md-4"></div>
                            <div className="col-md-4"><h6 style={{color:'grey'}}>Add a New Campaign</h6>
                            <div align="center" >
                              <Button tag="a" color="secondary" style={{height:50,width:50,backgroundColor:"white",fontSize:30,color:"grey",backgroundColor:"#ECF0F1 "}} wideMobile href="Campaign">+</Button></div></div>
                            <div className="col-md-4"></div></div>
                    </Card>&nbsp;&nbsp;&nbsp;&nbsp;

                 
                 <Card style={{borderRadius:15}} align="center"> 
              <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
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
                <Button tag="a" color="secondary" style={{backgroundColor:"white",borderRadius:8,color:"orange",fontSize:11}} wideMobile href="">
                    B2C
                    </Button>
                  <Button tag="a" color="secondary" style={{backgroundColor:"#FADBD8",borderRadius:8,color:"RED",fontSize:11}} wideMobile href="">
                    HEALTH & WELLNESS
                    </Button>
                </ButtonGroup>
                </div>
              </div>
            </div>
            </Card>
            
           </div>
           </div>

) ;       
};



export default Startup_Dashboard;