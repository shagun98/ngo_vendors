import React from 'react';
import { Link } from 'react-router-dom'; 
import Login from './components/Login';

export default function Home(){
    return(
        <>
        

{/* img section starts */}
<div
  className="hero-wrap js-fullheight"
  style={{ backgroundImage: 'url("images/work-19.jpg")' }}
  data-stellar-background-ratio="0.5"
>
  <div className="overlay" />
  <div className="container">
    <div
      className="row no-gutters slider-text js-fullheight align-items-center justify-content-start"
      data-scrollax-parent="true"
    >
      <div className="col-md-6 ">
        <h2 className="subheading">Empowering Talent, Transforming Lives</h2>
        <h1 className="mb-4">
          Join us in supporting skilled individuals from underprivileged backgrounds.
        </h1>
        <p>
          <Link to="#" className="btn btn-primary mr-md-4 py-2 px-4">
            Learn more <span className="ion-ios-arrow-forward" />
          </Link>
        </p>
      </div>
    </div>
  </div>
</div>
{/* img section ends */}


       <>
       {/* card starts */}
  <section className="ftco-appointment ftco-section ftco-no-pt ftco-no-pb">
    <div className="overlay" />
    <div className="container">
      <div className="row d-md-flex justify-content-center">
        <div className="col-md-12">
          <div className="wrap-appointment bg-white d-md-flex pl-md-4 pb-5 pb-md-0">
            <form action="#" className="appointment w-100">
              <div className="row justify-content-center">
                <div className="col-12 col-md d-flex align-items-center pt-4 pt-md-0">
                  <div className="form-group py-md-4 py-2 px-4 px-md-0">
                    <label htmlFor="name"> Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="col-12 col-md d-flex align-items-center">
                  <div className="form-group py-md-4 py-2 px-4 px-md-0">
                    <label htmlFor="name">Phone number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div className="col-12 col-md d-flex align-items-center">
                  <div className="form-group py-md-4 py-2 px-4 px-md-0">
                    <label htmlFor="name">Skill Category</label>
                    <div className="form-field">
                      <div className="select-wrap">
                        <div className="icon">
                          <span className="fa fa-chevron-down" />
                        </div>
                        <select name="" id="" className="form-control">
                          <option value="">Select Skill</option>
                          <option value="">Tailoring</option>
                          <option value="">Electric Work</option>
                          <option value="">Handicraft</option>
                          <option value="">Plumbing</option>
                          <option value="">Painting</option>
                          <option value="">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md d-flex align-items-center pb-4 pb-md-0">
                  <div className="form-group py-md-4 py-2 px-4 px-md-0">
                    <label htmlFor="name">Location</label>
                    <div className="form-field">
                      <div className="select-wrap">
                        <div className="icon">
                          <span className="fa fa-chevron-down" />
                        </div>
                        <select name="" id="" className="form-control">
                          <option value="">Select City</option>
                          <option value="">Jalandhar</option>
                          <option value="">Ludhiana</option>
                          <option value="">Amritsar</option>
                          <option value="">Hoshiarpur</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md d-flex align-items-center align-items-stretch">
                  <div className="form-group py-md-4 py-2 px-4 px-md-0 d-flex align-items-stretch bg-primary">
                    <input
                      type="submit"
                      defaultValue="Make an Appointment"
                      className="btn btn-primary py-3 px-4"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

{/* counters starts */}
  <section className="ftco-section ftco-no-pt ftco-no-pb">
    <div className="container">
      <div className="row d-flex no-gutters">
        <div className="col-md-6 d-flex">
          <div
  className="img d-flex align-items-center justify-content-center py-5 py-md-0"
  style={{
    backgroundImage: 'url("/images/work-32.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "400px"
  }}
>
            <div className="time-open-wrap">
              <div className="desc p-4">
                <h2>EmpowerNet Working Hours</h2>
                <div className="opening-hours">
                  <h4>Working Days:</h4>
                  <p className="pl-3">
                    <span>
                      <strong>Monday – Friday:</strong> 9am to 6pm
                    </span>
                    <span>
                      <strong>Saturday :</strong> 10am to 2pm
                    </span>
                  </p>
                  <h4>Holidays:</h4>
                  <p className="pl-3">
                    <span>Sundays Closed</span>
                    <span>Govt. Holidays Observed</span>
                  </p>
                </div>
              </div>
              <div className="desc p-4 bg-secondary">
                <h3 className="heading">Emergency Help Line</h3>
                <span className="phone">(+91) 98765 43210</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 pl-md-5 pt-md-5">
          <div className="row justify-content-start py-5">
            <div className="col-md-12 heading-section ">
              <span className="subheading">Welcome to EmpowerNet</span>
              <h2 className="mb-4">Connecting Skills with Opportunities</h2>
              <p>
                EmpowerNet is a community-driven NGO that empowers underprivileged
              individuals by connecting their skills to real work opportunities.
              Whether you're a skilled tailor, electrician, or artisan — we're
              here to support and grow your journey toward independence and dignity.
              </p>
            </div>
          </div>
          <div className="row ftco-counter py-5" id="section-counter">
            <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number={150}>
                    0
                  </strong>
                </div>
                <div className="text">
                  <span>
                    Vendors <br />
                    Empowered
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number={320}>
                    0
                  </strong>
                </div>
                <div className="text">
                  <span>
                    Opportunities <br />
                    Provided
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 d-flex justify-content-center counter-wrap ">
              <div className="block-18">
                <div className="text">
                  <strong className="number" data-number={75}>
                    0
                  </strong>
                </div>
                <div className="text">
                  <span>
                    Active  <br />
                    Volunteers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
{/* counters ends */}


{/* Services starts */}
       <section className="ftco-section">
  <div className="container">
    <div className="row justify-content-center pb-5 mb-3">
      <div className="col-md-7 heading-section text-center ">
        <span className="subheading">Services</span>
        <h2>Skills Offered by Our Vendors</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 col-lg-4 services">
        <div className="d-block d-flex">
          <div className="icon d-flex justify-content-center align-items-center">
            <span className="flaticon-workplace" />
          </div>
          <div className="media-body pl-3">
            <h3 className="heading">Tailoring & Stiching</h3>
            <p>
              Skilled individuals offering tailoring, custom clothing, and minor alteration services.
            </p>
            <p>
              <Link to="#" className="btn-custom">
                Read more
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 services ">
        <div className="d-block d-flex">
          <div className="icon d-flex justify-content-center align-items-center">
            <span className="flaticon-pool" />
          </div>
          <div className="media-body pl-3">
            <h3 className="heading">Electrical Work</h3>
            <p>
               Basic wiring, lighting repairs, and installation by trained NGO-supported vendors.
            </p>
            <p>
              <Link to="#" className="btn-custom">
                Read more
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 services ">
        <div className="d-block d-flex">
          <div className="icon d-flex justify-content-center align-items-center">
            <span className="flaticon-rug" />
          </div>
          <div className="media-body pl-3">
            <h3 className="heading">Craft & Handmade Items</h3>
            <p>
               Beautiful handmade products made by talented artisans from underprivileged backgrounds.
            </p>
            <p>
              <Link to="#" className="btn-custom">
                Read more
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 services ">
        <div className="d-block d-flex">
          <div className="icon d-flex justify-content-center align-items-center">
            <span className="flaticon-kitchen" />
          </div>
          <div className="media-body pl-3">
            <h3 className="heading">Wall Painting</h3>
            <p>
              Affordable and creative wall painting services offered by trained local youth.
            </p>
            <p>
              <Link to="#" className="btn-custom">
                Read more
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 services ">
        <div className="d-block d-flex">
          <div className="icon d-flex justify-content-center align-items-center">
            <span className="flaticon-garden" />
          </div>
          <div className="media-body pl-3">
            <h3 className="heading">Plumbing Support</h3>
            <p>
              Minor plumbing fixes done by NGO-linked skilled plumbers to support their livelihoods.
            </p>
            <p>
              <Link to="#" className="btn-custom">
                Read more
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 services ">
        <div className="d-block d-flex">
          <div className="icon d-flex justify-content-center align-items-center">
            <span className="flaticon-balcony" />
          </div>
          <div className="media-body pl-3">
            <h3 className="heading">Other Skilled Work</h3>
            <p>
              Various other services including data entry, home assistance, and more by local talent.
            </p>
            <p>
              <Link to="#" className="btn-custom">
                Read more
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Services ends */}


{/* Team section starts */}
      <section className="ftco-section ftco-no-pt">
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-lg-3 pr-md-4 pb-lg-0 pb-4">
        <div className="heading-section  text-center text-lg-left">
          <span className="subheading">Vendors &amp; Workers</span>
          <h2>Our Skilled Vendors</h2>
          <p>
            EmpowerNet connects talented individuals from underprivileged backgrounds with real work opportunities, ensuring dignity and financial growth.
          </p>
          <p>
            <Link to="#" className="btn btn-secondary">
              View All Vendors
            </Link>
          </p>
        </div>
      </div>
      <div className="col-md-4 col-lg-3  d-flex">
        <div className="staff">
          <div className="img-wrap d-flex align-items-stretch">
            <div
              className="img align-self-stretch"
              style={{ backgroundImage: "url(images/work-22.jpg)" }}
            />
          </div>
          <div className="text pt-3 px-3 pb-4 text-center">
            <h3>Rahul Sharma</h3>
            <span className="position mb-2">Mobile Repair Technician</span>
            <div className="faded">
              <ul className="ftco-social text-center">
                <li className="">
                  <Link to="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-twitter" />
                  </Link>
                </li>
                <li className="">
                  <Link to="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-facebook" />
                  </Link>
                </li>
                <li className="">
                  <Link to="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-google" />
                  </Link>
                </li>
                <li className="">
                  <Link to="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-instagram" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-lg-3  d-flex">
        <div className="staff">
          <div className="img-wrap d-flex align-items-stretch">
            <div
              className="img align-self-stretch"
              style={{ backgroundImage: "url(images/work-21.jpg)" }}
            />
          </div>
          <div className="text pt-3 px-3 pb-4 text-center">
            <h3>Meena Kumari</h3>
            <span className="position mb-2">Tailoring Expert</span>
            <div className="faded">
              <ul className="ftco-social text-center">
                <li className="">
                  <Link to="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-twitter" />
                  </Link>
                </li>
                <li className="">
                  <Link to="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-facebook" />
                  </Link>
                </li>
                <li className="">
                  <Link to="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-google" />
                  </Link>
                </li>
                <li className="">
                  <Link to="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-instagram" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-lg-3  d-flex">
        <div className="staff">
          <div className="img-wrap d-flex align-items-stretch">
            <div
              className="img align-self-stretch"
              style={{ backgroundImage: "url(images/work-23.jpg)" }}
            />
          </div>
          <div className="text pt-3 px-3 pb-4 text-center">
            <h3>Aslam Sheikh</h3>
            <span className="position mb-2">Electric Appliance Repair</span>
            <div className="faded">
              <ul className="ftco-social text-center">
                <li className="">
                  <Link to="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-twitter" />
                  </Link>
                </li>
                <li className="">
                  <Link to="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-facebook" />
                  </Link>
                </li>
                <li className="">
                  <Link to="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-google" />
                  </Link>
                </li>
                <li className="">
                  <Link tof="#"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-instagram" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Team sections ends */}


      {/*Testimonies section starts  */}
      <>
  <section className="ftco-section testimony-section ftco-bg-dark">
    <div className="container">
      <div className="row justify-content-center pb-5 mb-3">
        <div className="col-md-7 heading-section heading-section-white text-center ">
          <span className="subheading">What People Say</span>
          <h2>Customer Testimonials</h2>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-12">
          <div className="carousel-testimony owl-carousel ftco-owl">
            <div className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-quote-right" />
                </div>
                <div className="text">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(images/person_1.jpg)" }}
                    />
                    <div className="pl-3">
                      <p className="name">Ananya Sharma</p>
                      <span className="position">Freelancer</span>
                    </div>
                  </div>
                  <p className="mb-1">
                    Very happy with the services. The team was supportive and
                  resolved my issue quickly. Highly recommended!
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-quote-right" />
                </div>
                <div className="text">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(images/person_2.jpg)" }}
                    />
                    <div className="pl-3">
                      <p className="name">Rahul Mehta </p>
                      <span className="position">Startup Founder</span>
                    </div>
                  </div>
                  <p className="mb-1">
                    Exceptional experience! The technicians were skilled and
                  polite. Would definitely use the service again.
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-quote-right" />
                </div>
                <div className="text">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(images/person_3.jpg)" }}
                    />
                    <div className="pl-3">
                      <p className="name">Meera Kapoor</p>
                      <span className="position">Teacher</span>
                    </div>
                  </div>
                  <p className="mb-1">
                    Service was prompt and affordable. It's great to see such
                  professionalism and dedication.
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-quote-right" />
                </div>
                <div className="text">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(images/person_1.jpg)" }}
                    />
                    <div className="pl-3">
                      <p className="name">Aman Verma</p>
                      <span className="position">Photographer</span>
                    </div>
                  </div>
                  <p className="mb-1">
                    I booked a repair and within hours everything was fixed.
                  Excellent coordination and customer care.
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap py-4">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-quote-right" />
                </div>
                <div className="text">
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(images/person_2.jpg)" }}
                    />
                    <div className="pl-3">
                      <p className="name">Rohan Sharma</p>
                      <span className="position">Service Engineer</span>
                    </div>
                  </div>
                  <p className="mb-1">
                    Excellent platform for quick and reliable electronics repair. I received help within hours and the technician was professional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Testiomonies ends */}


{/* Gallery section starts */}
  <section className="ftco-section ftco-no-pb">
    <div className="container">
      <div className="row justify-content-center pb-5 mb-3">
        <div className="col-md-12 heading-section  text-center ">
          <span className="subheading">Our Mission</span>
          <h2>Some Amazing Work Done by Our NGO Vendors</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3 ">
          <div
            className="work img d-flex align-items-center"
            style={{ backgroundImage: "url(images/work-24.jpg)" }}
          >
            <Link to="images/work-1.jpg"
              className="icon image-popup d-flex justify-content-center align-items-center"
            >
              <span className="fa fa-expand" />
            </Link>
            <div className="desc w-100 px-4 text-center pt-5 mt-5">
              <div className="text w-100 mb-3 mt-4">
                <h2>
                  <Link to="work-single.html">Handicraft Work</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ">
          <div
            className="work img d-flex align-items-center"
            style={{ backgroundImage: "url(images/work-25.jpg)" }}
          >
            <Link to="images/work-2.jpg"
              className="icon image-popup d-flex justify-content-center align-items-center"
            >
              <span className="fa fa-expand" />
            </Link>
            <div className="desc w-100 px-4 text-center pt-5 mt-5">
              <div className="text w-100 mb-3 mt-4">
                <h2>
                  <Link to="work-single.html">Wheelchair Repairing</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ">
          <div
            className="work img d-flex align-items-center"
            style={{ backgroundImage: "url(images/work-26.jpg)" }}
          >
            <Link to="images/work-3.jpg"
              className="icon image-popup d-flex justify-content-center align-items-center"
            >
              <span className="fa fa-expand" />
            </Link>
            <div className="desc w-100 px-4 text-center pt-5 mt-5">
              <div className="text w-100 mb-3 mt-4">
                <h2>
                  <Link to="work-single.html">Food Distribution</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ">
          <div
            className="work img d-flex align-items-center"
            style={{ backgroundImage: "url(images/work-27.jpg)" }}
          >
            <Link to="images/work-4.jpg"
              className="icon image-popup d-flex justify-content-center align-items-center"
            >
              <span className="fa fa-expand" />
            </Link>
            <div className="desc w-100 px-4 text-center pt-5 mt-5">
              <div className="text w-100 mb-3 mt-4">
                <h2>
                  <Link to="work-single.html">Clothing Donation</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ">
          <div
            className="work img d-flex align-items-center"
            style={{ backgroundImage: "url(images/work-28.jpg)" }}
          >
            <Link to="images/work-5.jpg"
              className="icon image-popup d-flex justify-content-center align-items-center"
            >
              <span className="fa fa-expand" />
            </Link>
            <div className="desc w-100 px-4 text-center pt-5 mt-5">
              <div className="text w-100 mb-3 mt-4">
                <h2>
                  <Link to="work-single.html">Technical Repairs</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ">
          <div
            className="work img d-flex align-items-center"
            style={{ backgroundImage: "url(images/work-29.jpg)" }}
          >
            <Link to="images/work-6.jpg"
              className="icon image-popup d-flex justify-content-center align-items-center"
            >
              <span className="fa fa-expand" />
            </Link>
            <div className="desc w-100 px-4 text-center pt-5 mt-5">
              <div className="text w-100 mb-3 mt-4">
                <h2>
                  <Link to="work-single.html">Sewing & Stitching</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ">
          <div
            className="work img d-flex align-items-center"
            style={{ backgroundImage: "url(images/work-30.jpg)" }}
          >
            <Link to="images/work-7.jpg"
              className="icon image-popup d-flex justify-content-center align-items-center"
            >
              <span className="fa fa-expand" />
            </Link>
            <div className="desc w-100 px-4 text-center pt-5 mt-5">
              <div className="text w-100 mb-3 mt-4">
                <h2>
                  <Link to="work-single.html">Sanitation Drive</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ">
          <div
            className="work img d-flex align-items-center"
            style={{ backgroundImage: "url(images/work-31.jpg)" }}
          >
            <Link to="images/work-8.jpg"
              className="icon image-popup d-flex justify-content-center align-items-center"
            >
              <span className="fa fa-expand" />
            </Link>
            <div className="desc w-100 px-4 text-center pt-5 mt-5">
              <div className="text w-100 mb-3 mt-4">
                <h2>
                  <Link to="work-single.html">Vocational Training</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Gallery section ends */}

{/* Blog section starts */}
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center pb-5 mb-3">
        <div className="col-md-7 heading-section text-center ">
          <span className="subheading">News &amp; Blog</span>
          <h2>Latest Updates</h2>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-md-6 col-lg-4 d-flex ">
          <div className="blog-entry align-self-stretch">
            <Link to="blog-single.html"
              className="block-20 rounded"
              style={{ backgroundImage: 'url("images/work-12.jpg")' }}
            ></Link>
            <div className="text mt-3 px-4">
              <div className="posted mb-3 d-flex">
                <div
                  className="img author"
                  style={{ backgroundImage: "url(images/work-23.jpg)" }}
                />
                <div className="desc pl-3">
                  <span>Posted by Neha Singh</span>
                  <span>12 July 2025</span>
                </div>
              </div>
              <h3 className="heading">
                <Link tof="#">Empowerment Drive for Differently Abled</Link>
              </h3>
              <p>
               Our new skill training initiative launched across 3 cities helping 120+ individuals gain tech-based skills.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 d-flex ">
          <div className="blog-entry align-self-stretch">
            <Link to="blog-single.html"
              className="block-20 rounded"
              style={{ backgroundImage: 'url("images/work-14.jpg")' }}
            ></Link>
            <div className="text mt-3 px-4">
              <div className="posted mb-3 d-flex">
                <div
                  className="img author"
                  style={{ backgroundImage: "url(images/work-22.jpg)" }}
                />
                <div className="desc pl-3">
                  <span>Posted by Rahul Verma</span>
                  <span>05 July 2025</span>
                </div>
              </div>
              <h3 className="heading">
                <Link to="#">Join Our New Volunteer Program</Link>
              </h3>
              <p>
                Be a part of our mission to connect NGOs with local talent and contribute towards sustainable livelihoods.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 d-flex ">
          <div className="blog-entry align-self-stretch">
            <Link to="blog-single.html"
              className="block-20 rounded"
              style={{ backgroundImage: 'url("images/work-16.jpg")' }}
            ></Link>
            <div className="text mt-3 px-4">
              <div className="posted mb-3 d-flex">
                <div
                  className="img author"
                  style={{ backgroundImage: "url(images/work-20.jpg)" }}
                />
                <div className="desc pl-3">
                  <span>Posted by Aarti Joshi</span>
                  <span>28 June 2025</span>
                </div>
              </div>
              <h3 className="heading">
                <Link to="#">Tech Training Workshop Highlights</Link>
              </h3>
              <p>
                A glimpse into our 7-day tech bootcamp where participants learned HTML, CSS, and React.js hands-on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
{/* Blogs section ends */}


{/* Jumbotron section starts */}
      <section
  className="ftco-section ftco-intro"
  style={{ backgroundImage: 'url("images/bg_3.jpg")' }}
  data-stellar-background-ratio="0.5"
>
  <div className="overlay" />
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <h2>Empowering Skills, Connecting Lives</h2>
        <Link to=""
          className="icon-video d-flex align-items-center justify-content-center"
        >
          <span className="fa fa-play" />
        </Link>
        <p className="mt-3 text-white">
          Watch how we connect talented individuals with the right opportunities through EmpowerNet.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Jumbotron section ends */}


{/* Plans section starts */}
      <section className="ftco-section bg-light">
  <div className="container">
    <div className="row justify-content-center pb-5 mb-3">
      <div className="col-md-7 heading-section text-center ">
        <span className="subheading mb-3">Support & Empower</span>
        <h2>Choose Your Contribution Plan</h2>
        <p>Together, let's support talented individuals and help them shine.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 col-lg-3 ">
        <div className="block-7">
          <div className="text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="fa flaticon-sprayer" />
            </div>
            <h4 className="heading-2">Basic</h4>
            <span className="price">
              <sup>Rs.</sup> <span className="number">500</span>
            </span>
            <ul className="pricing-text mb-5">
              <li>
                <span className="fa fa-check mr-2" />
                Skill listing on platform
              </li>
              <li>
                <span className="fa fa-check mr-2" />
                Profile promotion
              </li>
              <li>
                <span className="fa fa-check mr-2" />
                NGO verification badge
              </li>
              <li>
                <span className="fa fa-check mr-2" />
                Basic job alerts
              </li>
              <li>
                <span className="fa fa-check mr-2" />
                Email support
              </li>
            </ul>
            <Link to="#" className="btn btn-primary px-4 py-3">
              Support Now
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 ">
        <div className="block-7 active">
          <div className="text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="fa flaticon-vacuum-cleaner" />
            </div>
            <h4 className="heading-2">Standard</h4>
            <span className="price">
              <sup>Rs.</sup> <span className="number">1000</span>
            </span>
            <ul className="pricing-text mb-5">
              <li>
                <span className="fa fa-check mr-2" />
                Everything in Basic
              </li>
              <li>
                <span className="fa fa-check mr-2" />
                Resume & profile boost
              </li>
              <li>
                <span className="fa fa-check mr-2" />
                Dedicated job matching
              </li>
              <li>
                <span className="fa fa-check mr-2" />
                WhatsApp alerts
              </li>
              <li>
                <span className="fa fa-check mr-2" />
                NGO mentor support
              </li>
            </ul>
            <Link to="#" className="btn btn-primary px-4 py-3">
              Support Now
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 ">
        <div className="block-7">
          <div className="text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="fa flaticon-tap" />
            </div>
            <h4 className="heading-2">Premium</h4>
            <span className="price">
              <sup>Rs.</sup> <span className="number">1500</span>
            </span>
            <ul className="pricing-text mb-5">
              <li>
                <span className="fa fa-check mr-2" />
                All Standard benefits
              </li>
              <li>
                <span className="fa fa-check mr-2" />
                Featured vendor listing
              </li>
              <li>
                <span className="fa fa-check mr-2" />
                NGO training sessions
              </li>
              <li>
                <span className="fa fa-check mr-2" />
                Performance tracking
              </li>
              <li>
                <span className="fa fa-check mr-2" />
                Direct client contact
              </li>
            </ul>
            <Link to="#" className="btn btn-primary px-4 py-3">
              Support Now
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 ">
        <div className="block-7">
          <div className="text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="fa flaticon-cleaning" />
            </div>
            <h4 className="heading-2">Platinum</h4>
            <span className="price">
              <sup>Rs.</sup> <span className="number">2000</span>
            </span>
            <ul className="pricing-text mb-5">
              <li>
                <span className="fa fa-check mr-2" />
                All Premium benefits
              </li>
              <li>
                <span className="fa fa-check mr-2" />
                Personal career advisor
              </li>
              <li>
                <span className="fa fa-check mr-2" />
                Priority project assignments
              </li>
              <li>
                <span className="fa fa-check mr-2" />
                Success story promotion
              </li>
              
            </ul>
            <Link to="#" className="btn btn-primary px-4 py-3">
              Support Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Plans section ends  */}





      
        </>
    )
}