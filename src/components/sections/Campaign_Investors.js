import React from "react";
import classNames from 'classnames';
import Image from "../elements/Image";
import Button from '../elements/Button';
import ButtonGroup from "../elements/ButtonGroup";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import '../Css/styles.css';
import {Card} from "@material-ui/core";




const Campaign_Investors = ({
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
              <strong style={{fontSize:35}}>Investors</strong>
              &nbsp;
              &nbsp;
              <p style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam nunc at nibh. Odio erat turpis sit at bibendum nunc adipiscing sed.<br/>Tincidunt enim, amet vitae nibh cursus imperdiet erat</p>
              
              <br/>
              <br/>
             
              <h3>01</h3><hr/>
              
              <br/>
              <h6 style={{fontSize:14}}>Name</h6>
                 
               <form>
                      <input
                         style={{width: 380,height: 40,backgroundColor:"#E5E8E8",fontSize:12}}
                         placeholder='Enter Your team members name'
                         className="form-control"
                         type="text" 
                         maxlength="12"
                        />                   
                </form>
                <br/>
                <strong style={{fontSize:14}}>Position in the company<code style={{color:"red"}}>*</code></strong><br/>
                <form>
                   <input
                      style={{width: 380,height: 40,fontSize:12,backgroundColor:"#E5E8E8"}}
                      placeholder='Position Name'
                      className="form-control"
                      type="text"
                      maxlength="12" 
                    />
                </form>
                <br/>
                <div className='row'>
                  <strong style={{fontSize:14}}>Social Media Handles</strong><br/>
                   <div className='col-md-1'><a href=''>
                     <Image   src={require('./../../assets/images/face.png')}alt="Features tile icon 01"  width={40} height={40}  /></a></div>&nbsp;
                   <div className='col-md-1'>
                      <form >
                        <input
                          style={{width: 279,height: 40,fontSize:12,backgroundColor:"#E5E8E8"}}
                          placeholder='Facebook Link'
                          className="form-control"
                          type="text"
                          maxlength="150" 
                         />
                       </form>
                    </div> 
                    
                
                    
                 </div>
                 &nbsp;
                
                 <div className='row'>
                  
                   <div className='col-md-1'><a href=''>
                     <Image src={require('./../../assets/images/insta.jpg')}alt="Features tile icon 01"  width={40} height={40}  /></a></div>&nbsp;
                   <div className='col-md-1'>
                      <form >
                        <input
                          style={{width: 279,height: 40,fontSize:12,backgroundColor:"#E5E8E8"}}
                          placeholder='Instagram Link'
                          className="form-control"
                          type="text" 
                          maxlength="150" 
                         />
                       </form>
                    </div> 
                    
                
                    
                 </div>
                &nbsp;
                <div className='row'>
                  
                   <div className='col-md-1'><a href=''>
                     <Image src={require('./../../assets/images/lin.png')}alt="Features tile icon 01"  width={48} height={48}  /></a></div>&nbsp;
                   <div className='col-md-1'>
                      <form >
                        <input
                          style={{width: 279,height: 40,fontSize:12,backgroundColor:"#E5E8E8"}}
                          placeholder='Linked In Link'
                          className="form-control"
                          type="text" 
                          maxlength="150" 
                         />
                       </form>
                    </div> 
                    
                
                    
                 </div>
                <strong style={{fontSize:14}}>Bio</strong><br/>
                <form>
                   <input
                      style={{width: 380,height: 200,fontSize:12,backgroundColor:"#E5E8E8"}}
                      placeholder='Type something about your team member....'
                      className="form-control"
                      type="text" 
                      maxlength="100"
                    />
                </form>


                
                
                <br/>
                <div className='row'>
                    <div className='col-md-2'>
                    <strong style={{fontSize:14}}>Profile Picture<code style={{color:"red"}}>*</code></strong><br/>
                         
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    <div className='col-md-2'>
                     
                          <div className="row">

                                <Button  className='text-center' style={{backgroundColor:"White",color:"grey",fontSize:12}}>
                                 Upload a Picture
                                </Button>
                            </div>  
                       
                    </div>
                </div>



                <h3>02</h3><hr/>
              
              <br/>
              <h6 style={{fontSize:14}}>Name</h6>
                 
               <form>
                      <input
                         style={{width: 380,height: 40,backgroundColor:"#E5E8E8",fontSize:12}}
                         placeholder='Enter Your team members name'
                         className="form-control"
                         type="text" 
                         maxlength="12"
                        />                   
                </form>
                <br/>
                <strong style={{fontSize:14}}>Position in the company<code style={{color:"red"}}>*</code></strong><br/>
                <form>
                   <input
                      style={{width: 380,height: 40,fontSize:12,backgroundColor:"#E5E8E8"}}
                      placeholder='Position Name'
                      className="form-control"
                      type="text"
                      maxlength="12" 
                    />
                </form>
                <br/>
                <div className='row'>
                  <strong style={{fontSize:14}}>Social Media Handles</strong><br/>
                   <div className='col-md-1'><a href=''>
                     <Image   src={require('./../../assets/images/face.png')}alt="Features tile icon 01"  width={40} height={40}  /></a></div>&nbsp;
                   <div className='col-md-1'>
                      <form >
                        <input
                          style={{width: 279,height: 40,fontSize:12,backgroundColor:"#E5E8E8"}}
                          placeholder='Facebook Link'
                          className="form-control"
                          type="text"
                          maxlength="150" 
                         />
                       </form>
                    </div> 
                    
                
                    
                 </div>
                 &nbsp;
                
                 <div className='row'>
                  
                   <div className='col-md-1'><a href=''>
                     <Image src={require('./../../assets/images/insta.jpg')}alt="Features tile icon 01"  width={40} height={40}  /></a></div>&nbsp;
                   <div className='col-md-1'>
                      <form >
                        <input
                          style={{width: 279,height: 40,fontSize:12,backgroundColor:"#E5E8E8"}}
                          placeholder='Instagram Link'
                          className="form-control"
                          type="text" 
                          maxlength="150" 
                         />
                       </form>
                    </div> 
                    
                
                    
                 </div>
                &nbsp;
                <div className='row'>
                  
                   <div className='col-md-1'><a href=''>
                     <Image src={require('./../../assets/images/lin.png')}alt="Features tile icon 01"  width={48} height={48}  /></a></div>&nbsp;
                   <div className='col-md-1'>
                      <form >
                        <input
                          style={{width: 279,height: 40,fontSize:12,backgroundColor:"#E5E8E8"}}
                          placeholder='Linked In Link'
                          className="form-control"
                          type="text" 
                          maxlength="150" 
                         />
                       </form>
                    </div> 
                    
                
                    
                 </div>
                <strong style={{fontSize:14}}>Bio</strong><br/>
                <form>
                   <input
                      style={{width: 380,height: 200,fontSize:12,backgroundColor:"#E5E8E8"}}
                      placeholder='Type something about your team member....'
                      className="form-control"
                      type="text" 
                      maxlength="100"
                    />
                </form>
                <br/>
                <div className='row'>
                    <div className='col-md-2'>
                    <strong style={{fontSize:14}}>Profile Picture <code style={{color:"red"}}>*</code></strong><br/>
                         
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    <div className='col-md-2'>
                      <Card style={{backgroundColor:"#F2F3F4",width:175,height:150}}>
                          <div className="row">
                               <Image   src={require('./../../assets/images/infocard.jpg')}alt="Features tile icon 01"   />
                                <Button  className='text-center' style={{backgroundColor:"white",color:"grey",fontSize:12}}>
                                 ReUpload
                                </Button>
                            </div>  
                        </Card>
                    </div>
                </div><br/>
                <ButtonGroup>
                <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",borderColor:'#E5E8E8',width:182}} wideMobile href="">
                    Add Members
                    </Button>
                  <Button tag="a"  style={{backgroundColor:"#2ECC71",borderRadius:8,color:"white",width:182}} wideMobile href="/Campaign">
                    Submit
                    </Button>
                </ButtonGroup>

              </div>
              </div>
              </div>
              </div>
              </div>
              

              


              
               
               

) ;       
};



export default Campaign_Investors;