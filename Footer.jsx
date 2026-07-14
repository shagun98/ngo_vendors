import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Footer(){
    return(
        <>
<footer className="footer ftco-section">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
          <h2 className="footer-heading">EmpowerNet</h2>
          <p>
            EmpowerNet is an initiative to connect underprivileged yet talented individuals to real-world opportunities through NGOs, helping them build a better future.
          </p>
          <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-4">
            <li className="">
              <Link to="#">
                <span className="fa fa-twitter" />
              </Link>
            </li>
            <li className="">
              <Link to="#">
                <span className="fa fa-facebook" />
              </Link>
            </li>
            <li className="">
              <Link to="#">
                <span className="fa fa-instagram" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
          <h2 className="footer-heading">Latest Updates</h2>
          <div className="block-21 mb-4 d-flex">
            <Link 
              className="img mr-4 rounded"
              style={{ backgroundImage: "url(images/work-17.jpg)" }}
            />
            <div className="text">
              <h3 className="heading">
                <Link to="#">
                  Skill workshop for youth conducted in Jalandhar
                </Link>
              </h3>
              <div className="meta">
                <div>
                  <Link to="#">
                    <span className="icon-calendar" /> July 15, 2025
                  </Link>
                </div>
                <div>
                  <Link to="#">
                    <span className="icon-person" /> Admin
                  </Link>
                </div>
                <div>
                  <Link to="#">
                    <span className="icon-chat" /> 12
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="block-21 mb-4 d-flex">
            <Link 
              className="img mr-4 rounded"
              style={{ backgroundImage: "url(images/work-18.jpeg)" }}
            />
            <div className="text">
              <h3 className="heading">
                <Link to="#">
                  New partnership with NGOs to expand reach
                </Link>
              </h3>
              <div className="meta">
                <div>
                  <Link to="#">
                    <span className="icon-calendar" /> July 10, 2025
                  </Link>
                </div>
                <div>
                  <Link to="#">
                    <span className="icon-person" /> Admin
                  </Link>
                </div>
                <div>
                  <Link to="#">
                    <span className="icon-chat" /> 8
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="list-unstyled">
            <li>
              <Link to="#" className="py-1 d-block">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="py-1 d-block">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="py-1 d-block">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="#" className="py-1 d-block">
                Opportunities
              </Link>
            </li>
            <li>
              <Link to="#" className="py-1 d-block">
                Blog
              </Link>
            </li>
            <li>
              <Link to="#" className="py-1 d-block">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
          <h2 className="footer-heading">Contact Us</h2>
          <div className="block-23 mb-3">
            <ul>
              <li>
                <span className="icon fa fa-map-marker" />
                <span className="text">
                  123 Empower Street, Jalandhar, Punjab, India
                </span>
              </li>
              <li>
                <Link to="#">
                  <span className="icon fa fa-phone" />
                  <span className="text">+91 98765 43210</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span className="icon fa fa-paper-plane" />
                  <span className="text">support@empowernet.org</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <p className="copyright">
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © 2025 EmpowerNet | All Rights Reserved | Designed with{" "}
            <i className="fa fa-heart" aria-hidden="true" /> by Team EmpowerNet
            
          </p>
        </div>
      </div>
    </div>
  </footer>

        </>
    )
}