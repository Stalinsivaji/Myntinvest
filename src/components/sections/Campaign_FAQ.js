import React from "react";
import classNames from 'classnames';
import Image from "../elements/Image";
import Button from '../elements/Button';
import ButtonGroup from "../elements/ButtonGroup";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import '../Css/styles.css';





const Campaign_FAQ = ({
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
              <strong style={{fontSize:35}}>FAQs (Frequently Asked Questions)</strong>
              &nbsp;
              &nbsp;
              <p style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam nunc at nibh. Odio erat turpis sit at bibendum nunc adipiscing sed.<br/>Tincidunt enim, amet vitae nibh cursus imperdiet erat</p>
              
              <br/>
              <br/>

             <div className="row">
              <h3>01</h3><hr/>
              <br/>
              <div className="row">
              <h6 style={{fontSize:14}}>Question</h6>
                 <form>
                      <input
                         style={{width: 380,height: 40,backgroundColor:"#E5E8E8",fontSize:12}}
                         placeholder='Type your question here...'
                         className="form-control"
                         type="text" 
                         maxlength="12"
                        />                   
                 </form>  
                 </div>

                 <div className="row">
                <h6 style={{fontSize:14}}>Bio</h6>
                <form>
                   <input
                      style={{width: 380,height: 200,fontSize:12,backgroundColor:"#E5E8E8"}}
                      placeholder='Type something about your team member....'
                      className="form-control"
                      type="text" 
                      maxlength="100"
                    />
                </form>
                </div>
                </div>&nbsp;
                
                
                


              <div className="row">
              <h3>02</h3><hr/>
              <br/>
              <div className="row">
              <h6 style={{fontSize:14}}>Question</h6>
                 <form>
                      <input
                         style={{width: 380,height: 40,backgroundColor:"#E5E8E8",fontSize:12}}
                         placeholder='Type your question here...'
                         className="form-control"
                         type="text" 
                         maxlength="12"
                        />                   
                 </form>  
                 </div>

                 <div className="row">
                <h6 style={{fontSize:14}}>Bio</h6>
                <form>
                   <input
                      style={{width: 380,height: 200,fontSize:12,backgroundColor:"#E5E8E8"}}
                      placeholder='Type something about your team member....'
                      className="form-control"
                      type="text" 
                      maxlength="100"
                    />
                </form>
                </div>
                </div>&nbsp;

                <div className="row">
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
              </div>
              

              


              
               
               

) ;       
};



export default Campaign_FAQ;