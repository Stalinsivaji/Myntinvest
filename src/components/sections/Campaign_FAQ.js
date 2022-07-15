import React, {useState} from 'react';
import '../Css/styles.css';
import {NavLink} from "react-router-dom";
import Button from '../elements/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from '../elements/ButtonGroup';



class Campaign_FAQ extends React.Component {
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
        input["Question"] = "";
        input["Bio"] = "";
            
        this.setState({input:input});
  
        alert('TeamInfo Form is submitted');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      if (!input["Question"]) {
        isValid = false;
        errors["Question"] = "Type your question here.";
      }
  
      if (typeof input["Question"] !== "undefined") {
        const re = /^\S*$/;
        if(input["Question"].length < 2 || !re.test(input["Question"])){
            isValid = false;
            errors["Question"] = "Type your question here.";
        }
      }


      if (!input["Bio"]) {
        isValid = false;
        errors["Bio"] = "Type something about here.";
      }
  
      if (typeof input["Bio"] !== "undefined") {
        const re = /^\S*$/;
        if(input["Bio"].length < 2 || !re.test(input["Bio"])){
            isValid = false;
            errors["Bio"] = "ype something about here.";
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
                                          <NavLink to="/Campaign" className="nav-link" style={{color:"#B1B0AD"}}>Back to Campaign</NavLink>
                                        </li>                                 
                                    </ul>
                              </div>
                            </nav>

                           <div className='container'>
                              <div className='row' style={{height:'auto'}}>
                                    <div className='col-md-12'>
                                        <h3>FAQs (Frequently Asked Questions)</h3>
                                        <p style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt libero vel elementum at cum tupis eget. Viverra ultrices lacus, lectus volutpat sociis vitae mauris<br/>porta faugiat. Nec, vitae facilisi elementum eu est vel quis platea. Diam pharetra nec malesuada mi purus erat.</p>
                                                                   
                                        <div className='row'>
                                        <form onSubmit={this.handleSubmit}>

                                        <div className="col-md-12">
                                            <h5 style={{fontSize:20}}>01</h5><hr/>
                                            <h6>Question</h6>
                                            <div class="input-group mb-3" style={{width:300}}>
                                            <input 
                                                     name='Question'
                                                     value={this.state.input.Question}
                                                     onChange={this.handleChange}
                                                     type="text" 
                                                     class="form-control" 
                                                     style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:15}}
                                                     maxlength="150"  placeholder="Type your question here..." 
                                                     id='Question'/>
                                            </div>
                                            <div className="text-danger" style={{fontSize:15}}>{this.state.errors.Question}</div>

                                            <h6>Bio</h6>
                                            <div class="input-group mb-3" style={{width:300,height:200}}>
                                            <input 
                                                      name='Bio'
                                                      value={this.state.input.Bio}
                                                      onChange={this.handleChange}
                                                      type="text" 
                                                      class="form-control" 
                                                      style={{backgroundColor:"#E5E8E8",color:"grey",fontSize:12}}
                                                      maxlength="250"  
                                                      placeholder="Type something about your team member...."
                                                      id='Bio'/>
                                                </div>
                                                <div className="text-danger" style={{fontSize:15}}>{this.state.errors.Bio}</div>
                                            </div>

                                        <div className='col-md-6' align="center">
                                        <ButtonGroup>                                          
                                        <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",borderColor:'#E5E8E8',width:180}} wideMobile href="">
                                            Add Question
                                        </Button>

                                        <Button type="submit" value="Submit"  style={{backgroundColor:"#2ECC71",borderRadius:8,color:"white",width:160}} wideMobile href="">
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





export default Campaign_FAQ;
