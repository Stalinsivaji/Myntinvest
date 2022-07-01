import React, {useState,setState} from 'react';
import '../Css/styles.css';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import classNames from 'classnames';


const Welcome = ({
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

    const tilesClasses = classNames(
        'tiles-wrap center-content',
        pushLeft && 'push-left'
      );

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,password,confirmPassword);
    }

    return(
            <body className='bg-white'>
          
            <div className='row' style={{paddingLeft:50}}> 
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
            <p className='text-white' style={{paddingLeft:70,fontSize: 13}}>Trusted By Hundreds<br/> Of Companies</p>
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
        

            <div className='col-md-6'>
            <form className="form-inline"> 
          
            <div className='row' style={{paddingLeft:70}}>
            <div className='row'>&nbsp;
            <p style={{color:"grey"}} align="right">Not a member?<span style={{color:"#2ECC71",fontSize:15}}>&nbsp;Sign up now</span></p>
            <div className="col-md-11">
            <h3 align="Center">Welcome Back!</h3>     
            <label for="exampleInputEmail1"></label>
            <h5 align="left">E-mail</h5>
            <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Email" /><br/>
            </div></div>

            <div className='row' >
            <div className="col-md-11">
            <h5 align="left" >Password</h5>   
            <div className="input-group"><input type="password" className="form-control" placeholder="Enter Your Password" /></div><br/>
            </div></div>
            </div>

            <div className="row justify-content-start" align="Center" >    
            <div className="form-check" >  
            <label className="form-check-label">  
            <input type="checkbox" className="form-check-input" /> 
            <div className='row'>
            <p>Remember me<span style={{color:"#2ECC71",paddingLeft:100}}>Forgot Password</span></p>
                </div> 
          
            </label> 
            </div>
            <ButtonGroup style={{paddingLeft:70}}>
                  <Button tag="a"  color="primary" style={{borderRadius:8,color:"white",width:500}} wideMobile href="/Investor_Signup">
                    Login
                    </Button>
                </ButtonGroup>

                
            <div className='row'>
            <div className='col-md-12' align="Center">
            <p>--------- OR ---------</p>
            </div>
            </div>

                <ButtonGroup style={{paddingLeft:70}}>
                  <Button tag="a" color="secondary" style={{backgroundColor:"#ECF0F1",borderRadius:8,color:"black",width:500}} wideMobile href="">
                    Sign in With Google
                    </Button>
                </ButtonGroup><br/>&nbsp;
                <span style={{color:"#2ECC71",fontSize:15,paddingRight:30}}>Log In as Startup</span>
            </div>        
            </form>
            </div>
           </div>
           </body>
    )       
}

export default Welcome;