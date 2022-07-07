import React from "react";
import classNames from 'classnames';
import Image from "../elements/Image";
import Button from '../elements/Button';
import ButtonGroup from "../elements/ButtonGroup";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import '../Css/styles.css';





const Company_Info = ({
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
              <strong style={{fontSize:35}}>Company Info</strong>
              &nbsp;
              &nbsp;
              <p style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam nunc at nibh. Odio erat turpis sit at bibendum nunc adipiscing sed.<br/>Tincidunt enim, amet vitae nibh cursus imperdiet erat</p>
              
              <br/>
              <br/>
              <strong>Application</strong><br/>
              
              <br/>
              <strong style={{fontSize:14}}>Country</strong><br/>
                 
              <form>
                  
                      <input
                         style={{width: 380,height: 40,backgroundColor:"#E5E8E8",fontSize:12}}
                         placeholder='Enter Your Country here'
                         className="form-control"
                         type="text" 
                         maxlength="12"
                        />
                    
                </form>
                  

                <br/>
                <strong style={{fontSize:14}}>State</strong><br/>
                <form>
                   <input
                      style={{width: 380,height: 40,fontSize:12,backgroundColor:"#E5E8E8"}}
                      placeholder='Enter Your State here'
                      className="form-control"
                      type="text"
                      maxlength="12" 
                    />
                </form>
              

                <br/>
                <strong style={{fontSize:14}}>City</strong><br/>
                <form>
                   <input
                      style={{width: 380,height: 40,fontSize:12,backgroundColor:"#E5E8E8"}}
                      placeholder='Enter Your City here'
                      className="form-control"
                      type="text" 
                      maxlength="12"
                    />
                </form>


                <br/>
                <strong style={{fontSize:14}}>Pin Code</strong><br/>
                <form>
                   <input
                      style={{width: 380,height: 40,backgroundColor:"#E5E8E8",fontSize:12}}
                      placeholder='Enter PIN Code'
                      className="form-control"
                      type="text" 
                      maxlength="6"
                    />
                </form>

                <br/>
                <strong style={{fontSize:14}}>Address</strong><br/>
                <form>
                   <input
                      style={{width: 380,height: 40,backgroundColor:"#E5E8E8",fontSize:12}}
                      placeholder='Enter Your Company Address here'
                      className="form-control"
                      type="text" 
                      maxlength="150"
                    />
                </form>
                 
                 <br/>
                 <br/>
                 <strong>Online presence</strong>

                 <br/>
                 <br/>
                 <strong style={{fontSize:14}}>Company Website</strong><br/>
                <form>
                   <input
                      style={{width: 380,height: 40,backgroundColor:"#E5E8E8",fontSize:12}}
                      placeholder='Enter Your Company Website here'
                      className="form-control"
                      type="text" 
                      maxlength="150"
                    />
                </form>

                <br/>
                <div className='row'>
                  <strong style={{fontSize:14}}>Social Media Handles</strong><br/>
                   <div className='col-md-1'><a href=''>
                     <Image   src={require('./../../assets/images/face.png')}alt="Features tile icon 01"  width={50} height={50}  /></a></div>
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
                     <Image src={require('./../../assets/images/insta.jpg')}alt="Features tile icon 01"  width={50} height={50}  /></a></div>
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
                     <Image src={require('./../../assets/images/lin.png')}alt="Features tile icon 01"  width={58} height={58}  /></a></div>
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

              <br/>
              <br/>
              <strong>Legal</strong><br/>
              
              <br/>
              <strong style={{fontSize:14}}>Legal Name</strong><br/>
                 
              <form>
                  
                      <input
                         style={{width: 380,height: 40,backgroundColor:"#E5E8E8",fontSize:12}}
                         placeholder='Enter Your Legal name'
                         className="form-control"
                         type="text" 
                         maxlength="150" 
                        />
                    
                </form>

              <br/>
              <strong style={{fontSize:14}}>CIN Number</strong><br/>
                 
              <form>
                  
                      <input
                         style={{width: 380,height: 40,backgroundColor:"#E5E8E8",fontSize:12}}
                         placeholder='Enter CIN number'
                         className="form-control"
                         type="text" 
                         maxlength="21" 
                        />
                    
                </form>

                <br/>
                <strong style={{fontSize:14}}>Date of Incorporation</strong><br/>
                 <div class="input-group mb-3" style={{width:380,height: 40}}>
                    <input type="text" class="form-control" style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:12}} maxlength="2"  placeholder="DD"/>
                    <input type="text" class="form-control" style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:12}} maxlength="2" placeholder="MM"/>
                    <input type="text" class="form-control" style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:12}} maxlength="4"  placeholder="YYYY"/>
                  </div>


              <br/>
              <strong style={{fontSize:14}}>Incorporation Type</strong><br/>
                 
              <form>
                  
                      <input
                         style={{width: 380,height: 40,backgroundColor:"#E5E8E8",fontSize:12}}
                         placeholder='Private,Public etc.'
                         className="form-control"
                         type="text" 
                         maxlength="150" 
                        />
                    
                </form>


              <br/>
              <br/>
              <strong>About Company</strong><br/>
              
              <br/>
              <strong style={{fontSize:14}}>Sector</strong><br/>
                 
              <form>
                  
                      <input
                         style={{width: 380,height: 40,backgroundColor:"#E5E8E8",fontSize:12}}
                         placeholder='Select from the list or type'
                         className="form-control"
                         type="text" 
                         maxlength="150" 
                        />
                    
                </form>

              <br/>
              <strong style={{fontSize:14}}>Amount Invested in the business till date</strong><br/>
                 
              <form>
                  
                      <input
                         style={{width: 380,height: 40,backgroundColor:"#E5E8E8",fontSize:12}}
                         placeholder='7,50,0000'
                         className="form-control"
                         type="text" 
                         maxlength="150" 
                        />
                    
                </form>


              <br/>
              <strong style={{fontSize:14}}>No. of Employees </strong><br/>
                 
              <form> 
                  
                      <input
                         style={{width: 380,height: 40,backgroundColor:"#E5E8E8",fontSize:12}}
                         placeholder='12'
                         className="form-control"
                         type="text" 
                         maxlength="10" 
                        />
                    
                </form>

                <br/>
                <ButtonGroup>
                <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",borderColor:'#E5E8E8',width:180}} wideMobile href="">
                    Save
                    </Button>
                  <Button tag="a"  style={{backgroundColor:"#2ECC71",borderRadius:8,color:"white",width:180}} wideMobile href="">
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



export default Company_Info;