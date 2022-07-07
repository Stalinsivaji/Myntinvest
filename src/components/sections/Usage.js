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









const Usage = ({
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

                Back To Dashboard
                </Link>
                
            </Breadcrumbs>

            
          </div>              
          </div>
          
          
          <br/>        
          <div>
            <strong style={{fontSize:25}}>Create Pitch</strong>
         
           </div>

           <br/>
           <div className='row'> 
                   <div className='col-md-1'> <a href='/Create_Pitch'><Image   src={require('./../../assets/images/p1.png')}alt="Features tile icon 01"  width={50} height={50} borderRadius={50} /><p style={{fontSize:13}}>Problem</p></a> </div>
                   <div className='col-md-1'> <a href='/Solution'><Image   src={require('./../../assets/images/p002.png')}alt="Features tile icon 01"  width={50} height={50} /><p style={{fontSize:13}}>Solution</p></a> </div>
                   <div className='col-md-1'> <a href='/Product'><Image   src={require('./../../assets/images/p003.png')}alt="Features tile icon 01"  width={50} height={50} /><p style={{fontSize:13}}>Product</p></a> </div>
                   <div className='col-md-1'> <a href='/Transaction'><Image   src={require('./../../assets/images/p4.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Transaction</p></a> </div> 
                   <div className='col-md-1'> <a href='/Business_Model'><Image   src={require('./../../assets/images/p5.webp')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Business<br/>Model</p></a> </div>
                   <div className='col-md-1'> <a href='/Competition'><Image   src={require('./../../assets/images/p6.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Competition</p></a> </div>
                   <div className='col-md-1'> <a href='/Customer'><Image   src={require('./../../assets/images/p7.jpg')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Customers</p></a> </div>
                   <div className='col-md-1'> <a href='/Usage'><Image   src={require('./../../assets/images/p8.jpg')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{color:"#2ECC71",fontSize:13}}>Usage of Funds</p></a> </div>
                   <div className='col-md-1'> <a href='/Vision'><Image   src={require('./../../assets/images/900.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Vision</p></a> </div>
                   <div className='col-md-1'> <a href='/Potential_Returns'><Image   src={require('./../../assets/images/p10.webp')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{fontSize:13}}>Potential<br/>Reutrns</p></a> </div>
                </div>
            <hr/>

            <br/>
            <div className='row'>
                <div className='col-md-6'><strong style={{fontSize:25}}>Usage Of Funds</strong></div>
                <div className='col-md-6'>
                <Button tag="a"  style={{backgroundColor:"#2ECC71",borderRadius:8,color:"white",width:180}} wideMobile href="">
                View Reference
                </Button>
                </div>
                &nbsp;
                &nbsp;
                <p style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar commodo eget turpis est dolor Pulvinar cras<br/>elementum eget. purus interdum semper accumsan metus est aenean turpis. Neque, amet amet turpis quam nisi ut<br/>Venenatis. Eu in suscipit quis non. Amet, non elit morbi eu. Nisi, mauris quam eget aliquet. Malesuada suspendisse at<br/>aliquam convallis inerdum.</p>

            </div>

          <br/>
          <strong style={{fontSize:15}}>Header</strong><br/>
             
          <form>
            <div className="row">
               
              <div className="col-md-8">
              <div className="input-group"><input type="text" style={{height:40,backgroundColor:"#E5E8E8",fontSize:12}} className="form-control" placeholder="Enter Your header/title here" /></div>
                  </div>
                      
                     </div>
                
            </form>
                   
           <br/>
           <strong style={{fontSize:15}}>body</strong>
           <div className="row" >
            
              <div className="col-md-8"style={{width:750,height:300,backgroundColor:"white"}}>
              <Editor 
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                /></div>
                  
            </div>
            
            <br/>&nbsp;&nbsp;
            <div className="row">
                <div className='col-md-6'><strong style={{fontSize:15}}>Images</strong></div>
                <div className='col-md-6'>
                <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",borderColor:'#E5E8E8',width:182}} wideMobile href="">
                Upload Picture
                </Button>
                </div>
            
            </div>

            <br/>
            <div className='row'>
                <div className='col-md-3'><Image   src={require('./../../assets/images/hand001.jpg')}alt="Features tile icon 01" style={{width:300,height:150}} /></div>
                <div className='col-md-3'><Image   src={require('./../../assets/images/hand02.jpg')}alt="Features tile icon 01"  style={{width:300,height:150}}  /></div>
                <div className='col-md-3'><Image   src={require('./../../assets/images/hand3.avif')}alt="Features tile icon 01"  style={{width:300,height:150}} /></div>


            </div>
            
            <br/>
            <div className='row'>
                <div className='col-md-5'><h6 style={{fontSize:13}}><b>Videos</b></h6></div>
                
                
            <div className="col-md-5">
                <ButtonGroup>
            <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",borderColor:'#E5E8E8',width:160}} wideMobile href="">
                Add Members
                </Button>&nbsp;&nbsp;
              <Button tag="a"  style={{backgroundColor:"#2ECC71",borderRadius:8,color:"white",width:160}} wideMobile href="">
                Submit
                </Button></ButtonGroup>
            </div>
                </div>




            <br/>
            <Button tag="a" color="secondary" className='text-white' style={{backgroundColor:"#2ECC71",borderRadius:8,width:160}} wideMobile href="/Vision">
            Next
              </Button>
          






          </div>
          </div>
          </div>
          </div>


</body>          
          

              


              
               
               

) ;       
};



export default Usage;