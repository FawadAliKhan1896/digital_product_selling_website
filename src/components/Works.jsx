import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
const Works = () => {
    const worksData = [
        {
            title: 'EduSphere Pro',
            description: 'Advanced cloud-based school management platform with real-time student analytics and parent portals.',
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800',
            rating: 4.9,
            price: 99,
            category: 'Education SaaS',
            tech: ['LMS', 'Analytics']
        },
        {
            title: 'EstateFlow Cloud',
            description: 'Enterprise real estate management system with virtual tour integration and automated lead tracking.',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800',
            rating: 4.8,
            price: 149,
            category: 'Real Estate SaaS',
            tech: ['CRM', '3D Tours']
        },
        {
            title: 'AutoDrive ERP',
            description: 'Scalable cloud ERP for automotive businesses, featuring inventory sync and automated billing.',
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800',
            rating: 4.7,
            price: 129,
            category: 'Automotive SaaS',
            tech: ['ERP', 'POS']
        },
        {
            title: 'HealthSync Web',
            description: 'Secure, HIPAA-compliant telemedicine platform with encrypted video calls and patient history.',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800',
            rating: 4.9,
            price: 199,
            category: 'Healthcare SaaS',
            tech: ['Telehealth', 'Security']
        },
        {
            title: 'FinTrack Enterprise',
            description: 'Comprehensive financial accounting software for global enterprises with multi-tax support.',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800',
            rating: 4.8,
            price: 159,
            category: 'Finance SaaS',
            tech: ['Accounting', 'Audit']
        },
        {
            title: 'ShopStream POS',
            description: 'Cloud-based Point of Sale system with multi-outlet support and real-time inventory tracking.',
            image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800',
            rating: 4.6,
            price: 89,
            category: 'Retail SaaS',
            tech: ['Inventory', 'POS']
        },
    ]
  return (
    <div id='our-work' className='flex flex-col items-center gap-8 px-4 sm:px-12 lg:px-24
    xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Selected Digital Products' desc='Premium software solutions designed to scale your operations with affordable subscription plans.'/>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl gap-10'>
            {
                worksData.map((work,index)=>(
                    <div key={index} className='group relative flex flex-col bg-white dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2'>
                        {/* Image Container */}
                        <div className='relative h-60 overflow-hidden'>
                            <img src={work.image} alt={work.title}  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'/>
                            <div className='absolute top-4 left-4'>
                                <span className='px-4 py-1.5 bg-white/90 dark:bg-black/80 backdrop-blur-md text-xs font-bold rounded-full text-primary shadow-lg'>
                                    {work.category}
                                </span>
                            </div>
                            <div className='absolute bottom-4 right-4'>
                                <div className='px-4 py-1.5 bg-primary text-white text-sm font-bold rounded-xl shadow-lg'>
                                    ${work.price}/mo
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className='p-6 flex flex-col flex-1 gap-4'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-1'>
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className={`w-3.5 h-3.5 ${i < Math.floor(work.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                    ))}
                                    <span className='text-xs font-bold ml-1 text-gray-500'>{work.rating}</span>
                                </div>
                                <div className='flex gap-2'>
                                    {work.tech.slice(0, 2).map((t, i) => (
                                        <span key={i} className='text-[10px] font-medium px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400'>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <h3 className='text-lg font-bold group-hover:text-primary transition-colors duration-300 line-clamp-1'>
                                    {work.title}
                                </h3>
                                <p className='text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mt-1'>
                                    {work.description}
                                </p>
                            </div>

                            <div className='mt-auto pt-4 flex flex-col gap-3 border-t border-gray-100 dark:border-gray-800'>
                                <div className='flex items-center justify-between'>
                                    <span className='text-xs text-gray-400'>Monthly Subscription</span>
                                    <div className='flex items-baseline gap-1'>
                                        <span className='text-lg font-black text-gray-800 dark:text-white'>${work.price}</span>
                                        <span className='text-[10px] text-gray-400'>/mo</span>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <button className='flex-1 py-2.5 border border-gray-200 dark:border-gray-700 text-xs font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'>
                                        Book a Demo
                                    </button>
                                    <button className='flex-1 py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all'>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Works