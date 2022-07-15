import React from "react";
import classNames from 'classnames';
import Button from '../elements/Button';
import '../Css/styles.css';
import {
    Card   
  } from "@material-ui/core";


const Campaign = ({
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
  
               <div className={tilesClasses}>
               <div className="col-md-1"></div>
               <div className="col-md-11">
               <div className="m-5 p-4">
               <div className={tilesClasses} >
                <div className="col-md-12" style={{paddingLeft:50}} >
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb arr-right">
                      <li class="breadcrumb-item text-sm" aria-current="page" style={{color:"Grey"}}>Startup</li>
                      <li class="breadcrumb-item text-sm text-dark active"><a class="opacity-5 text-dark" href="/Startup_Dashboard">Dashboard</a></li>
                      <li class="breadcrumb-item text-sm active" aria-current="page" style={{color:'#23b347'}}>Campaign</li>
                      <li class="breadcrumb-item text-sm text-dark active"><a class="opacity-5 text-dark" href="/Analystics">Analystics</a></li>
                    </ol>
                  </nav>
                </div>
                 
                <div className="row">
                <Card style={{backgroundColor:"#FDF2E9",width:450,height:200,borderRadius:15}}>
                <div className="row"><div className="col-md-6" align="" style={{marginTop:18}}> <strong>Bannner Video/Photo</strong>
                <p style={{fontSize:11,color:"grey"}} align='center'>Upload or embed a video</p></div>          
                <div className="col-md-4" align="center">
                <Button tag="a" color="secondary" style={{backgroundColor:"#2ECC71",borderRadius:10,marginTop:10}}  className='text-white' wideMobile href="/Campaign_Banner">
                COMPLETED
                </Button>
                </div> 
                </div>
                </Card>&nbsp;&nbsp;&nbsp;&nbsp;


                <Card style={{backgroundColor:"whitesmoke",width:450,height:200,borderRadius:15}}>
                <div className="row"><div className="col-md-6" align="" style={{marginTop:18}}> <strong>Investors</strong>
                <p style={{fontSize:12,color:"grey"}}>Tell us who are the Top investor are</p></div>          
                <div className="col-md-4" align="center">
                <Button tag="a" color="secondary" style={{backgroundColor:"#2ECC71",borderRadius:10,marginTop:15}}  className='text-white' wideMobile href="/Campaign_Investors">
                COMPLETED
                </Button>
                </div> 
                </div>
                </Card>
                 </div>


                 <div className="row" style={{marginTop:50}}>
                <Card style={{backgroundColor:"whitesmoke",width:450,height:200,borderRadius:15}}>
                <div className="row"><div className="col-md-6" align="" style={{marginTop:18}}> <strong>FAQs</strong>
                <p style={{fontSize:12,color:"grey"}}>Help investors understand your weven better</p></div>          
                <div className="col-md-4" align="center">
                <Button tag="a" color="secondary" style={{backgroundColor:"#2ECC71",borderRadius:10,marginTop:15}}  className='text-white' wideMobile href="/Campaign_FAQ">
                PENDING
                </Button>
                </div> 
                </div>
                </Card>&nbsp;&nbsp;&nbsp;&nbsp;


                <Card style={{backgroundColor:"whitesmoke",width:450,height:200,borderRadius:15}}>
                <div className="row"><div className="col-md-6" align="" style={{marginTop:18}}> <strong>Press</strong>
                <p style={{fontSize:12,color:"grey"}}>Show your reach!</p></div>          
                <div className="col-md-6" align="center">
                <Button tag="a" color="secondary" style={{backgroundColor:"violet",borderRadius:10,marginTop:15}}  className='text-white' wideMobile href="/Campaign_Press">
                OPTIONAL
                </Button>
                </div> 
                </div>
                </Card>
                 </div>


                </div>
                </div>
                </div>
                </div>
                
           
           </div>
        

) ;       
};



export default Campaign;

