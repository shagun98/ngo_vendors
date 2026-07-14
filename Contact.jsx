import { Link } from 'react-router-dom'; 

export default function Contact(){
    return(
        <>
       
  
<section
  className="hero-wrap hero-wrap-2"
  style={{ backgroundImage: 'url("images/work-19.jpg")' }}
  data-stellar-background-ratio="0.5"
>
  <div className="overlay" />
  <div className="container">
    <div className="row no-gutters slider-text align-items-end">
      <div className="col-md-9  pb-5">
        <p className="breadcrumbs mb-2">
          <span className="mr-2">
            <Link to="index.html">
              Home <i className="fa fa-chevron-right" />
            </Link>
          </span>{" "}
          <span>
            Contact <i className="fa fa-chevron-right" />
          </span>
        </p>
        <h1 className="mb-0 bread">Contact</h1>
      </div>
    </div>
  </div>
</section>



      <section className="ftco-section bg-light">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="wrapper">
          <div className="row mb-5">
            <div className="col-md-3">
              <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-map-marker" />
                </div>
                <div className="text">
                  <p>
                    <span>Address:</span> 123 Empower Street, Jalandhar, Punjab, India
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-phone" />
                </div>
                <div className="text">
                  <p>
                    <span>Phone:</span>{" "}
                    <Link to="tel://1234567920">+91 9876543210</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-paper-plane" />
                </div>
                <div className="text">
                  <p>
                    <span>Email:</span>{" "}
                    <Link to="mailto:info@yoursite.com">support@empowernet.org</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dbox w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-globe" />
                </div>
                <div className="text">
                  <p>
                    <span>Website</span> <Link to="#">empowernet.com</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-7">
              <div className="contact-wrap w-100 p-md-5 p-4">
                <h3 className="mb-4">Contact Us</h3>
                <div id="form-message-warning" className="mb-4" />
                <div id="form-message-success" className="mb-4">
                  Your message was sent, thank you!
                </div>
                <form
                  method="POST"
                  id="contactForm"
                  name="contactForm"
                  className="contactForm"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="label" htmlFor="name">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="label" htmlFor="email">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="subject">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="#">
                          Message
                        </label>
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols={30}
                          rows={4}
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="submit"
                          defaultValue="Send Message"
                          className="btn btn-primary"
                        />
                        <div className="submitting" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5 d-flex align-items-stretch">
              <div
                className="info-wrap w-100 p-5 img"
                style={{ backgroundImage: "url(images/work-32.jpg)" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



       <section className="ftco-section ftco-no-pt ftco-no-pb bg-primary">
  <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-lg-8 py-4">
        <div className="row">
          <div className="col-md-6  d-flex align-items-center">
            <h2 className="mb-0" style={{ color: "white", fontSize: 24 }}>
              Subcribe to our Newsletter
            </h2>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <form action="#" className="subscribe-form">
              <div className="form-group d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email address"
                />
                <input
                  type="submit"
                  defaultValue="Subscribe"
                  className="submit px-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</>
    )
}