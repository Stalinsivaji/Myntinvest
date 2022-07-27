import React from 'react';
import '../Css/styles.css';
import {NavLink,Link} from "react-router-dom";
import Image from '../elements/Image';
import Button from '../elements/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from '../elements/ButtonGroup';
import classNames from 'classnames';


  




class Raise extends React.Component {
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
        input["name"] = "";
        input["email"] = "";
        input["linkedinurl"] = "";
        input["companyname"] = "";
        input["linkedinpage"] = "";
        input["website"] = "";
        input["fundraising"] = "";
        input["product"] = "";
        input["traction"] = "";
        input["revenue"] = "";
        input["team"] = "";
        input["community"] = "";
        input["rightfit"] = "";
        input["commitments"] = "";
        input["privateround"] = "";
        input["pitch"] = "";
        this.setState({input:input});
  
        alert('Registration Form is submitted');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      if (!input["name"]) {
        isValid = false;
        errors["name"] = "Please enter your name.";
      }
  
      if (typeof input["name"] !== "undefined") {
        const re = /^\S*$/;
        if(input["name"].length < 6 || !re.test(input["name"])){
            isValid = false;
            errors["name"] = "Please enter valid name.";
        }
      }

      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your Conpany email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid Company email address.";
        }
      }

      if (!input["linkedinurl"]) {
        isValid = false;
        errors["linkedinurl"] = "Please enter your Founder's LinkedIn URL.";
      }
  
      if (typeof input["linkedinurl"] !== "undefined") {
        const re = /^\S*$/;
        if(input["linkedinurl"].length < 2 || !re.test(input["linkedinurl"])){
            isValid = false;
            errors["linkedinurl"] = "Please enter valid Founder's LinkedIn URL.";
        }
      }

      if (!input["companyname"]) {
        isValid = false;
        errors["companyname"] = "Please enter your Registered Company Name.";
      }
  
      if (typeof input["companyname"] !== "undefined") {
        const re = /^\S*$/;
        if(input["companyname"].length < 2 || !re.test(input["companyname"])){
            isValid = false;
            errors["companyname"] = "Please enter valid Registered Company Name.";
        }
      }

      if (!input["linkedinpage"]) {
        isValid = false;
        errors["linkedinpage"] = "Please enter your Company's LinkedIn Page.";
      }
  
      if (typeof input["linkedinpage"] !== "undefined") {
        const re = /^\S*$/;
        if(input["linkedinpage"].length < 2 || !re.test(input["linkedinurl"])){
            isValid = false;
            errors["linkedinpage"] = "Please enter valid Company's LinkedIn Page.";
        }
      }

      if (!input["website"]) {
        isValid = false;
        errors["website"] = "Please enter your Company Website.";
      }
  
      if (typeof input["website"] !== "undefined") {
        const re = /^\S*$/;
        if(input["website"].length < 2 || !re.test(input["website"])){
            isValid = false;
            errors["website"] = "Please enter valid Company Website.";
        }
      }

      if (!input["fundraising"]) {
        isValid = false;
        errors["fundraising"] = "Please Describe your previous fundraising rounds.";
      }
  
      if (typeof input["fundraising"] !== "undefined") {
        const re = /^\S*$/;
        if(input["fundraising"].length < 2 || !re.test(input["fundraising"])){
            isValid = false;
            errors["fundraising"] = "Please Describe your previous fundraising rounds.";
        }
      }

      if (!input["product"]) {
        isValid = false;
        errors["product"] = "Please Describe your product.";
      }
  
      if (typeof input["product"] !== "undefined") {
        const re = /^\S*$/;
        if(input["product"].length < 2 || !re.test(input["product"])){
            isValid = false;
            errors["product"] = "Please Describe your product.";
        }
      }

      if (!input["traction"]) {
        isValid = false;
        errors["traction"] = "Please Describe the traction.";
      }
  
      if (typeof input["traction"] !== "undefined") {
        const re = /^\S*$/;
        if(input["traction"].length < 2 || !re.test(input["linkedinurl"])){
            isValid = false;
            errors["traction"] = "Please Describe the traction.";
        }
      }

      if (!input["revenue"]) {
        isValid = false;
        errors["revenue"] = "Please Describe the revenue you are making.";
      }
  
      if (typeof input["revenue"] !== "undefined") {
        const re = /^\S*$/;
        if(input["revenue"].length < 2 || !re.test(input["revenue"])){
            isValid = false;
            errors["revenue"] = "Please Describe the revenue you are making.";
        }
      }

      if (!input["team"]) {
        isValid = false;
        errors["team"] = "Please enter your Current Team Size.";
      }
  
      if (typeof input["team"] !== "undefined") {
        const re = /^\S*$/;
        if(input["team"].length < 2 || !re.test(input["team"])){
            isValid = false;
            errors["team"] = "Please enter Current Team Size.";
        }
      }

      if (!input["community"]) {
        isValid = false;
        errors["community"] = "Please enter Why do you want to raise a Community round?";
      }
  
      if (typeof input["community"] !== "undefined") {
        const re = /^\S*$/;
        if(input["community"].length < 2 || !re.test(input["community"])){
            isValid = false;
            errors["community"] = "Please enter Why do you want to raise a Community round?";
        }
      }

      if (!input["rightfit"]) {
        isValid = false;
        errors["rightfit"] = "Please enter What makes you think Myntinvest is the right fit for you?";
      }
  
      if (typeof input["rightfit"] !== "undefined") {
        const re = /^\S*$/;
        if(input["rightfit"].length < 2 || !re.test(input["rightfit"])){
            isValid = false;
            errors["rightfit"] = "Please enter What makes you think Myntinvest is the right fit for you?";
        }
      }

      
      if (!input["commitments"]) {
        isValid = false;
        errors["commitments"] = "Please enter Do you have any existing commitments?";
      }
  
      if (typeof input["commitments"] !== "undefined") {
        const re = /^\S*$/;
        if(input["commitments"].length < 2 || !re.test(input["commitments"])){
            isValid = false;
            errors["commitments"] = "Please enter Do you have any existing commitments?.";
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
        

                           <div className='container'>
                             
                               <div className='row' style={{height:'auto'}}>
                                    <div className='col-md-12'>
                                        <h3>Raise with Tyke</h3>
                                        <p style={{fontSize:13}}>Tell us a little about your company. This will help us understand your business better.</p>
                                    
                                        
                                        
                                        <div className='row'>
                                        <form onSubmit={this.handleSubmit}>
                                        <div className="col-md-12">
                                            <h5 style={{fontSize:20}}>Application</h5><hr/><br/>

                                            <h6>Your Name<code style={{color:"red"}}>*</code></h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input 
                                             
                                                 name="name" 
                                                 value={this.state.input.name}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="20"  
                                                 placeholder="Enter Your Name"
                                                 id="name" />

                                            
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.name}</div>

                                            <h6>Company Email<code style={{color:"red"}}>*</code></h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input 
                                                name="email" 
                                                value={this.state.input.email}
                                                onChange={this.handleChange}                                            
                                                type="text" 
                                                class="form-control" 
                                                style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                maxlength="50"  
                                                placeholder="Enter Your Company email address"
                                                id="email"/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.email}</div>

                                            <h6>Founder's LinkedIn URL<code style={{color:"red"}}>*</code></h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input 
                                                 name="linkedinurl"
                                                 value={this.state.input.linkedinurl}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="150"  
                                                 placeholder="Enter Founder's LinkedIn URL 1"
                                                 id='linkedinurl'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.linkedinurl}</div>

                                            <h6>Founder's LinkedIn URL</h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input 
                                                  name='linkedinurl'
                                                  type="text" 
                                                  class="form-control" 
                                                  style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                  maxlength="150"  
                                                  placeholder="Enter Founder's LinkedIn URL 2"
                                                  id='linkedinurl'/>
                                            </div>

                                            <h6>Registered Company Name<code style={{color:"red"}}>*</code></h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input 
                                                 name='companyname'
                                                 value={this.state.input.companyname}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="50"  
                                                 placeholder="Enter Your Registered Company Name"
                                                 id='companyname'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.companyname}</div>
                                        

                                            <h6>Company's LinkedIn Page<code style={{color:"red"}}>*</code></h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input
                                                 name='linkedinpage' 
                                                 value={this.state.input.linkedinpage}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="150"  
                                                 placeholder="Enter Your Company LinkedIn Page" 
                                                 id='linkedinpage'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.linkedinpage}</div>      
                                         
                                            <h6>Website<code style={{color:"red"}}>*</code></h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input
                                                 name='website' 
                                                 value={this.state.input.website}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="150"  
                                                 placeholder="Enter Your Company Website" 
                                                 id='website'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.website}</div>      
                                         
                                            <h6>Describe your previous fundraising rounds<code style={{color:"red"}}>*</code></h6>
                                            <div class="input-group mb-3" style={{width:300,height:150}}>
                                            <input
                                                 name='fundraising' 
                                                 value={this.state.input.fundraising}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="500"  
                                                 id='fundraising'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.fundraising}</div>      
                                                     
                                            <h6>Describe your product<code style={{color:"red"}}>*</code></h6>
                                            <div class="input-group mb-3" style={{width:300,height:150}}>
                                            <input
                                                 name='product' 
                                                 value={this.state.input.product}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="500"  
                                                 id='product'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.product}</div>      
                                         

                                            <h6>Describe the traction<code style={{color:"red"}}>*</code></h6>
                                            <div class="input-group mb-3" style={{width:300,height:150}}>
                                            <input
                                                 name='traction' 
                                                 value={this.state.input.traction}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="500"  
                                                 id='traction'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.traction}</div>
                                        
                                            <h6>Describe the revenue you are making<code style={{color:"red"}}>*</code></h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input 
                                             
                                                 name="revenue" 
                                                 value={this.state.input.revenue}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="150"  
                                                 placeholder="Enter Your Current Revenue"
                                                 id="revenue" />

                                            
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.revenue}</div>


                                            <h6>How big is the team?<code style={{color:"red"}}>*</code></h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input 
                                             
                                                 name="team" 
                                                 value={this.state.input.team}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="50"  
                                                 placeholder="Enter Your Current Team Size"
                                                 id="team" />

                                            
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.team}</div>


                                            <h6>Why do you want to raise a Community round?<code style={{color:"red"}}>*</code></h6>
                                            <div class="input-group mb-3" style={{width:300,height:150}}>
                                            <input
                                                 name='community' 
                                                 value={this.state.input.community}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="500"  
                                                 id='community'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.community}</div>      
                                                     
                                            <h6>What makes you think Myntinvest is the right fit for you?<code style={{color:"red"}}>*</code></h6>
                                            <div class="input-group mb-3" style={{width:300,height:150}}>
                                            <input
                                                 name='rightfit' 
                                                 value={this.state.input.rightfit}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="250"  
                                                 id='rightfit'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.rightfit}</div>      
                                         

                                            <h6>Do you have any existing commitments?<code style={{color:"red"}}>*</code></h6>
                                            <div class="input-group mb-3" style={{width:300,height:150}}>
                                            <input
                                                 name='commitments' 
                                                 value={this.state.input.commitments}
                                                 onChange={this.handleChange}
                                                 type="text" 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="250"  
                                                 id='commitments'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.commitments}</div>
                                     
                                         <h6>Would you be interested in raising a Private Round?<code style={{color:"red"}}>*</code></h6>
                                        <ButtonGroup>
                                        <Button tag="a"  color="primary" style={{borderColor:"black",borderRadius:8,color:"black",backgroundColor:"#f9faf9",width:180}} wideMobile="" >
                                           Yes
                                         </Button>

                                         <Button tag="a"  color="primary" style={{borderColor:"black",borderRadius:8,color:"black",backgroundColor:"#f9faf9",width:180}} wideMobile="" >
                                           No
                                         </Button>
                                         </ButtonGroup>

                                        <h6>Upload your Pitch*</h6>
                                         <p style={{color:"grey",fontSize:12}}>Max Value:50MB</p>
                                            <div className='FilesDragAndDrop__area' style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:12}}>
                                            Drag & Drop or Click to Browser
                                          <span
                                              role='img'
                                              aria-label='emoji'
                                              className='area__icon'
                                            >
                                             &#128526;
                                            </span>
                                           </div>
                                         </div>&nbsp;

                                         
                                        
                                    <div className='col-md-6' align="right">
                                        <ButtonGroup>
                                        <Button type="submit" value="Submit"   color="primary" style={{borderRadius:8,color:"white",width:180}} wideMobile="" >
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





export default Raise;