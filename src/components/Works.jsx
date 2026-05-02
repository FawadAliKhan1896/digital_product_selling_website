import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
const Works = () => {
    const worksData =[
        {
            title:'Advanced School Management System',
            description:'A complete solution for schools. Subscription: $99/month',
            image: assets.work_mobile_app
        },
        {
            title:'Advanced Real Estate Management System',
            description:'Scale your real estate business. Subscription: $149/month',
            image: assets.work_dashboard_management
        },
        {
            title:'Advanced Automobile Management System',
            description:'Drive efficiency in your auto business. Subscription: $129/month',
            image: assets.work_fitness_app
        },
        
    ]
  return (
    <div id='our-work' className='flex flex-col items-center gap-8 px-4 sm:px-12 lg:px-24
    xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Selected Digital Products' desc='Premium software solutions designed to scale your operations with affordable subscription plans.'/>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl gap-6'>
            {
                worksData.map((work,index)=>(
                    <div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-lg shadow-gray-100 dark:shadow-none'>
                        <img src={work.image} alt=""  className='w-full rounded-xl'/>
                        <h3 className='mt-3 mb-2 font-semibold text-lg'>{work.title}</h3>
                        <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Works