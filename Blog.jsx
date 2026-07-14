import { Link } from 'react-router-dom'; 

export default function Blog(){
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
            Blog <i className="fa fa-chevron-right" />
          </span>
        </p>
        <h1 className="mb-0 bread">Blog</h1>
      </div>
    </div>
  </div>
</section>


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
      
      {/* Blogs section ends */}
      
</>
    )
}