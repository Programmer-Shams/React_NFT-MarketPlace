import React from 'react'
import Box from '../Components/Box'
import { Com } from '../assets/Images/Index'

const Explore = () => {
  return (
    <section>
        <h1 className='text-3xl font-bold'>Explore</h1>
        <p className=' text-sm pt-2'>Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus <br /> facilisi ultrices sed faucibus proin cum ut.</p>
        <div className=' flex justify-between items-center pt-3 mb-8'> 
            <div className='flex gap-2'> 
                <p className=' text-white rounded-full text-sm border-[1px] border-light-purple w-fit bg-light-purple px-2  py-1' >All categories</p>
                <p className='text-light-purple text-sm border-[1px] border-light-purple rounded-full px-2 py-1 w-fit'>Art</p>
                <p className='text-light-purple  text-sm border-[1px] border-light-purple rounded-full px-2 py-1 w-fit'>Photography</p>
                <p className='text-light-purple  text-sm border-[1px] border-light-purple rounded-full px-2 py-1 w-fit'>Virtual worlds</p>
                <p className='text-light-purple  text-sm border-[1px] border-light-purple rounded-full px-2  py-1 w-fit'>Game</p>
            </div>
           <div className='flex justify-center bg-light-purple w-fit px-3 py-1 rounded-full gap-1'>
           <p className=' text-white'>Filter</p>
            <span class="material-symbols-outlined text-white">filter_list</span>
           </div>
        </div>
        <div className=' mb-6'><Box /></div>
        <Box />
        <div className='flex border-[1px] border-light-purple rounded-full p-2 px-4 w-fit mt-7 m-auto text-light-purple items-center text-center gap-2'>
          <p>Load more</p>
          <span class="material-symbols-outlined">expand_more</span>
        </div>
    </section>
  )
}

export default Explore