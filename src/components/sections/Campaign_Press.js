import React from "react";
import classNames from 'classnames';
import Button from '../elements/Button';
import ButtonGroup from "../elements/ButtonGroup";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Image from "../elements/Image";
import '../Css/styles.css';


class Campaign_Press extends React.Component {
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
      input["header01"] = "";
      
      
      
      
      this.setState({input:input});

      alert('Campaign Press Form is submitted');
  }
}

validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;
 
    if (!input["header01"]) {
      isValid = false;
      errors["header01"] = "Enter Your header/title here.";
    }

    if (typeof input["header01"] !== "undefined") {
      const re = /^\S*$/;
      if(input["header01"].length < 4 || !re.test(input["header01"])){
          isValid = false;
          errors["header01"] = "Enter Your header/title here.";
      }
    }

    




  
    this.setState({
      errors: errors
    });

    return isValid;
}
   
render() {
  

return (
    
             
        <div className="row">
  
               <div className="row">
               <div className="col-md-1"></div>
               <div className="col-md-11">
               <form onSubmit={this.handleSubmit}>
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
              <strong style={{fontSize:35}}>Press</strong>
              &nbsp;
              &nbsp;
              <p style={{fontSize:13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam nunc at nibh. Odio erat turpis sit at bibendum nunc adipiscing sed.<br/>Tincidunt enim, amet vitae nibh cursus imperdiet erat</p>
              
              <br/>
              <br/>

             <div className="row">
             <div className="col-md-4">
                       <input
                              name="header01" 
                              type="text" 
                              value={this.state.input.header01}
                              onChange={this.handleChange} 
                              style={{width:'auto',height:40,backgroundColor:"#E5E8E8",fontSize:12}} 
                              className="form-control" 
                              placeholder="Enter Your header/title here" 
                              id="header01"/>
                      </div>

                      <div className="text-danger" style={{fontSize:15}}>{this.state.errors.header01}</div>
                      <br/>
                      <br/>
               <strong style={{fontSize:15}}>body</strong>
               <div className="row" >
                
                  <div className="col-md-8"style={{width:750,height:'auto',backgroundColor:"white"}}>
                  <Editor 
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                    /></div>
                      
                </div>


                 <div className="row" style={{padding:10}}>
                    
                       <div className='col-md-6'><h6 style={{fontSize:15}}>Banner Photo</h6></div>
                       <div className='col-md-4'>
                       <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",borderColor:'#E5E8E8',width:'auto'}} wideMobile href="">
                       Upload Picture
                       </Button>
                       </div>
                   </div>
                   <br/>

                   <br/>
                   
                   <div className="row" align="center">
                    <div>
                    
                    <p style={{color:"grey"}}>-----or------</p>
                    </div>
                    
                   </div>

                   <div className='row'>
                   <div className='col-md-4'><h6 style={{fontSize:15}}>Videos</h6><p style={{fontSize:12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam nunc at nibh. Odio erat turpis sit at bibendum nunc adipiscing sed.</p></div>
                   <div className="col-md-8">
                   <ButtonGroup>
                   <Button tag="a" color="" style={{backgroundColor:"white",borderRadius:8,color:"#B3B6B7 ",borderColor:'#E5E8E8',width:160}} wideMobile href="">
                    Upload a Video
                    </Button>&nbsp;&nbsp;
                    <Button tag="a"  style={{backgroundColor:"#2ECC71",borderRadius:8,color:"white",width:160}} wideMobile href="">
                    Embed Video
                    </Button>
                    </ButtonGroup>
                    </div>
                    </div>
                   < br/>
                   </div>&nbsp;
                
                
                
                   <div className="features-tiles-item-image mb-16" style={{backgroundColor:"#f9faf9"}}>
                   <Image
                  src={require('./../../assets/images/video-placeholder.jpg')}
                  alt="video-placeholder.jpg"
                  width={300}
                  height={300}
                  /></div>

                   <div className="row" >

                    <div >
                   
                 
                   <Button type="submit" value="Submit" color="secondary" className='text-white' style={{backgroundColor:"#2ECC71",borderRadius:8,width:160}} wideMobile href="/">
                   Publish
                     </Button>
                     </div>
                     </div>

              </div>
              </div>
              </form>
              </div>
              </div>
              </div>
              

              


              
               
               

) ;  
}     
};



export default Campaign_Press;
