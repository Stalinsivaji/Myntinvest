import React from "react";
import classNames from 'classnames';
import Button from '../elements/Button';
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import '../Css/styles.css';





const Upload_Pitch = ({
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
                <strong style={{fontSize:35}}>Pitch</strong>
             
               </div>
            
               <br/>
               <strong style={{fontSize:18}}>Upload Pitch Deck</strong>
               <br/>
               <br/>
               <p style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Aenean quam nunc egestas nunc at nibh. Odio erat turpis sit at<br/> bibendum nunc adipiscing sed Tincidunt enim, amet vitae nibh cursus imperdiet erat.</p>



               <br/>
              <strong style={{fontSize:10}}>Max Value:50MB</strong><br/>
                 
              <form>
                  
                      <input
                         style={{width: 380,height: 300,backgroundColor:"#E5E8E8",fontSize:12}}
                         placeholder='Drag & Drop or Click to Browse'
                         className="form-control text-center"
                         type="text" 
                         
                        />
                    
                </form>



                <br/>
                <Button tag="a"  style={{backgroundColor:"#2ECC71",borderRadius:8,color:"white"}} wideMobile href="/Startup_Dashboard">
                    Submit
                    </Button>
              






              </div>
              </div>
              </div>
              </div>


    </body>          
              

              


              
               
               

) ;       
};



export default Upload_Pitch;