import React from "react";
import classNames from 'classnames';
import Button from '../elements/Button';
import ButtonGroup from "../elements/ButtonGroup";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Image from "../elements/Image";
import '../Css/styles.css';


const Campaign_Press = ({
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
                    Back To Dashboard
                    </Link>
                    
                </Breadcrumbs>

                
              </div>              
              </div>
              <br/>
              <br/>
              
              <div>
              <strong style={{fontSize:35}}>Press</strong>
              &nbsp;
              &nbsp;
              <p style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam nunc at nibh. Odio erat turpis sit at bibendum nunc adipiscing sed.<br/>Tincidunt enim, amet vitae nibh cursus imperdiet erat</p>
              
              <br/>
              <br/>

             <div className="row">
             <div clasName="col-md-12"> 
             <h6 style={{fontSize:15}}>Header<code style={{color:"red"}}>*</code></h6><br/>
                 <form>
                     <div className="row">
                     <div className="col-md-8">
                     <div className="input-group"><input type="text" style={{height:40,backgroundColor:"#E5E8E8",fontSize:15}} className="form-control" placeholder="Enter Your header/title here" /></div>
                     </div>
                     </div>
                  </form><br/>
             </div>  

             <div className="col-md-12">
                  <h6 style={{fontSize:15}}>Body<code style={{color:"red"}}>*</code></h6>
                  <div className="row">
                     <div className="col-md-8"style={{width:750,height:300,backgroundColor:"white"}}>
                     <Editor 
                         toolbarClassName="toolbarClassName"
                         wrapperClassName="wrapperClassName"
                         editorClassName="editorClassName"/>
                     </div>   
                   </div><br/>&nbsp;&nbsp;
                   </div><br/>&nbsp;&nbsp;


                   <div className="row">
                       <div className='col-md-6'><h6 style={{fontSize:15}}>Banner Photo</h6></div>
                       <div className='col-md-6'>
                       <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",borderColor:'#E5E8E8',width:182}} wideMobile href="">
                       Upload Picture
                       </Button>
                       </div>
                   </div><br/>
                   
                   <div className="row" align="center">
                    <div className="col-md-8">
                    <p style={{color:"grey"}}>----------or----------</p>
                    </div>
                   </div>

                   <div className='row'>
                   <div className='col-md-4'><h6 style={{fontSize:15}}>Videos</h6><p style={{fontSize:12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam nunc at nibh. Odio erat turpis sit at bibendum nunc adipiscing sed.</p></div>
                   <div className="col-md-8">
                   <ButtonGroup>
                   <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",borderColor:'#E5E8E8',width:160}} wideMobile href="">
                    Upload a Video
                    </Button>&nbsp;&nbsp;
                    <Button tag="a"  style={{backgroundColor:"#2ECC71",borderRadius:8,color:"white",width:160}} wideMobile href="">
                    Embed Video
                    </Button>
                    </ButtonGroup>
                    </div>
                    </div>
                   < br/>
                   </div>&nbsp;
                
                
                
                   <div className="features-tiles-item-image mb-16" style={{backgroundColor:"#f9faf9"}}>
                   <Image
                  src={require('./../../assets/images/video-placeholder.jpg')}
                  alt="video-placeholder.jpg"
                  width={300}
                  height={300}
                  /></div>

                   <div className="row">
                   
                 
                   <Button tag="a" color="secondary" className='text-white' style={{backgroundColor:"#2ECC71",borderRadius:8,width:160}} wideMobile href="/Campaign">
                   Publish
                     </Button></div>

              </div>
              </div>
              </div>
              </div>
              </div>
              

              


              
               
               

) ;       
};



export default Campaign_Press;