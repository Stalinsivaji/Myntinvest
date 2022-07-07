import React from "react";
import classNames from 'classnames';
import Image from "../elements/Image";
import Button from '../elements/Button';
import ButtonGroup from "../elements/ButtonGroup";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import '../Css/styles.css';
import {
    
    Card,
      
  } from "@material-ui/core";
  





const Team_Info= ({
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
              <br/>
              
              <div>
              <strong style={{fontSize:35}}>Team Info</strong>
              &nbsp;
              &nbsp;
              <p style={{fontSize:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam nunc at nibh. Odio erat turpis sit at bibendum nunc adipiscing sed.<br/>Tincidunt enim, amet vitae nibh cursus imperdiet erat</p>
              
              <br/>
              <br/>
              <div className="ROW">
              01
              </div>
              
              <br/>
              <strong style={{fontSize:14}}>Name</strong><br/>
                 
              <form>
                  
                      <input
                         style={{width: 380,height: 40,backgroundColor:"#E5E8E8",fontSize:12}}
                         placeholder='Enter Your Team Members Name'
                         className="form-control"
                         type="text" 
                         
                        />
                    
                </form>
                  

                <br/>
                <strong style={{fontSize:14}}>Position in the Company</strong><br/>
                <form>
                   <input
                      style={{width: 380,height: 40,fontSize:12,backgroundColor:"#F2F3F4"}}
                      placeholder='Position Name'
                      className="form-control"
                      type="text" 
                    />
                </form>
                            
                 
                 

                <br/>
                <div className='row'>
                  <strong style={{fontSize:14}}>Social Media Handles</strong><br/>
                   <div className='col-md-1'><a href=''><Image   src={require('./../../assets/images/face.png')}alt="Features tile icon 01"  width={50} height={50}  /></a></div>
                   <div className='col-md-1'>
                      <form >
                        <input
                          style={{width: 279,height: 40,fontSize:12,backgroundColor:"#F2F3F4"}}
                          placeholder='Facebook Link'
                          className="form-control"
                          type="text" 
                         />
                       </form>
                    </div> 
                    
                
                    
                 </div>
                 &nbsp;
                
                 <div className='row'>
                  
                   <div className='col-md-1'><a href=''><Image   src={require('./../../assets/images/insta.jpg')}alt="Features tile icon 01"  width={50} height={50}  /></a></div>
                   <div className='col-md-1'>
                      <form >
                        <input
                          style={{width: 279,height: 40,fontSize:12,backgroundColor:"#F2F3F4"}}
                          placeholder='Instagram Link'
                          className="form-control"
                          type="text" 
                         />
                       </form>
                    </div> 
                    
                
                    
                 </div>
                &nbsp;
                <div className='row'>
                  
                   <div className='col-md-1'><a href=''><Image   src={require('./../../assets/images/lin.png')}alt="Features tile icon 01"  width={58} height={58}  /></a></div>
                   <div className='col-md-1'>
                      <form >
                        <input
                          style={{width: 279,height: 40,fontSize:12,backgroundColor:"#F2F3F4"}}
                          placeholder='Linked In Link'
                          className="form-control"
                          type="text" 
                         />
                       </form>
                    </div> 
                    
                
                    
                 </div>
             
              
              <br/>
              <strong style={{fontSize:14}}>Bio</strong><br/>
                 
              <form>
                  
                      <input
                         style={{width: 380,height: 150,backgroundColor:"#E5E8E8",fontSize:12}}
                         placeholder='Type something about your team member....'
                         className="form-control"
                         type="text" 
                         
                        />
                    
                </form>
                
             <br/>   
              <div className='row'>
                <div className='col-md-2'> <a style={{fontSize:12}}>Profile Picture</a> </div>
                <div className='col-md-1'>
                <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",fontSize:10,borderColor:'#E5E8E8',width:180}} wideMobile href="">
                    Upload Picture
                    </Button>
                </div>
               
                
                </div> 



                <br/>
              <br/>
              <div className="ROW">
              02
              </div>
              
              <br/>
              <strong style={{fontSize:14}}>Name</strong><br/>
                 
              <form>
                  
                      <input
                         style={{backgroundColor:"#F2F3F4",width: 380,height: 40,backgroundColor:"#E5E8E8",fontSize:12}}
                         placeholder='Enter Your Team members Name'
                         className="form-control"
                         type="text" 
                         
                        />
                    
                </form>
                  

                <br/>
                <strong style={{fontSize:14}}>Position in the company</strong><br/>
                <form>
                   <input
                      style={{backgroundColor:"#F2F3F4",width: 380,height: 40,fontSize:12}}
                      placeholder='Position Name'
                      className="form-control"
                      type="text" 
                    />
                </form>
                            
                 
                 

                <br/>
                <div className='row'>
                <strong style={{fontSize:14}}>Social Media Handles</strong><br/>
                   <div className='col-md-1'><a href=''><Image   src={require('./../../assets/images/face.png')}alt="Features tile icon 01"  width={50} height={50}  /></a></div>
                   <div className='col-md-1'>
                      <form >
                        <input
                          style={{backgroundColor:"#F2F3F4",width: 279,height: 40,fontSize:12}}
                          placeholder='Facebook Link'
                          className="form-control"
                          type="text" 
                         />
                       </form>
                    </div> 
                    
                
                    
                 </div>
                 &nbsp;
                
                 <div className='row'>
                  
                   <div className='col-md-1'><a href=''><Image   src={require('./../../assets/images/insta.jpg')}alt="Features tile icon 01"  width={50} height={50}  /></a></div>
                   <div className='col-md-1'>
                      <form >
                        <input
                          style={{backgroundColor:"#F2F3F4",width: 279,height: 40,fontSize:12}}
                          placeholder='Instagram Link'
                          className="form-control"
                          type="text" 
                         />
                       </form>
                    </div> 
                    
                
                    
                 </div>
                &nbsp;
                <div className='row'>
                  
                   <div className='col-md-1'><a href=''><Image   src={require('./../../assets/images/lin.png')}alt="Features tile icon 01"  width={58} height={58}  /></a></div>
                   <div className='col-md-1'>
                      <form >
                        <input
                          style={{backgroundColor:"#F2F3F4",width: 279,height: 40,fontSize:12}}
                          placeholder='Linked In Link'
                          className="form-control"
                          type="text" 
                         />
                       </form>
                    </div> 
                    
                
                    
                 </div>
             
              
              <br/>
              <strong style={{fontSize:14}}>Bio</strong><br/>
                 
              <form>
                  
                      <input
                         style={{width: 380,height: 150,backgroundColor:"#E5E8E8",fontSize:12}}
                         placeholder='Type something about your team member....'
                         className="form-control"
                         type="text" 
                         
                        />
                    
                </form>
                
                <br/>
                <div className='row'>
                    <div className='col-md-2'>
                          <a style={{fontSize:12}}>Profile Picture</a>
                    </div>
                    
                    <div className='col-md-2'>
                      <Card style={{backgroundColor:"#F2F3F4",width:175,height:150}}>
                          <div className="row">
                               <Image   src={require('./../../assets/images/infocard.jpg')}alt="Features tile icon 01"   />
                                <Button  className='text-center' style={{backgroundColor:"#F2F3F4",fontSize:12}}>
                                 ReUpload
                                </Button>
                            </div>  
                        </Card>
                    </div>
                </div>


                <br/>
                <ButtonGroup>
                <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",borderColor:'#E5E8E8',width:182}} wideMobile href="">
                    Add Members
                    </Button>
                  <Button tag="a"  style={{backgroundColor:"#2ECC71",borderRadius:8,color:"white",width:182}} wideMobile href="">
                    Submit
                    </Button>
                </ButtonGroup>
                   
              




              
              </div>


              </div>
              </div>
              </div>
              </div>
              
</body>


              
               
               

) ;       
};



export default Team_Info;