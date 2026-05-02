import React from 'react'
import assets from '../assets/assets'
import Title from './Title'

const Services = () => {
    const servicesData =[
        {
            title:'Business Automation',
            description:'Streamline your operations with our advanced business automation solutions.',
            icon: assets.ads_icon
        },
        {
            title:'Custom Tools & CRM',
            description:'Bespoke CRM and business tools tailored to your specific organizational needs.',
            icon: assets.marketing_icon
        },
        {
            title:'HRM & ERP Systems',
            description:'Comprehensive HRM and ERP solutions to manage your resources efficiently.',
            icon: assets.content_icon
        },
        {
            title:'Business Growth Tools',
            description:'Innovative tools designed to accelerate your business growth and market reach.',
            icon: assets.social_icon
        },
    ]
        
    
  return (
    <div id='services' className='relative flex flex-col items-center gap-8 px-4 sm:px-12 lg:px-24 xl:px-40
    pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} className='absolute -top-110 -left-70 -z-1 dark:hidden' alt="" />
        <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>
        <div className='flex flex-col md:grid grid-cols-2 '>
            {servicesData.map((service,index)=>(
                <div className='max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 
                dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10 hover:scale-102 duration-500 transition-all'>
                    <div className='flex items-center gap-10 p-8   transition-all rounded-[10px]
                    bg-white dark:bg-gray-900 relative z-5'>
                        <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
                            <img src={service.icon} alt="" className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2'/>
                        </div>
                        <div className='flex-1'>
                            <h3 className='font-bold'>{service.title}</h3>
                            <p className='text-sm mt-2'>{service.description}</p>
                        </div>
                    </div>
        
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services