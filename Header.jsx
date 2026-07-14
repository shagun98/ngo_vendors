import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Header(){
    return(
        <>
           {/* Header Start */}
                       <>
           
                       <div className="wrap">
                           <div className="container">
                             <div className="row justify-content-between">
                               <div className="col-12 col-md d-flex align-items-center">
                                 <p className="mb-0 phone">
                                   <span className="mailus">Helpline:</span>{" "}
                                   <Link to="#">+91 98765 43210</Link> &nbsp;|&nbsp;
                                   <span className="mailus">Email:</span>{" "}
                                   <Link to="#">support@empowernet.org</Link>
                                 </p>
                               </div>
                               <div className="col-12 col-md d-flex justify-content-md-end">
                                 <div className="social-media">
                                   <p className="mb-0 d-flex">
                                     <Link to="#"
                                       className="d-flex align-items-center justify-content-center"
                                     >
                                       <span className="fa fa-facebook">
                                         <i className="sr-only">Facebook</i>
                                       </span>
                                     </Link>
                                     <Link to="#"
                                       className="d-flex align-items-center justify-content-center"
                                     >
                                       <span className="fa fa-twitter">
                                         <i className="sr-only">Twitter</i>
                                       </span>
                                     </Link>
                                     <Link to="#"
                                       className="d-flex align-items-center justify-content-center"
                                     >
                                       <span className="fa fa-instagram">
                                         <i className="sr-only">Instagram</i>
                                       </span>
                                     </Link>
                                     <Link tof="#"
                                       className="d-flex align-items-center justify-content-center"
                                     >
                                       <span className="fa fa-dribbble">
                                         <i className="sr-only">Dribbble</i>
                                       </span>
                                     </Link>
                                   </p>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                         
             <nav
               className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
               id="ftco-navbar"
             >
               <div className="container">
                 <Link className="navbar-brand" href="index.html">
                   EmpowerNet
                 </Link>
                 <button
                   className="navbar-toggler"
                   type="button"
                   data-toggle="collapse"
                   data-target="#ftco-nav"
                   aria-controls="ftco-nav"
                   aria-expanded="false"
                   aria-label="Toggle navigation"
                 >
                   <span className="fa fa-bars" /> Menu
                 </button>
                 <div className="collapse navbar-collapse" id="ftco-nav">
                   <ul className="navbar-nav ml-auto">
                     <li className="nav-item active">
                       <Link to="/" className="nav-link">
                         Home
                       </Link>
                     </li>
                     <li className="nav-item">
                       <Link to="/about" className="nav-link">
                         About
                       </Link>
                     </li>
                     <li className="nav-item">
                       <Link to="/services" className="nav-link">
                         Services
                       </Link>
                     </li>
                     <li className="nav-item">
                       <Link to="/portfolio" className="nav-link">
                         Portfolio
                       </Link>
                     </li>
                     <li className="nav-item">
                       <Link to="/pricing" className="nav-link">
                         Pricing
                       </Link>
                     </li>
                     <li className="nav-item">
                       <Link to="/blog" className="nav-link">
                         Blog
                       </Link>
                     </li>
                     <li className="nav-item">
                       <Link to="/contact" className="nav-link">
                         Contact
                       </Link>
                     </li>
                     
                   </ul>
                 </div>
                 <Link to="/login" className="btn btn-primary px-4">Login</Link>
                 <Link to="/register" className="btn btn-warning px-4 mx-2">Register</Link>
               </div>
             </nav>
           
             {/* Header ends */}
           </>

        </>
    )
}