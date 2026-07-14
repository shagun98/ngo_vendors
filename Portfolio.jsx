import { Link } from 'react-router-dom'; 

export default function Portfolio(){
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
            Portfolio <i className="fa fa-chevron-right" />
          </span>
        </p>
        <h1 className="mb-0 bread">Portfolio</h1>
      </div>
    </div>
  </div>
</section>


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
        </>
    )
}