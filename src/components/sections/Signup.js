import React, {useState,setState} from 'react';
import '../Css/styles.css';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import classNames from 'classnames';


const tilesClasses = classNames(
    'tiles-wrap center-content',
  );

class Registration extends React.Component {
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
        input["firstname"] = "";
        input["Lastname"] = "";
        input["email"] = "";
        input["school"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
  
        alert('Registration Form is submitted');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      if (!input["firstname"]) {
        isValid = false;
        errors["firstname"] = "Please enter your firstname.";
      }
  
      if (typeof input["firstname"] !== "undefined") {
        const re = /^\S*$/;
        if(input["firstname"].length < 6 || !re.test(input["firstname"])){
            isValid = false;
            errors["firstname"] = "Please enter valid firstname.";
        }
      }
  
      if (!input["lastname"]) {
        isValid = false;
        errors["lastname"] = "Please enter your lastname.";
      }
  
      if (typeof input["lastname"] !== "undefined") {
        const re = /^\S*$/;
        if(input["lastname"].length < 6 || !re.test(input["lastname"])){
            isValid = false;
            errors["lastname"] = "Please enter valid lastname.";
        }
      }
      
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }

      if (!input["schoolname"]) {
        isValid = false;
        errors["schoolname"] = "Please enter your schoolname.";
      }
  
      if (typeof input["schoolname"] !== "undefined") {
        const re = /^\S*$/;
        if(input["schoolname"].length < 6 || !re.test(input["schoolname"])){
            isValid = false;
            errors["schoolname"] = "Please enter valid schoolname.";
        }
      }

      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please Re-enter your password.";
      }
  
      if (typeof input["password"] !== "undefined") {
        if(input["password"].length < 6){
            isValid = false;
            errors["password"] = "Please add at least 6 charachter.";
        }
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] != input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
            <body className='bg-white'>
            <nav class="bg-White navbar-dark navbar" style={{paddingLeft:500,paddingTop:50}}>
            <div className="row col-12 d-flex justify-content-center text-white">
            <h3></h3>
            </div>
            </nav>
            <div className='row'> 
            <div className='col-md-1'></div>
            <div className='col-md-5'style={{backgroundColor: "#2ECC71",height:850}}>
            <div className='row' align="Left" style={{paddingLeft:70}} >
            <h4 className='text-light' style={{marginTop: 30}}>Mynt<strong>Invest</strong></h4> 
            <p className="text-white" ><strong>Invest</strong> In The Best <strong>Startups</strong><br/>Raised Right From Their<br/><strong>Community</strong></p>
            <a href="#" class="fa fa-google" style={{fontSize: 20,width: 30,borderRadius: 50,color:'white'}}></a>
            <a href="#" class="fa fa-twitter" style={{fontSize: 20,width: 30,borderRadius: 50,color:'white'}}></a>
            <a href="#" class="fa fa-instagram" style={{fontSize: 20,width: 30,borderRadius: 50,color:'white'}}></a>
            <a href="#" class="fa fa-linkedin" style={{fontSize: 20,width: 30,borderRadius: 50,color:'white'}}></a> 
            </div>&nbsp;

            <div className={tilesClasses} align="center">
            <div className="col-sm-4">
            <h5 className='text-white' align="Right"><strong>$700M+</strong> 
            <p className='text-white' align="Right" style={{fontSize:9}}>Invested Since 2022</p>
            </h5>
            </div>

            <div className="col-sm-4" >
            <h5 className='text-white' ><strong>1.5Million+</strong>  
            <p className='text-white' style={{fontSize:10}}>Members</p> 
            </h5>
            </div>

            <div className="col-sm-4">
            <h5 className='text-white'align="left"><strong>600K+</strong> 
            <p className='text-white' style={{fontSize:10}}>Deals Done</p>
            </h5>
           
            </div>
            </div>

            <div className='row'>
            <div className='col-md-12'>
            <p className='text-white' style={{paddingLeft:70,fontSize: 20}}>Trusted By Hundreds<br/> Of Companies</p>
            </div>
            </div>

            <div className={tilesClasses}>
            <div className='col-md-12'>
            <div className="reveal-from-bottom" data-reveal-delay="600">
            <ButtonGroup className="align-item-center" >
            <Button tag="a" className="text-white" style={{backgroundColor:"#2ECC71",borderRadius:5,color:"grey"}} wideMobile href="">
            9UNICORNS
            </Button>
            <Button tag="a" color="primary" style={{backgroundColor:"white",color:"#2ECC71"}} wideMobile href="">
            Better
            </Button>
            <Button tag="a" color="secondary" style={{backgroundColor:"#2ECC71",borderRadius:5,color:"white"}} wideMobile href="">
            L I V W E L L
            </Button></ButtonGroup><br/>
            <ButtonGroup>
            <Button tag="a" color="primary" style={{backgroundColor:"#2ECC71",color:"white"}} wideMobile href="">
            Microsoft
            </Button>
            <Button tag="a" color="primary" style={{backgroundColor:"#2ECC71",color:"white"}} wideMobile href="">
            teradata
            </Button>
            <Button tag="a" color="primary" style={{backgroundColor:"#2ECC71",color:"white"}} wideMobile href="">
            Google
            </Button>
            </ButtonGroup>
            </div>
            </div>
            </div>
            </div>
        
            <div className='col-md-6' align="center" >
            <form onSubmit={this.handleSubmit} style={{paddingLeft:0,marginTop:50}}>   
           
             
            <div className='row' align="center">
            <div className="row"style={{paddingLeft:50}} >
            <p style={{color:"grey"}} align="right">Already a member?<span style={{color:"#2ECC71",fontSize:15}}>&nbsp;Sign in</span></p> &nbsp; 
            <div className="col-md-5" align="left">
            <label for="firstname"></label>  
            <b>First Name</b><div>
            <input 
              type="text" 
              name="firstname" 
              value={this.state.input.firstname}
              onChange={this.handleChange}
              class="form-control" 
              style={{fontSize:12}}
              placeholder="Enter your First name" 
              id="firstname" />
              </div>
              <div className="text-danger" style={{fontSize:15}}>{this.state.errors.firstname}</div>
            </div>

            <div className="col-md-5" align="left">   
            <label for="lastname"></label>     
             <b>Last Name</b><div>
             <input 
              type="text" 
              name="lastname" 
              value={this.state.input.lastname}
              onChange={this.handleChange}
              class="form-control" 
              style={{fontSize:12}}
              placeholder="Enter your Last name" 
              id="lastname" /></div>
              <div className="text-danger" style={{fontSize:15}}>{this.state.errors.lastname}</div> <br/>
            </div>   
            </div>

            <div className="row">
            <div className="col-md-10" align="left"style={{paddingLeft:50}}>
            <b>Email</b>  
            <label for="email"></label>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Your email" 
              id="email"
              style={{fontSize:12}} />
              <div className="text-danger" style={{fontSize:15}}>{this.state.errors.email}</div><br/>
            </div>
          
            </div>

            <div className="row">
            <div className="col-md-10" align="left"style={{paddingLeft:50}}>
            <b>School</b>
            <label for="schoolname"></label>
            <div className="form-group">

             <input 
              type="text" 
              name="schoolname" 
              value={this.state.input.schoolname}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Start typing your School name and select from the list" 
              id="schoolname"
              style={{fontSize:12}} />     
              </div>
              <div className="text-danger" style={{fontSize:15}}>{this.state.errors.schoolname}</div><br/>
            </div>
            
            </div>

            <div className="row"style={{paddingLeft:50}}>
            <div className="col-md-5"align="left">
            <label for="password"></label>    
            <b>Password</b><div>  
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter password" 
              id="password"
              style={{fontSize:12}} />
             </div>
             <div className="text-danger" style={{fontSize:15}}>{this.state.errors.password}</div>
            </div>

            <div className="col-md-5"align="left"> 
            <label for="password"></label>       
             <b>ConfirmPassword</b><div>
             <input 
              type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Confirm Password" 
              id="confirm_password"
              style={{fontSize:12}} />
            </div>
            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.confirm_password}</div>  <br/>
            </div>
           
            </div>

            <div className="row justify-content-start" align="left" style={{paddingLeft:80}}>    
            <div className="form-check" >  
            <label className="form-check-label">  
            <input type="checkbox" className="form-check-input" /> 
            <div className='row'>
            <p style={{fontSize:12}}>Creating an account means you're okay with our Terms of Service, Privacy Policy <br/>
            and our default Notification Settings.</p>
                </div> 
          
            </label> 
            </div>
            <div className='row'align="Center">
                <div className='col-md-12'>
            <ButtonGroup align="Center">
                  <Button  type="submit" value="Submit" color="primary" style={{borderRadius:8,color:"white",width:500}} wideMobile href="//Investor_Signup">
                    Sign Up
                    </Button>
                </ButtonGroup></div>

            <div className='row' style={{paddingRight:80}}>
            <p>------- OR --------</p>
            </div>
          
            
            <div>
                <ButtonGroup>
                  <Button tag="a" color="secondary" style={{backgroundColor:"#ECF0F1",borderRadius:8,color:"black",width:500}} wideMobile href="/Login">
                    Sign up With Google
                    </Button>
                </ButtonGroup></div></div>
            </div>  &nbsp;  
                    
              

            </div>
           
            
        </form>

            
            </div>
         
         
           </div>
         
           </body>
    )       
}
};

export default Registration;