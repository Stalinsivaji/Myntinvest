import React from 'react';
import '../Css/styles.css';
import {NavLink,Link} from "react-router-dom";
import Image from '../elements/Image';
import Button from '../elements/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from '../elements/ButtonGroup';
import classNames from 'classnames';


  




class Company_Info extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["country"] = "";
        input["state"] = "";
        input["city"] = "";
        input["pincode"] = "";
        input["address"] = "";
        input["CompanyWebsite"] = "";
        input["FacebookLink"] = "";
        input["InstagramLink"] = "";
        input["LinkedInLink"] = "";
        input["legalName"] = "";
        input["CinNumber"] = "";
        input["Incorporation"] = "";
        input["Sector"] = "";
        input["AmountInvested"] = "";
        input["Employees"] = "";
        input["Date"] = "";
        
        this.setState({input:input});
  
        alert('Companyinfo Form is submitted');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      if (!input["country"]) {
        isValid = false;
        errors["country"] = "Please enter your country.";
      }
  
      if (typeof input["country"] !== "undefined") {
        const re = /^\S*$/;
        if(input["country"].length < 2 || !re.test(input["country"])){
            isValid = false;
            errors["country"] = "Please enter valid country.";
        }
      }
  
      if (!input["state"]) {
        isValid = false;
        errors["state"] = "Please enter your state.";
      }
  
      if (typeof input["state"] !== "undefined") {
        const re = /^\S*$/;
        if(input["state"].length < 3 || !re.test(input["state"])){
            isValid = false;
            errors["state"] = "Please enter valid state.";
        }
      }
      

      if (!input["city"]) {
        isValid = false;
        errors["city"] = "Please enter your city.";
      }
  
      if (typeof input["city"] !== "undefined") {
        const re = /^\S*$/;
        if(input["city"].length < 3 || !re.test(input["city"])){
            isValid = false;
            errors["city"] = "Please enter valid city.";
        }
      }

      if (!input["pincode"]) {
        isValid = false;
        errors["pincode"] = "Please enter your pincode.";
      }
  
      if (typeof input["pincode"] !== "undefined") {
        const re = /^\S*$/;
        if(input["pincode"].length < 6 || !re.test(input["pincode"])){
            isValid = false;
            errors["pincode"] = "Please enter valid pincode.";
        }
      }

      if (!input["address"]) {
        isValid = false;
        errors["address"] = "Please enter your address.";
      }
  
      if (typeof input["address"] !== "undefined") {
        const re = /^\S*$/;
        if(input["address"].length < 6 || !re.test(input["address"])){
            isValid = false;
            errors["address"] = "Please enter valid address.";
        }
      }

      if (!input["CompanyWebsite"]) {
        isValid = false;
        errors["CompanyWebsite"] = "Please enter your Company website.";
      }
  
      if (typeof input["CompanyWebsite"] !== "undefined") {
        const re = /^\S*$/;
        if(input["CompanyWebsite"].length < 6 || !re.test(input["CompanyWebsite"])){
            isValid = false;
            errors["CompanyWebsite"] = "Please enter your Company Website.";
        }
      }

      if (!input["FacebookLink"]) {
        isValid = false;
        errors["FacebookLink"] = "Please enter your Facebook Link.";
      }
  
      if (typeof input["FacebookLink"] !== "undefined") {
        const re = /^\S*$/;
        if(input["FacebookLink"].length < 6 || !re.test(input["FacebookLink"])){
            isValid = false;
            errors["FacebookLink"] = "Please enter your Facebook Link.";
        }
      }

      if (!input["InstagramLink"]) {
        isValid = false;
        errors["InstagramLink"] = "Please enter your Instagram Link.";
      }
  
      if (typeof input["InstagramLink"] !== "undefined") {
        const re = /^\S*$/;
        if(input["InstagramLink"].length < 6 || !re.test(input["InstagramLink"])){
            isValid = false;
            errors["InstagramLink"] = "Please enter your Instagram Link.";
        }
      }

      if (!input["LinkedInLink"]) {
        isValid = false;
        errors["LinkedInLink"] = "Please enter your Linked In Link.";
      }
  
      if (typeof input["LinkedInLink"] !== "undefined") {
        const re = /^\S*$/;
        if(input["LinkedInLink"].length < 6 || !re.test(input["LinkedInLink"])){
            isValid = false;
            errors["LinkedInLink"] = "Please enter your Linked In Link.";
        }
      }

      if (!input["LegalName"]) {
        isValid = false;
        errors["LegalName"] = "Please enter your Legal Name.";
      }
  
      if (typeof input["LegalName"] !== "undefined") {
        const re = /^\S*$/;
        if(input["LegalName"].length < 6 || !re.test(input["LegalName"])){
            isValid = false;
            errors["LegalName"] = "Please enter your Legal Name.";
        }
      }

      if (!input["CinNumber"]) {
        isValid = false;
        errors["CinNumber"] = "Please enter your CIN Number.";
      }
  
      if (typeof input["CinNumber"] !== "undefined") {
        const re = /^\S*$/;
        if(input["CinNumber"].length < 6 || !re.test(input["CinNumber"])){
            isValid = false;
            errors["CinNumber"] = "Please enter your CIN Number.";
        }
      }

      if (!input["Date"]) {
        isValid = false;
        errors["Date"] = "Please enter Date of Incorporation.";
      }

      if (!input["Incorporation"]) {
        isValid = false;
        errors["Incorporation"] = "Please enter your Incorporation Type.";
      }
  
      if (typeof input["Incorporation"] !== "undefined") {
        const re = /^\S*$/;
        if(input["Incorporation"].length < 6 || !re.test(input["Incorporation"])){
            isValid = false;
            errors["Incorporation"] = "Please enter your Incorporation Type.";
        }
      }

      if (!input["Sector"]) {
        isValid = false;
        errors["Sector"] = "Please enter Sector.";
      }
  
      if (typeof input["Sector"] !== "undefined") {
        const re = /^\S*$/;
        if(input["Sector"].length < 3 || !re.test(input["Sector"])){
            isValid = false;
            errors["Sector"] = "Please enter Sector.";
        }
      }


      if (!input["AmountInvested"]) {
        isValid = false;
        errors["AmountInvested"] = "Enter Amount Invested in Business till date.";
      }
  
      if (typeof input["AmountInvested"] !== "undefined") {
        const re = /^\S*$/;
        if(input["AmountInvested"].length < 2 || !re.test(input["AmountInvested"])){
            isValid = false;
            errors["AmountInvested"] = "Enter Amount Invested in Business till date.";
        }
      }


      if (!input["Employees"]) {
        isValid = false;
        errors["Employees"] = "Enter No. of Employees.";
      }
  
      if (typeof input["Employees"] !== "undefined") {
        const re = /^\S*$/;
        if(input["Employees"].length < 1 || !re.test(input["Employees"])){
            isValid = false;
            errors["Employees"] = "Enter No. of Employees.";
        }
      }




      
      
      
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
        <>
        <body className='' >
            <div className='container'>
                       
                <div className='row' style={{height:'auto',marginTop:100}}>
                    <div className='row'>
                      <div className="hero-content">
                         <nav className="navbar navbar-expand-sm bg-Secondary navbar-white " >
                            <div className="container-fluid" style={{marginTop:-40}}>
                                  <ul className="navbar-nav" style={{fontSize:13}}>
                                  
                                      <li className="nav-item">
                                          <NavLink to="/Startup_Dashboard" className="nav-link" style={{color:"#B1B0AD"}}>Back to Dashboard</NavLink>
                                        </li>
                                  
                                    </ul>
                              </div>
                            </nav>

                           <div className='container'>
                             
                               <div className='row' style={{height:'auto'}}>
                                    <div className='col-md-12'>
                                        <h3>Company Info</h3>
                                        <p style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt libero vel elementum at cum tupis eget. Viverra ultrices lacus, lectus volutpat sociis vitae mauris<br/>porta faugiat. Nec, vitae facilisi elementum eu est vel quis platea. Diam pharetra nec malesuada mi purus erat.</p>
                                    
                                        
                                        
                                        <div className='row'>
                                        <form onSubmit={this.handleSubmit}>
                                        <div className="col-md-12">
                                            <h5 style={{fontSize:20}}>Application</h5><br/>

                                            <h6>Country</h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input 
                                             
                                                 name="country" 
                                                 value={this.state.input.country}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="20"  
                                                 placeholder="Enter Your Country here"
                                                 id="country" />

                                            
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.country}</div>

                                            <h6>State</h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input 
                                                name="state" 
                                                value={this.state.input.state}
                                                onChange={this.handleChange}                                            
                                                type="text" 
                                                class="form-control" 
                                                style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                maxlength="20"  
                                                placeholder="Enter Your State here"
                                                id="state"/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.state}</div>

                                            <h6>City</h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input 
                                                 name="city"
                                                 value={this.state.input.city}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="20"  
                                                 placeholder="Enter Your City here"
                                                 id='city'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.city}</div>

                                            <h6>Pin Code</h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input 
                                                  name='pincode'
                                                  value={this.state.input.pincode}
                                                  onChange={this.handleChange}
                                                  type="text" 
                                                  class="form-control" 
                                                  style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                  maxlength="6"  
                                                  placeholder="Enter Your Pin Code here"
                                                  id='pincode'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.pincode}</div>

                                            <h6>Address</h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input 
                                                 name='address'
                                                 value={this.state.input.address}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="150"  
                                                 placeholder="Enter Your Company Address here"
                                                 id='address'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.address}</div>
                                            <br/>
                                         </div>

                                         <div className="col-md-12">
                                            <h5 style={{fontSize:20}}>Online presence</h5>

                                            <h6>Company Website</h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input
                                                 name='CompanyWebsite' 
                                                 value={this.state.input.CompanyWebsite}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="150"  
                                                 placeholder="Enter Your Company Website here" 
                                                 id='CompanyWebsite'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.CompanyWebsite}</div>

                                            <h6>Social Media Handles</h6>
                                          
                                 
                  
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <a href=''> <Image   src={require('./../../assets/images/face.png')}alt="Features tile icon 01"  width={50} height={50}/></a> &nbsp; 
                                            <input
                                                 name='FacebookLink' 
                                                 value={this.state.input.FacebookLink}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="150"  
                                                 placeholder="Facebook Link"
                                                 id='FacebookLink'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.FacebookLink}</div>
                                        
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <a href=''> <Image   src={require('./../../assets/images/insta.jpg')}alt="Features tile icon 01"  width={50} height={50}/></a> &nbsp; 
                                            <input
                                                 name='InstagramLink' 
                                                 value={this.state.input.InstagramLink}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="150"  
                                                 placeholder="Instagram Link"
                                                 id='InstagramLink'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.InstagramLink}</div>

                                            <div class="input-group mb-3" style={{width:300}}>
                                            <a href=''> <Image   src={require('./../../assets/images/lin.png')}alt="Features tile icon 01"  width={50} height={50}/></a> &nbsp; 
                                            <input
                                                  name='LinkedInLink' 
                                                  value={this.state.input.LinkedInLink}
                                                  onChange={this.handleChange}
                                                  type="text" 
                                                  class="form-control" 
                                                  style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                  maxlength="20"  
                                                  placeholder="Linked In Link"
                                                  id='LinkedInLink'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.LinkedInLink}</div>
                          
                                            <br/>
                                         </div>
                                        
                                        
                                        <div className="col-md-12">
                                            <h5 style={{fontSize:20}}>Legal</h5>

                                            <h6>Legal Name</h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input 
                                                  name='LegalName'
                                                  value={this.state.input.LegalName}
                                                  onChange={this.handleChange}
                                                  type="text" 
                                                  class="form-control" 
                                                  style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                  maxlength="100"  
                                                  placeholder="Enter Your Legal Name" 
                                                  id='LegalName'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.LegalName}</div>

                                            <h6>CIN Number</h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input 
                                                   name='CinNumber'
                                                   value={this.state.input.CinNumber}
                                                   onChange={this.handleChange}
                                                   type="text" 
                                                   class="form-control" 
                                                   style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                   maxlength="20"  
                                                   placeholder="Enter CIN Number"
                                                   id='CinNumber'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.CinNumber}</div>

                                            <h6>Date of Incorporation</h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                         
                                            <input
                                                   className='form-control'
                                                   style={{backgroundColor:"#E5E8E8",color:"grey"}} 
                                                   id="Date"
                                                   type="date"                                   
                                                   name="Date" 
                                                   placeholder="Enter date"
                                                   value={this.state.Date}
                                                   onChange={this.handleChange}
                                                />  
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.Date}</div>

                                            <h6>Incorporation Type</h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input
                                                  name='Incorporation' 
                                                  value={this.state.input.Incorporation}
                                                  onChange={this.handleChange}
                                                  type="text" 
                                                  class="form-control" 
                                                  style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                  maxlength="20"  
                                                  placeholder="Private,Public etc."
                                                  id='Incorporation'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.Incorporation}</div>

                          
                                            <br/>
                                         </div>

                                         <div className="col-md-12">
                                            <h5 style={{fontSize:20}}>About Company</h5>

                                            <h6>Sector</h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input
                                                name='Sector' 
                                                value={this.state.input.Sector}
                                                onChange={this.handleChange}
                                                type="text" 
                                                class="form-control" 
                                                style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                maxlength="20"  
                                                placeholder="Select from the list or type" 
                                                id='Sector'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.Sector}</div>

                                            <h6>Amount Invested in Business till date</h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input
                                                  name='AmountInvested' 
                                                  value={this.state.input.AmountInvested}
                                                  onChange={this.handleChange}
                                                  type="text" 
                                                  class="form-control" 
                                                  style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                  maxlength="20"  
                                                  placeholder="7,50,0000"
                                                  id='AmountInvested'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.AmountInvested}</div>

                                            <h6>No. of Employees </h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input    
                                                      name='Employees'
                                                      value={this.state.input.Employees}
                                                      onChange={this.handleChange}
                                                      type="text" 
                                                      class="form-control" 
                                                      style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                      maxlength="20"  
                                                      placeholder="12"
                                                      id='Employees'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.Employees}</div>

                          
                                            <br/>
                                         </div>
                                    <div className='col-md-6' align="center">
                                        <ButtonGroup>
                                     <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",borderColor:'#E5E8E8',width:180}} wideMobile href="/Investors_Dashboard">
                                        Save
                                        </Button>
                                        <Button type="submit" value="Submit"   color="primary" style={{borderRadius:8,color:"white",width:180}} wideMobile >
                                           Submit
                                         </Button></ButtonGroup>
                                        
                                        </div>
                                        </form>
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
    }
}





export default Company_Info;