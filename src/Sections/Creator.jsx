import React from 'react'
import CreatorBox from '../Components/CreatorBox'

const Creator = () => {
  return (
    <section>
       <div className=' flex justify-between'>
       <h1 className='text-3xl font-bold'>Meet Our Talented Creators</h1>
       <a href="" className='text-light-purple'>See All</a>
       </div>
        <div className='flex flex-row'> <CreatorBox /></div>
    </section>
  )
}

export default Creator