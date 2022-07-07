import React, {useState} from 'react';
import '../Css/styles.css';
import {NavLink,Link} from "react-router-dom";
import Image from '../elements/Image';
import 'react-phone-number-input/style.css';
import Button from '../elements/Button';



  


const Investors_Verification= () => {
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <>
        <body className='bg-white' >
            <div className='container'>
                       
                <div className='row' style={{height:800,marginTop:100}}>
                    <div className='row'>
                      <div className="hero-content">
                         <nav className="navbar navbar-expand-sm bg-Secondary navbar-white " >
                            <div className="container-fluid" style={{marginTop:-40}}>
                                  <ul className="navbar-nav" style={{fontSize:13}}>
                                  
                                      <li className="nav-item">
                                          <NavLink to= "/Investors_Dashboard" className="nav-link" style={{color:"#B1B0AD"}}>Back to Dashboard</NavLink>
                                        </li>
                                  
                                    </ul>
                              </div>
                            </nav>

                           <div className='container'>
                              <div className='row' style={{height:700}}>
                                    <div className='col-md-12'>
                                        <h3>Complete Your Profile</h3>
                                        <p style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt libero vel elementum at cum tupis eget. Viverra ultrices lacus, lectus volutpat sociis vitae mauris<br/>porta faugiat. Nec, vitae facilisi elementum eu est vel quis platea. Diam pharetra nec malesuada mi purus erat.</p>
                                       <div className='row'> 
                                        <div className='col-md-2' align="left">
                                        <a href=''><Image   src={require('./../../assets/images/kyc1.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{padding:10,fontSize:15}}>KYC</p></a>
                                        </div>
                                        
                                        <div className='col-md-2 ' align="left">
                                        <a href='' ><Image   src={require('./../../assets/images/payment.png')}alt="Features tile icon 01"  width={50} height={50}  /><p style={{padding:10,marginLeft:-30,fontSize:15}}>Payment Details</p></a>
                                        </div>
                                        </div>
                                        
                                        
                                        <div className='row'>
                                        <div className="col-md-12">
                                            <h5 style={{fontSize:20}}>Verify Mobile Number</h5>

                                          <p style={{fontSize:17}}>OTP Entered {otp.join("")}</p>
                                            {otp.map((data, index) => {
                                              return (
                                                 <input
                                                     style={{width: 100,height: 40,color:"grey"}}
                                                     type="text"
                                                     name="otp"
                                                     maxLength="1"
                                                     key={index}
                                                     value={data}
                                                     onChange={e => handleChange(e.target, index)}
                                                     onFocus={e => e.target.select()}
                                                    />
                                                );
                                            })}

                                          
                                         
                                            
                                            </div>
                                    <div className='col-md-7' align="center" style={{marginTop:20}}>
                                        <Button tag="a" color="primary" style={{borderRadius:8,color:"white"}} wideMobile href="/Pancard_Details">
                                           Verify & Continue
                                         </Button>
                                         
                                        </div>
                                        </div>

                



                                        
                                        
                                        

                                        

                                        
                                        



                                        
                                     
                                     </div>
                                 </div>

                             </div>
                             
                        </div>

                     </div>

                </div>     


                        

                        
                
            
            
            
            
            
            
            
            
            
            
            
            </div> 

                    
                    

        </body>


            
            
        </>
    );
};





export default Investors_Verification;