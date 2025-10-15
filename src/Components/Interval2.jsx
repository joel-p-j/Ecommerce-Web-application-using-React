import React from 'react'

const Interval2 = () => {
  return (
   <div className='flex p-20 gap-1 '>
      <div className='flex-2 '>
        <video loop autoPlay muted className='rounded-3xl' src="assets/images/Interval3.mp4" alt="" />
      </div>
      <div className='flex-1 flex flex-col gap-10 '>
                    <h1 className='text-4xl'>Actus Naruto Ergonomic Chair</h1>

        <div className='card-interval bg-[#FAFAFA] rounded-3xl'>
        <img className='rounded-t-3xl' src="assets/images/Interval4.png" alt="" />
        <div className="card-Text gap-5 py-5 px-10 flex justify-between items-center ">
              <h1 className="text-xl font-medium">Installation Support:
Without Installation Support</h1>
              <h1 className="text-xl">$1099              </h1>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Interval2
