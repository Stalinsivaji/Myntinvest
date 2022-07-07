import React, {Component} from "react";
import classNames from 'classnames';
import Button from '../elements/Button';
import Link from "@material-ui/core/Link";
import Image from "../elements/Image";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import '../Css/styles.css';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ButtonGroup from "../elements/ButtonGroup";









const Campaign_Banner= ({
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
                <Breadcrumbs separator=">" aria-label="breadcrumb">
                    <Link
                    color="inherit"
                    href="/Startup_Dashboard"
                    style={{fontSize:12}}
                    >

                    Back To Campaign
                    </Link>
                    
                </Breadcrumbs>

                
              </div>              
              </div>
              <br/>
           
               

                
                <div className='row'>
                    <div className='col-md-12'><strong style={{fontSize:25}}>Banner Video</strong></div>
                    <p style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar commodo eget turpis est dolor Pulvinar cras elementum eget. purus interdum semper accumsan metus est aenean turpis. Neque, amet amet turpis quam nisi ut Venenatis. Eu in suscipit quis non. Amet, non elit morbi eu. Nisi, mauris quam eget aliquet. Malesuada suspendisse at aliquam convallis inerdum.</p>

                </div>
              <br/>

        
          
                <div className="row">
                    <div className='col-md-6'><h6>Banner Photo</h6></div>
                    <div className='col-md-6'>
                    <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",borderColor:'#E5E8E8',width:182}} wideMobile href="">
                    Upload Picture
                    </Button>
                    </div>
                </div>

                <br/>
                <div className="col-md-8" align="center">
                <p style={{color:"grey"}}>------------ or -------------</p> </div>

                <div className='row'>
                    <div className='col-md-5'><h6><b>Videos</b></h6></div>
                <div className="col-md-5">
                    <ButtonGroup>
                <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",borderColor:'#E5E8E8',width:160}} wideMobile href="">
                    Upload Video
                    </Button>
                  <Button tag="a"  style={{backgroundColor:"#2ECC71",borderRadius:8,color:"white",width:160}} wideMobile href="">
                    Embed Video
                    </Button></ButtonGroup>
                </div>
             </div><br/>

                <div className='row'>
                    <div className='col-md-5'><Image   src={require('./../../assets/images/hand001.jpg')}alt="Features tile icon 01" style={{width:300,height:150}} /></div>&nbsp;
                    <div className='col-md-5'><Image   src={require('./../../assets/images/hand3.avif')}alt="Features tile icon 01"  style={{width:300,height:150}} /></div>
                </div>
                <br/>
           

                <div className="row">
                    <div className='col-md-6'><h6>Profile Picture<span style={{color:"red"}}>*</span></h6></div>
                    <div className='col-md-6'>
                    <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",borderColor:'#E5E8E8',width:182}} wideMobile href="">
                    Upload Picture
                    </Button>
                    </div>
                </div>


                <br/>
                <Button tag="a" color="secondary" className='text-white' style={{backgroundColor:"#2ECC71",borderRadius:8,width:160}} wideMobile href="/Campaign">
                Submit
                  </Button>
              






              </div>
              </div>
              </div>
              </div>


    </body>          
              

              


              
               
               

) ;       
};



export default Campaign_Banner;