import React, {useState,setState} from 'react';
import '../Css/styles.css';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import { useMediaQuery } from 'react-responsive'
import classNames from 'classnames';


const Registration = ({
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
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,password,confirmPassword);
    }

    const tilesClasses = classNames(
        'tiles-wrap center-content',
        pushLeft && 'push-left'
      );


    return(
            <body className='bg-white'>
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
            <Button tag="a" className="text-white" style={{backgroundColor:"#2ECC71",borderRadius:5,color:"grey",fontSize:20}} wideMobile href="">
            9UNICORNS
            </Button>
            <Button tag="a" color="primary" style={{backgroundColor:"white",color:"#2ECC71",fontSize:20}} wideMobile href="">
            Better
            </Button>
            <Button tag="a" color="secondary" style={{backgroundColor:"#2ECC71",borderRadius:5,color:"white",fontSize:25}} wideMobile href="">
            L I V W E L L
            </Button></ButtonGroup><br/>
            <ButtonGroup>
            <Button tag="a" align="right" color="primary" style={{backgroundColor:"#2ECC71",color:"white",fontSize:25}} wideMobile href="">
            Microsoft
            </Button>
            <Button tag="a" align="right" color="primary" style={{backgroundColor:"#2ECC71",color:"white",fontSize:25}} wideMobile href="">
            teradata.
            </Button>
            <Button tag="a" align="right" color="primary" style={{backgroundColor:"#2ECC71",color:"white",fontSize:25}} wideMobile href="">
            Google
            </Button>
            </ButtonGroup>
            </div>
            </div>
            </div>
            </div>
        
            <div className='col-md-6' align="center" >
            <form className="form-inline "align="center" style={{paddingLeft:0,marginTop:50}}> 
             
            <div className='row' align="center">
            <div className="row"style={{paddingLeft:50}} >
            <p style={{color:"grey"}} align="right">Already a member?<span style={{color:"#2ECC71",fontSize:15}}>&nbsp;Sign in</span></p> &nbsp; 
            <div className="col-md-5" align="left">
            <b>First Name</b><div><input type="text" className="form-control" id="Fname" name="Fname" style={{fontSize:12}} placeholder="Enter your First name"  /> </div>
            </div>

            <div className="col-md-5" align="left">          
             <b>Last Name</b><div><input type="text" className="form-control" id="Lname" name="Lname" style={{fontSize:12}} placeholder="Enter your Last name" /> </div><br/>
            </div>   
            </div>

            <div className="row">
            <div className="col-md-10" align="left"style={{paddingLeft:50}}>
            <b>Email</b>  
            <label for="exampleInputEmail1"></label>
            <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" style={{fontSize:12}}  placeholder="Enter your Email" /><br/>
            </div>
            </div>

            <div className="row">
            <div className="col-md-10" align="left"style={{paddingLeft:50}}>
            <b>School</b><div className="input-group"><input type="text" className="form-control" style={{fontSize:12}}  placeholder="Start typing your School name and select from the list" /></div><br/>
            </div>
            </div>

            <div className="row"style={{paddingLeft:50}}>
            <div className="col-md-5"align="left">
            <b>Password</b><div><input type="password" className="form-control" id="pwd" name="pwd" style={{fontSize:12}} placeholder="Enter Password"  /> </div>
            </div>

            <div className="col-md-5"align="left">          
             <b>ConfirmPassword</b><div><input type="password" className="form-control" id="pwd" name="pwd" style={{fontSize:12}} placeholder="Confirm Password" /> </div><br/>
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
            <div className='row'>
                <div className='col-md-10'align="Center">
            <ButtonGroup align="Center" style={{paddingLeft:20}}>
                  <Button tag="a"  color="primary" style={{borderRadius:8,color:"white",width:500}} wideMobile href="/Investor_Signup">
                    Sign Up
                    </Button>
                </ButtonGroup>

                
            <div className='row' align="center">
            <div className='col-md-12'>
            <p>------- OR --------</p>
            </div>
            </div>

                <ButtonGroup style={{paddingLeft:20}}>
                  <Button tag="a" color="secondary" style={{backgroundColor:"#ECF0F1",borderRadius:8,color:"black",width:500}} wideMobile href="">
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

export default Registration;