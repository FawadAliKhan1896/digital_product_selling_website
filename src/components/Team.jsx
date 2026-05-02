import React from 'react'
import assets, { teamData } from '../assets/assets'
import Title from './Title'

const Team = () => {
  return (
    <div className='px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 gap-8
    dark:text-white flex flex-col items-center pt-30'>
        <Title title='Meet our team' desc='A passionate team of digital experts dedicated to your brands success.'/>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
            {
                teamData.map((team,index)=>(
                    <div key={index} className='flex max-sm:flex-col items-center gap-6 p-4
                    rounded-xl border border-gray-100 dark:border-gray-700 bg-white
                    dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-102 transition-all duration-400'>
                        <img src={team.image} alt="" className='size-12 rounded-full'/>
                        <div className='flex-1'>
                            <h3 className='font-bold text-sm'>{team.name}</h3>
                            <p className='text-xs opacity-60'>{team.title}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Team