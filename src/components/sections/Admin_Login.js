import React, {useState,setState} from 'react';
import '../Css/styles.css';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import classNames from 'classnames';


const tilesClasses = classNames(
        'tiles-wrap center-content',

      );
class Admin_Login extends React.Component { 
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
            input["email"] = "";
            input["password"] = "";
            this.setState({input:input});
      
            alert('Login is submitted');
        }
      }
      
      validate(){
          let input = this.state.input;
          let errors = {};
          let isValid = true;
       
         
      
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
      
          if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
          }
      
          if (!input["confirm_password"]) {
            isValid = false;
            errors["confirm_password"] = "Please enter your confirm password.";
          }
      
      
          this.setState({
            errors: errors
          });
      
          return isValid;
      }

    
         
render() {
    return(
      
            <body className='bg-white'>
            <nav class="bg-White navbar-dark navbar" style={{paddingLeft:500,paddingTop:50}}>
            <div className="row col-12 d-flex justify-content-center text-white">
                <h3></h3>
            </div>
        </nav>
            <div className='row'> 
            <div className='col-md-1'></div>
            <div className='col-md-11'style={{paddingLeft:50}}>
            <form onSubmit={this.handleSubmit} name="Loginform" id="Loginform" method="POST">
          
            <div className='row' align="center">
            <h3 align="Center">Admin Pannel</h3> 
            <div className={tilesClasses}>           
            <div className="col-md-5 ">           
            <label for="email"></label>
            <h5 align="left">E-mail</h5>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Your Email" 
              id="email" />
            </div><div className="text-danger" style={{fontSize:15}}>{this.state.errors.email}</div><br/> </div>

            <div className={tilesClasses}>            
            <div className="col-md-5">
            <h5 align="left" >Password</h5>   
            <div class="form-group">
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter password" 
              id="password"
              maxLength={10} /></div> 
             <div className="text-danger"style={{fontSize:15}}>{this.state.errors.password}</div><br/>
           
            </div></div>
            </div>

            <div className="row justify-content-start" align="Center" >    
            <div className="form-check" >  
            <label className="form-check-label">  
            <input type="checkbox" className="form-check-input" /> 
            <div className='row'>
            <p>Remember me &nbsp;&nbsp;<span style={{color:"#2ECC71"}}>Forgot Password</span></p>
                </div> 
          
            </label> 
            </div>
            <div className={tilesClasses} >
            <ButtonGroup >
                  <Button tag="a" color="primary" style={{borderRadius:8,color:"white",width:500}}wideMobile href="/Admin_Dashboard" >
                    Login
                    </Button>
                </ButtonGroup></div>
            </div>      
           
            </form>
            </div>
           </div>
           </body>
    )       
}

}


export default Admin_Login;