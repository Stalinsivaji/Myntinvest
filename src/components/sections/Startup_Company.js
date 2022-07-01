import React from "react";
import classNames from 'classnames';
import { NavLink } from "react-router-dom";
import '../Css/styles.css';


const Startup_Company = ({
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
 
const tilesClasses = classNames(
'tiles-wrap',
pushLeft && 'push-left'
);return (
    
             
        <div className="row text-center">
  
               <div className="row">
               <div className="col-md-1"></div>
               <div className="col-md-11">
               <div className="m-5 p-4">
               <div className="row">  
              <div className="col-md-12">
               <nav className="navbar navbar-expand-sm bg-Secondary navbar-white ">
                                <ul className="navbar-nav" style={{fontSize:20}}>
                                <li className="nav-item" >
                                    <NavLink to="/"  className="nav-link" style={{color:"Grey"}}>Startup</NavLink>
                                  </li>
                                  <li className="nav-item">
                                    <NavLink to="/Blog" className="nav-link" style={{color:'#23b347'}} >Dashboard</NavLink>
                                  </li>
                                  <li className="nav-item">
                                    <NavLink to="/" className="nav-link" >Campaign</NavLink>
                                  </li>
                                  <li className="nav-item">
                                    <NavLink to="/FAQ" className="nav-link" >Analystics</NavLink>
                                  </li>
                                </ul>
                            </nav>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>


              
               
               

) ;       
};



export default Startup_Company;