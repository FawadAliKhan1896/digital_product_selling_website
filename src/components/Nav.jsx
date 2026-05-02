import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggle from './ThemeToggle'
const Nav = ({theme, setTheme}) => {
    const [sidebar, setSidebar] = useState(false)
  return (
    <nav className='flex items-center justify-between px-4
    sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-10 
    backdrop-blur-lg font-medium bg-white/50 dark:bg-gray-900/70'>
        
        <img src={theme === 'dark' ? assets.logo_dark : assets.logo} 
        alt="logo" className='w-32 sm:w-40'/>

        <div className={`text-gray-700 dark:text-white sm:text-sm ${
            !sidebar ? 'max-sm:max-w-0 max-sm:overflow-hidden':'max-sm:w-60 max-sm:pl-10'} 
            max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen
            max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white
            max-sm:pt-20 flex sm:items-center gap-5 transition-all`}> 

            <img src={assets.close_icon} alt="" className='sm:hidden
                w-5 absolute top-4 right-4' onClick={()=> setSidebar(false)}/>
            <a href="#" onClick={()=>setSidebar(false)} className='sm:hover:border-b'>Home</a>
            <a href="#services" onClick={()=>setSidebar(false)} className='sm:hover:border-b'>Services</a>
            <a href="#our-work" onClick={()=>setSidebar(false)} className='sm:hover:border-b'>Our Works</a>
            <a href="#github" onClick={()=>setSidebar(false)} className='sm:hover:border-b'>GitHub</a>
            <a href="#contact-us" onClick={()=>setSidebar(false)} className='sm:hover:border-b'>Contact Us</a>
        </div>

        <div className='flex items-center gap-2 sm:gap-4'>
            <ThemeToggle theme={theme} setTheme={setTheme}/>
            <a href="#contact-us" className='text-sm bg-primary
            max-sm:hidden flex items-center gap-2 text-white px-6 py-2
            rounded-full cursor-pointer hover:scale-102 transition-all'>Connect
                <img src={assets.arrow_icon} alt="" width={14}/>
            </a>

            <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={()=> setSidebar(true)} className='sm:hidden size-8'/>
        </div>

    </nav>
  )
}

export default Nav