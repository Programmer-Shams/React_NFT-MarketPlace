import React, {  } from 'react'
import { Creator } from '../Constant/Constant'

const CreatorBox = () => {
  return (
    <div className='flex justify-between w-full mt-10'>
        {
            Creator.map((box, index) =>(
                <div className=' border-[#D3D4D6] text-center border-[1px] w-[180px] py-3 rounded-xl relative '>
                  <span className='bg-purple rounded-full left-[45%] px-2  absolute top-[-10px] mx-auto'>{index+1}</span>
                    <img src={box.imgURL} width={50} alt="" className=' m-auto my-2'/>
                    <p className=' text-sm'>{box.name}</p>
                    <p className=' text-xs pt-2'>{box.subText}</p>
                    <p className='text-light-purple text-xs'>{box.item}</p>
                </div>
            ))
        }
    </div>
  )
}

export default CreatorBox