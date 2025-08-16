import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Item = ({id, name, image, old_price, new_price}) => {
  return (
    <section>
        <div className='rounded-xl overflow-hidden shadow-lg'>
            <div className='relative flexCenter group overflow-hidden transition-all duration-100'>
                <Link to={`product/${id}`} className='h-12 w-12 bg-white rounded-full flexCenter absolute top-1/2 bottom-1/2 !py-2 z-20 scale-0 group-hover:scale-100 transition-all duration-700'><FaSearch classNme="hover:rotate-90 hover:scale-125 transition-all duration-200"/></Link>
                <img src={image} alt="productImage" className='w-full block object-cover group-hover:scale-110 transition-all duration-1000'/>
            </div>
        </div>
        <div>
            <h4>{name}</h4>
            <div>
                <div>{old_price}</div>
                <div>{new_price}</div>
            </div>
        </div>
    </section>
  )
}

export default Item