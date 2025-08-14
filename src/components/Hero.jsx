import React from 'react'
import { MdStar, MdOutlineLocalOffer } from "react-icons/md";
import { NavLink } from "react-router-dom";


const Hero = () => {
  return (
    <section>
      <div>
        <h1>Digital Shopping Hub</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          officia dolore voluptatem, sapiente delectus dicta itaque assumenda
          veritatis nostrum deserunt voluptatibus eum commodi nobis, asperiores,
          ipsa sed numquam aspernatur nesciunt incidunt dolorum quaerat!
        </p>
        <div>
          <div>
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </div>
          <div className="bold-16 sm:bold-20">
            176K{" "}
            <span className="regular-16 sm:regular-20">Excellent Reviews</span>
          </div>
        </div>
        <div className=''>
            <NavLink to={''} className={"btn_dark_rounded flexCenter"}>Shop Now</NavLink>
            <NavLink to={''} className={"btn_dark_rounded flexCenter gap-x-2"}><MdOutlineLocalOffer className="text-2xl"/>Offer</NavLink>
        </div>
      </div>
    </section>
  )
}

export default Hero