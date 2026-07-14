import { Link } from 'react-router-dom'; 

export default function Pricing(){
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
            Pricing <i className="fa fa-chevron-right" />
          </span>
        </p>
        <h1 className="mb-0 bread">Pricing</h1>
      </div>
    </div>
  </div>
</section>


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