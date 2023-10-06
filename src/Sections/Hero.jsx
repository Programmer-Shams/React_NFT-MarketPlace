import React from 'react'
import { HeroImg } from '../assets/Images/Index'

const Hero = () => {
  return (
    <section className=''>
        <div className=' flex justify-center'>
            <img src={HeroImg} width={1400}  />
        </div>
    </section>
  )
}

export default Hero