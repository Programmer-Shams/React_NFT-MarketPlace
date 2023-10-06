import React from 'react'
import { NFT1 } from '../assets/Images/Index'
import { futuredNFTs } from '../Constant/Constant'
const Box = ({colorStyle}) => {
  return (
    <div>
        <div className='flex'>
            {futuredNFTs.map((box)=>(
              <div>
                <img src={box.imgURL} alt="" />
                <div className='flex'>
                  <img src={box.prof1} width={50} height={10} className='rounded-full h-[3rem]' />
                  <img src={box.prof2} width={40} className=' rounded-full ml-[-25px]'/>
                </div>
              </div>
            ))}
            <h3 className={`${colorStyle}`}>{futuredNFTs[0].name}</h3>
        </div>
    </div>
  )
}

export default Box