import React from 'react'

const Interval = () => {
  return (
    <div className='flex p-10 gap-20 '>
      <div className='flex-2 '>
        <img className='rounded-3xl' src="assets/images/Interval1.png" alt="" />
      </div>
      <div className='flex-1 flex flex-col gap-10 '>
                    <h1 className='text-4xl'>Shop the Setup</h1>

        <div className='card-interval bg-[#FAFAFA] rounded-3xl'>
        <img className='rounded-t-3xl' src="assets/images/Interval2.png" alt="" />
        <div className="card-Text gap-5 py-5 px-10 flex justify-between items-center ">
              <h1 className="text-xl font-medium">Hive65 Black Purple Mechanical Gaming Keyboard</h1>
              <h1 className="text-xl">$399              </h1>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Interval
