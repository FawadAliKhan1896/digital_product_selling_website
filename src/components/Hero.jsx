import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col py-20 px-4 items-center gap-6 sm:px-12
    lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700
    dark:text-white' id='hero'>
      <div className='flex items-center gap-2 border border-gray-300
        p-2 pr-4 rounded-full'>
        <img className='w-20' src={assets.group_profile} alt="" />
        <p className='text-xs font-medium'>Trusted by 1k+ people</p>
      </div>

      <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium
        xl:leading-[95px] max-w-5xl'>Elevating your business with <span className='bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text text-transparent'> AssanTech</span> digital excellence.
      </h1>

      <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75
        max-w-4/5 sm:max-w-lg pb-3'>Specializing in high-performance Web, Mobile, and Desktop application development to drive your business growth.</p>

      <div className='relative'>
        <img src={assets.hero_img} alt="" className='w-full max-w-6xl' />
        <img src={assets.bgImage1} alt="" className='absolute -top-35 -right-30
            sm:-top-100 sm:-right-70 -z-1 dark:hidden'/>
      </div>
    </div>
  )
}

export default Hero