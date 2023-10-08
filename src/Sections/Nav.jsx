import React from 'react'
import { NFTLogo, ProfilePics } from '../assets/Images/Index'
import { Searchicon, notify } from '../assets/Icons'
import { navLinks } from '../Constant/Constant'
const Nav = () => {
  return (
    <nav className='flex justify-between'>
        <div className=' w-full'>
            <div className='flex gap-[0.8rem] w-1/2 py-2 items-center text-center '>
                <img src={NFTLogo} alt="Logo" width={35} height={35}/>
                <h3 className='text-light-purple font-bold text-xl'>NFT logoplace</h3>
                <div className='relative items-center flex'>
                    <input type="text" placeholder='search' className=' w-full py-1.5 pl-8 bg-[#F1F1F2] rounded-lg outline-none text-sm'/>
                    <img src={Searchicon} className='absolute ml-1' width={18}/>
                </div>
            </div>
        </div>

        <div className='w-1/2 flex justify-between items-center'>
            {
                navLinks.map((link) =>(
                    <p>{link.label}</p>
                ))
            }
            <img src={notify} width={38} alt="notification" className='bg-[#F1F1F2] p-2 rounded-lg'/>
            <div className='flex items-center bg-[#F1F1F2] pl-6 rounded-full gap-3'>
                <h4 className='text-light-purple'>Account</h4>
                <img src={ProfilePics} alt="profile" width={40} height={20} />
            </div>
        </div>
    </nav>
  )
}

export default Nav