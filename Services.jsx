import { Link } from 'react-router-dom'; 

export default function Services(){
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
            Services <i className="fa fa-chevron-right" />
          </span>
        </p>
        <h1 className="mb-0 bread">Services</h1>
      </div>
    </div>
  </div>
</section>


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
        </>
    )
}