import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggle = ({theme,setTheme}) => {

    useEffect(()=>{
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark').matches
        setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
    },[])

    useEffect(()=>{
        if(theme==="dark"){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
        localStorage.setItem('theme',theme)
    },[theme])
  return (
    <>
        <button>
            {theme==="dark" ? (
                <img onClick={()=>setTheme("light")} src={assets.sun_icon} alt="" className='rounded-full size-8 p-2 border border-gray-500'/>
            ) : (
                <img onClick={()=>setTheme("dark")} src={assets.moon_icon} alt="" className='rounded-full size-8 p-2 border border-gray-500'/>
            )} 
        </button>
    </>
  )
}

export default ThemeToggle