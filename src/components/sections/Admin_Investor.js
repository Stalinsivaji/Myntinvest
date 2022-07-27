import React, {Component} from "react";
import classNames from 'classnames';
import Image from "../elements/Image";
import '../Css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from "../elements/Input";







const Admin_Investor = ({
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
                <h2 Align="center">Investor Admin</h2>
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
                      <th className="">Firstname</th>
                      <th className="">Lastname</th>
                      <th className="" >Email</th>
                      <th className="">School</th>
                      <th className="">Password</th>
                      <th className="" >C Password</th>
                      <th className="" >Role</th>
                      <th className="">Module</th>
                      <th className="">Agreecheck</th>
                      <th className="" >Status</th>
                      <th className="">Command</th>
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
                       Karthi
                      </td>

                      <td>
                        R
                      </td>

                       <td>
                    KarthiR@gmail.com
                      </td>

                      <td >
                        Wellness
                      </td>

                      <td>
                        Karthi123
                      </td>

                      <td>
                        Karthi123
                      </td>

                      <td>
                        Investor
                      </td>
                     
                      <td>
                         Completed
                        </td>

                      <td>True</td>

                        <td>
                            Inprogress
                        </td>
                        
                        <td>
                           Accepted 
                        </td>

                        <td>
                            New Investor
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



export default Admin_Investor;