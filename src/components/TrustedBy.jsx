import React from 'react'
import { company_logos } from '../assets/assets'

const TrustedBy = () => {
  return (
    <div className='flex flex-col items-center py-16 gap-12 overflow-hidden'>
      <h3 className='font-semibold text-gray-700 dark:text-white/80 text-lg tracking-wide'>
        Trusted by Leading Companies
      </h3>
      
      <div className='relative w-full overflow-hidden'>
        {/* Gradient Overlays for smooth edges */}
        <div className='absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white dark:from-black to-transparent z-10' />
        <div className='absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white dark:from-black to-transparent z-10' />
        
        <div className='flex items-center gap-16 animate-marquee whitespace-nowrap'>
          {/* First set of logos */}
          {company_logos.map((logo, index) => (
            <img 
              key={`logo-1-${index}`} 
              src={logo} 
              alt="" 
              className='max-h-6 sm:max-h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:invert dark:brightness-200' 
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {company_logos.map((logo, index) => (
            <img 
              key={`logo-2-${index}`} 
              src={logo} 
              alt="" 
              className='max-h-6 sm:max-h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:invert dark:brightness-200' 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustedBy