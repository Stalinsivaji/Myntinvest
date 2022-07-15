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
import Campaign_FAQ from "./Campaign_FAQ";



const Campaign_Banner = ({
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
);

return (

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
                href="/Campaign"
                style={{fontSize:12}}>
                Back To Campaign
                </Link>                
            </Breadcrumbs>

           </div>              
           </div><br/><br/><br/>

            <div className='row'>
                <div className='col-md-12'><strong style={{fontSize:25}}>Banner Videos</strong></div>
                <p style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar commodo eget turpis est dolor Pulvinar cras<br/>elementum eget. purus interdum semper accumsan metus est aenean turpis. Neque, amet amet turpis quam nisi ut<br/>Venenatis. Eu in suscipit quis non. Amet, non elit morbi eu. Nisi, mauris quam eget aliquet. Malesuada suspendisse at<br/>aliquam convallis inerdum.</p>
            </div>

            <div className="row">
                <div className='col-md-6'><h6>Banner Photo</h6></div>
                <div className='col-md-6'>
                <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",borderColor:'#E5E8E8',width:182}} wideMobile href="#0">
                Upload Photo
                </Button>
                </div>            
            </div><br/>

            <div className='row'>
                <div className='col-md-5'><h6><b>Videos</b></h6></div>               
            <div className="col-md-5">
            <ButtonGroup>
            <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",borderColor:'#E5E8E8',width:160}} wideMobile href="#0">
                Upload Video
            </Button>&nbsp;&nbsp;

            <Button tag="a"  style={{backgroundColor:"#2ECC71",borderRadius:8,color:"white",width:160}} wideMobile href="#0">
                Embed Video
            </Button>
            </ButtonGroup>
            </div>
            </div><br/>

            <div className='row'>
                <div className='col-md-3'><Image   src={require('./../../assets/images/hand001.jpg')}alt="Features tile icon 01" style={{width:300,height:150}} /></div>
                <div className='col-md-3'><Image   src={require('./../../assets/images/hand02.jpg')}alt="Features tile icon 01"  style={{width:300,height:150}}  /></div>
                <div className='col-md-3'><Image   src={require('./../../assets/images/h1.jpg')}alt="Features tile icon 01"  style={{width:300,height:150}} /></div>
            </div><br/>

            <div className="row">
                <div className='col-md-6'><h6>Picture Photo<code style={{color:"red"}}>*</code></h6></div>
                <div className='col-md-6'>
                <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",borderColor:'#E5E8E8',width:182}} wideMobile href="#0">
                Upload Picture
                </Button>
                </div>           
            </div><br/>

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