import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const testimonialsData = [
  {
    name: 'Robert Fox',
    role: 'CEO at Techflow',
    content: "The EduSphere Pro has completely transformed how we manage our institution. The automation features are top-notch and the support is incredible.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    rating: 5,
    platform: 'TrustPilot',
    date: '2 days ago'
  },
  {
    name: 'Jane Cooper',
    role: 'Marketing Director',
    content: "ShopStream POS made our inventory management a breeze. The real-sync across multiple outlets is exactly what we needed for our growth.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    rating: 5,
    platform: 'TrustPilot',
    date: '1 week ago'
  },
  {
    name: 'Cody Fisher',
    role: 'Product Manager',
    content: "The UI/UX of these digital products is stunning. Our team was able to integrate the HealthSync platform in record time.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    rating: 5,
    platform: 'Google',
    date: '3 days ago'
  },
  {
    name: 'Albert Flores',
    role: 'Founder of EduLink',
    content: "Searching for a reliable SaaS partner was tough until we found this team. Their school management script is simply the best in the market.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    rating: 5,
    platform: 'Google',
    date: '2 weeks ago'
  },
  {
    name: 'Brooklyn Simmons',
    role: 'Real Estate Agent',
    content: "EstateFlow Cloud has doubled our lead conversion rate. The 3D tours and automated follow-ups are game-changers for our agents.",
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
    rating: 5,
    platform: 'TrustPilot',
    date: '1 month ago'
  },
  {
    name: 'Leslie Alexander',
    role: 'Tech Lead',
    content: "Highly impressed with the code quality and documentation. The AI integration features are way ahead of anything else we’ve seen.",
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop',
    rating: 5,
    platform: 'Google',
    date: '5 days ago'
  },
  {
    name: 'Guy Hawkins',
    role: 'Software Architect',
    content: "The modularity of the components and the clean architecture made it so easy for us to customize. A true developer-first product.",
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop',
    rating: 5,
    platform: 'TrustPilot',
    date: '1 week ago'
  },
  {
    name: 'Kristin Watson',
    role: 'E-commerce Manager',
    content: "Our sales increased by 40% after switching to their checkout system. The analytics dashboard is incredibly intuitive.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    rating: 5,
    platform: 'Google',
    date: '3 weeks ago'
  }
]

const PlatformIcon = ({ platform }) => {
  if (platform === 'TrustPilot') {
    return (
      <div className='flex items-center gap-1 bg-[#00b67a]/10 px-2 py-1 rounded-full border border-[#00b67a]/20'>
        <svg className='w-3 h-3 text-[#00b67a]' fill='currentColor' viewBox='0 0 24 24'><path d='M23.954 9.043l-8.629-1.253L12 0 8.675 7.79l-8.629 1.253 6.244 6.085-1.474 8.593L12 19.167l7.734 4.067-1.474-8.593z'/></svg>
        <span className='text-[10px] font-bold text-[#00b67a]'>Trustpilot</span>
      </div>
    )
  }
  return (
    <div className='flex items-center gap-1 bg-blue-500/10 px-2 py-1 rounded-full border border-blue-500/20'>
      <svg className='w-3 h-3' viewBox='0 0 24 24'><path fill='#4285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/><path fill='#34A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/><path fill='#FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z'/><path fill='#EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/></svg>
      <span className='text-[10px] font-bold text-blue-500'>Google</span>
    </div>
  )
}

const TestimonialCard = ({ item }) => (
  <div className='glass-card p-8 rounded-3xl group hover:border-primary/30 transition-all duration-500 flex flex-col gap-6 relative overflow-hidden h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_20px_50px_rgba(80,68,229,0.1)] dark:hover:shadow-[0_20px_50px_rgba(80,68,229,0.05)] hover:translate-y-[-4px]'>
    {/* Quote Icon Decoration */}
    <div className='absolute top-6 right-8 text-gray-200/50 dark:text-gray-800/50 group-hover:text-primary/10 transition-colors duration-500'>
      <svg className='w-12 h-12 rotate-180' fill='currentColor' viewBox='0 0 24 24'><path d='M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V9C13.017 7.34315 14.3601 6 16.017 6H19.017C20.6738 6 22.017 7.34315 22.017 9V15C22.017 17.7614 19.7784 20 17.017 20H14.017V21ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H7.0166C6.46431 8 6.0166 8.44772 6.0166 9V12C6.0166 12.5523 5.56888 13 5.0166 13H4.0166V9C4.0166 7.34315 5.35975 6 7.0166 6H10.0166C11.6735 6 13.0166 7.34315 13.0166 9V15C13.0166 17.7614 10.778 20 8.0166 20H5.0166V21Z'/></svg>
    </div>

    <div className='flex justify-between items-start z-10'>
      <div className='flex items-center gap-4'>
        <div className='relative'>
          <img src={item.image} alt={item.name} className='w-14 h-14 rounded-2xl object-cover ring-4 ring-gray-50 dark:ring-gray-800/50' />
          <div className='absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center' title='Verified User'>
            <svg className='w-2 h-2 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='4' d='M5 13l4 4L19 7'/></svg>
          </div>
        </div>
        <div>
          <h4 className='font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300'>{item.name}</h4>
          <p className='text-xs text-gray-500 dark:text-gray-400 font-medium'>{item.role}</p>
        </div>
      </div>
    </div>

    <div className='flex flex-col gap-4 z-10'>
      <div className='flex items-center gap-3'>
        <div className='flex gap-0.5'>
          {[...Array(item.rating)].map((_, i) => (
            <svg key={i} className='w-4 h-4 text-yellow-400 fill-yellow-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          ))}
        </div>
        <div className='h-3 w-[1px] bg-gray-200 dark:bg-gray-800'></div>
        <span className='text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider'>{item.date}</span>
      </div>
      
      <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-[15px]'>
        "{item.content}"
      </p>
    </div>

    <div className='mt-auto pt-6 border-t border-gray-100 dark:border-gray-800/50 flex justify-between items-center z-10'>
      <PlatformIcon platform={item.platform} />
      <div className='flex items-center gap-1.5'>
        <span className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Verified Purchase</span>
      </div>
    </div>
  </div>
)

const Testimonials = () => {
  return (
    <div id='testimonials' className='relative overflow-hidden py-32 px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-[#030303]'>
      {/* Background Decorations */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-blob"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[150px]"></div>

      <div className='relative z-10 max-w-7xl mx-auto'>
        <img src={assets.bgImage2} alt="" className='absolute -top-60 -right-50
            sm:-top-60 sm:-right-60 -z-1 dark:hidden'/>
        <div className='flex flex-col items-center mb-20'>
          <div className='mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-primary'></span>
            </span>
            Real-time Feedback
          </div>
          <Title 
            title='Loved by creators & businesses' 
            desc='Join 10,000+ satisfied customers who have transformed their digital presence with our high-performance scripts and platforms.' 
          />
          
          <div className='flex flex-wrap justify-center gap-8 mt-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500'>
             <div className='flex items-center gap-2'>
                <svg className='w-6 h-6 text-[#00b67a]' fill='currentColor' viewBox='0 0 24 24'><path d='M23.954 9.043l-8.629-1.253L12 0 8.675 7.79l-8.629 1.253 6.244 6.085-1.474 8.593L12 19.167l7.734 4.067-1.474-8.593z'/></svg>
                <span className='font-bold text-gray-900 dark:text-white'>4.9/5 Trustpilot</span>
             </div>
             <div className='flex items-center gap-2'>
                <svg className='w-5 h-5' viewBox='0 0 24 24'><path fill='#4285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/><path fill='#34A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/><path fill='#FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z'/><path fill='#EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/></svg>
                <span className='font-bold text-gray-900 dark:text-white'>5.0/5 Google</span>
             </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonialsData.map((item, index) => (
            <div key={index} className={`${index === 1 || index === 4 || index === 7 ? 'lg:translate-y-12' : ''}`}>
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>
        
        <div className='mt-24 text-center'>
            <button className='group relative inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-primary/20'>
                View All Reviews
                <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 8l4 4m0 0l-4 4m4-4H3'/></svg>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
