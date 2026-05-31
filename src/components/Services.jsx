import React from 'react'
import assets from '../assets/assets'
import Title from './Title'

const Services = () => {
    const servicesData =[
        {
            title: 'Business Automation',
            description: 'Streamline your operations with our advanced business automation solutions and workflow optimization.',
            icon: assets.automation_icon
        },
        {
            title: 'SaaS Product Development',
            description: 'Scalable, cloud-based software solutions designed to solve complex business problems.',
            icon: assets.saas_icon
        },
        {
            title: 'AI Integrated Solutions',
            description: 'Leveraging cutting-edge AI and Machine Learning to give your business a competitive edge.',
            icon: assets.ai_icon
        },
        {
            title: 'Custom CRM & ERP',
            description: 'Bespoke CRM and ERP tools tailored to your specific organizational needs and growth.',
            icon: assets.crm_icon
        },
        {
            title: 'HRM Systems',
            description: 'Comprehensive HRM solutions to manage your human resources and payroll efficiently.',
            icon: assets.hrm_icon
        },
        {
            title: 'Business Growth Tools',
            description: 'Innovative tools designed to accelerate your business growth and expand your market reach.',
            icon: assets.growth_icon
        },
    ]
        
    
  return (
    <div id='services' className='relative flex flex-col items-center gap-8 px-4 sm:px-12 lg:px-24 xl:px-40
    pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} className='absolute -top-110 -left-70 -z-1 dark:hidden' alt="" />
        <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl'>
            {servicesData.map((service,index)=>(
                <div key={index} className='group rounded-2xl border border-gray-100 dark:border-gray-800 
                bg-white dark:bg-gray-900/50 p-8 shadow-xl shadow-gray-100/50 dark:shadow-none 
                hover:border-primary/30 transition-all duration-300 hover:-translate-y-2'>
                    <div className='flex flex-col gap-6'>
                        <div className='w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center 
                        group-hover:scale-110 transition-transform duration-300'>
                            <img src={service.icon} alt="" className='w-8 h-8 object-contain'/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-xl font-bold text-gray-800 dark:text-white group-hover:text-primary transition-colors'>
                                {service.title}
                            </h3>
                            <p className='text-gray-500 dark:text-gray-400 leading-relaxed'>
                                {service.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services