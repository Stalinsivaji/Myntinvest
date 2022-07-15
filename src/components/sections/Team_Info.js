import React, {useState} from 'react';
import '../Css/styles.css';
import {NavLink,Link} from "react-router-dom";
import Image from '../elements/Image';
import Button from '../elements/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from '../elements/ButtonGroup';


  


class Team_Info extends React.Component {
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
        input["teammember"] = "";
        input["position"] = "";
        input["FacebookLink"] = "";
        input["InstagramLink"] = "";
        input["LinkedInLink"] = "";
        input["bio"] = "";
        
        
        this.setState({input:input});
  
        alert('TeamInfo Form is submitted');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      if (!input["teammember"]) {
        isValid = false;
        errors["teammember"] = "Please enter your Team Member Name.";
      }
  
      if (typeof input["teammember"] !== "undefined") {
        const re = /^\S*$/;
        if(input["teammember"].length < 2 || !re.test(input["teammember"])){
            isValid = false;
            errors["teammember"] = "Please enter your Team Member Name.";
        }
      }
  
      if (!input["position"]) {
        isValid = false;
        errors["position"] = "Please enter Position Name.";
      }
  
      if (typeof input["position"] !== "undefined") {
        const re = /^\S*$/;
        if(input["position"].length < 3 || !re.test(input["position"])){
            isValid = false;
            errors["position"] = "Please enter Position Name.";
        }
      }


      if (!input["FacebookLink"]) {
        isValid = false;
        errors["FacebookLink"] = "Please enter your Facebook Link.";
      }
  
      if (typeof input["FacebookLink"] !== "undefined") {
        const re = /^\S*$/;
        if(input["FacebookLink"].length < 5 || !re.test(input["FacebookLink"])){
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
        if(input["InstagramLink"].length < 5 || !re.test(input["InstagramLink"])){
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
        if(input["LinkedInLink"].length < 5 || !re.test(input["LinkedInLink"])){
            isValid = false;
            errors["LinkedInLink"] = "Please enter your Linked In Link.";
        }
      }



      if (!input["bio"]) {
        isValid = false;
        errors["bio"] = "Please Enter Your Company Website.";
      }
  
      if (typeof input["bio"] !== "undefined") {
        const re = /^\S*$/;
        if(input["bio"].length < 6 || !re.test(input["bio"])){
            isValid = false;
            errors["bio"] = "Please Enter Your Company Website.";
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
                                        <h3>Team Info</h3>
                                        <p style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt libero vel elementum at cum tupis eget. Viverra ultrices lacus, lectus volutpat sociis vitae mauris<br/>porta faugiat. Nec, vitae facilisi elementum eu est vel quis platea. Diam pharetra nec malesuada mi purus erat.</p>
                                    
                                        
                                        
                                     <div className='row'>
                                     <form onSubmit={this.handleSubmit}>
                                        <div className="col-md-12">
                                            <h5 style={{fontSize:20}}>01</h5>

                                            <h6>Name</h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input
                                                  name='teammember' 
                                                  type="text" 
                                                  value={this.state.input.teammember}
                                                  onChange={this.handleChange}
                                                  class="form-control" 
                                                  style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                  maxlength="15"  
                                                  placeholder="Enter Your Team Member Name" 
                                                  id='teammember'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.teammember}</div>

                                            <h6>Position in the Company</h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input
                                                 name='position' 
                                                 type="text"
                                                 value={this.state.input.position}
                                                 onChange={this.handleChange} 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="20"  
                                                 placeholder="Position Name"
                                                 id='position'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.position}</div>

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
                          

                                          <h6>Bio</h6>
                                            <div class="input-group mb-3" style={{width:300,height:100}}>
                                            <input
                                                 name='bio' 
                                                 value={this.state.input.bio}
                                                  onChange={this.handleChange}
                                                 type="text" 
                                                 class="form-control" 
                                                 style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                 maxlength="250"  
                                                 placeholder="Enter Your Company Website here" 
                                                 id='bio'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.bio}</div>
                                            
                                            <br/>
                                         </div>

                                    <div className='col-md-6' align="center">
                                        <ButtonGroup>
                                            <h6>Profile Picture</h6>
                                    <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",borderColor:'#E5E8E8',width:180}} wideMobile href="">
                                        Upload Picture
                                        </Button>
                                       </ButtonGroup>
                                        
                                        </div>

                                        
                                        


                                                                 
                                     <br/>
                                     <br/>
                                     <div className='col-md-6' align="">
                                        <ButtonGroup>
                                         <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",borderColor:'#E5E8E8',width:180}} wideMobile href="/Investors_Dashboard">
                                           Add Members
                                           </Button>
                                         <Button type="submit" value="Submit"   color="primary" style={{borderRadius:8,color:"white",width:180}}  >
                                           Submit
                                         </Button>
                                         </ButtonGroup>
                                         
                                        
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
};






export default Team_Info;