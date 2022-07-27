import React, {useState,setState} from 'react';
import '../Css/styles.css';
import Input from '../elements/Input';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

const tilesClasses = classNames(
        'tiles-wrap center-content',

      );
class Admin_Dashboard extends React.Component {         
render() {
    return(
      
            <body className='bg-white'>
            <nav className="bg-White navbar-dark navbar" style={{paddingLeft:500,paddingTop:50}}>
            <div className="row col-12 d-flex justify-content-center text-white">
                <h3></h3>
            </div>
        </nav>
            <div className='row'> 
            <nav className="nav bg-purple justify-content-center">
            <a className="nav-link text-white" href="#"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
            <a className="nav-link text-white" href="#">Services</a>
            <a className="nav-link text-white" href="#">Logout <i className="fa fa-sign-out" aria-hidden="true"></i></a>
            </nav>

<div className="container py-5">
  <div className="row" align="center" >
    <div className="col-lg-12 p-5" align="center">
      <h1> <i className="fa fa-tachometer" aria-hidden="true"></i>Admin Dashboard</h1>
      <hr />
    </div>
  </div>

  <div className="row">
    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-2 p-2">
      <a className="text-decoration-none" href="/Admin_Startup">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{backgroundColor:"#23b347"}}>
          <div className="card-body">
            <i className="fa fa-bookmark-o fa-2x" style={{color:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead" style={{fontSize:18,color:"white"}}>Startup</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-2 p-2">
      <a className="text-decoration-none" href="/Admin_Investor">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{backgroundColor:"#23b347"}}>
          <div className="card-body">
            <i className="fa fa-edit fa-2x" style={{color:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"white"}} >Investors</p>
          </div>
        </div>
      </a>
    </div>

    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-2 p-2">
      <a className="text-decoration-none" href="/Admin_Accounts">
        <div className="card p-3 shadow bg-purple text-center border-0" style={{backgroundColor:"#23b347"}}>
          <div className="card-body">
            <i className="fa fa-image fa-2x" style={{color:"white"}} aria-hidden="true"></i>
            <hr />
            <p className="card-title lead"style={{fontSize:18,color:"white"}} >Accounts</p>
          </div>
        </div>
      </a>
    </div>

  </div>
</div>





           </div>
           </body>
    )       
}

}


export default Admin_Dashboard;