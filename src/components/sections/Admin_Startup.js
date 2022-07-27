import React, {Component} from "react";
import classNames from 'classnames';
import Button from '../elements/Button';
import Link from "@material-ui/core/Link";
import Image from "../elements/Image";
import '../Css/styles.css';
import ButtonGroup from "../elements/ButtonGroup";
import Input from "../elements/Input";

import 'bootstrap/dist/css/bootstrap.min.css';








const Admin_Startup = ({
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

    <body>
    
             
        <div className="row" >
  
               <div className="row">
               <div className="col-md-1"></div>
               <div className="col-md-11">
               <div className="m-5 p-4">
              
               <div className="row">
               <h2 Align="center">Startup Admin</h2>
               <div className="row">
               <div className="col-md-4" align="right">
               <Input id="newsletter" type="search" style={{backgroundColor:"white",textColor:"black"}} label="Subscribe" labelHidden hasIcon="right" placeholder="Search">
                         <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                           <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
                          </svg>
                        </Input></div>
                        </div><br/>
                <div className="col-md-12">
              <div className="table-responsive-xxl" >
                <table className="table table-bordered table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="">ID</th>
                      <th className="">Email</th>
                      <th className="">Module</th>
                      <th className="" >Esign Doc</th>
                      <th className="">Status</th>
                      <th className="">Comment</th>
                      <th className="" >Description</th>
                      <th className="" ></th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr>
                  
                      <td>
                      1
                      </td>

                       <td>
                    Arun@gmail.com
                      </td>

                      <td >
                        Startups
                      </td>

                      <td>
                         <Image   src={require('./../../assets/images/t01.jpg')}alt="Features tile icon 01"  width={45} height={45}  />
                       </td>
                     
                      <td>
                         Completed
                        </td>

                        <td>
                            Accepted
                        </td>
                        
                        <td>
                            New Startup
                        </td>

                        <td>
                        <button type="button" class="btn btn-primary"><i class="fa fa-edit"></i></button>&nbsp;
                        <button type="button" class="btn btn-danger"><i class="fa fa-trash"></i></button>

                         </td>   

                    </tr>                
                  </tbody>
                </table>
                </div>  
              </div>
              </div>
           


                       
              


                         






              </div>
              </div>
              </div>
              </div>


    </body>          
              

              


              
               
               

) ;       
};



export default Admin_Startup;