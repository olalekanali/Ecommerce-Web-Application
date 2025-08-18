import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-20'>
        <div className='flex gap-3 mb-4'>
            <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-32">Description</button>
            <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-32">Care Guide</button>
            <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-32">Size Guide</button>
        </div>
        <div className='flex flex-col pb-16'>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eum repellendus ipsam? Id tempora, recusandae praesentium at aspernatur possimus. Id in nam magnam delectus quasi, praesentium non iusto dolorem modi hic culpa, quidem ex inventore impedit atque molestias laborum distinctio mollitia. Praesentium doloremque mollitia nulla quia voluptatem voluptatibus molestias incidunt?</p>
            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor dignissimos voluptatem obcaecati expedita harum eaque repellendus eveniet corporis est cupiditate totam placeat commodi provident ex, culpa soluta impedit!</p>
        </div>
    </div>
    
  )
}

export default ProductDescription