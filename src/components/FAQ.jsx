import React, { useState } from 'react'
import Title from './Title'

const faqData = [
  {
    question: "What kind of digital products do you offer?",
    answer: "We offer a range of subscription-based SaaS products including School Management Systems, Real Estate Platforms, ERP for Automotive, Healthcare solutions, and POS systems."
  },
  {
    question: "How does the subscription model work?",
    answer: "Our products are available on a monthly subscription basis. Once you subscribe, you get full access to the platform, regular updates, and premium support. There are no long-term contracts; you can cancel anytime."
  },
  {
    question: "Do you offer custom software development?",
    answer: "Yes, our team of experts specializes in custom web, mobile, and desktop application development tailored specifically to your business requirements."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide 24/7 technical support for all our subscribers. You can reach us via email, chat, or through our contact form. Our lead developers are always ready to assist you."
  },
  {
    question: "Can I try a demo before subscribing?",
    answer: "Absolutely! You can book a demo for any of our products. Our team will walk you through all the features and answer any specific questions you might have."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div id='faq' className='flex flex-col items-center gap-12 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 dark:text-white'>
      <Title title='Frequently Asked Questions' desc='Everything you need to know about our products and services.' />

      <div className='w-full max-w-3xl flex flex-col gap-4'>
        {faqData.map((item, index) => (
          <div key={index} className='bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300'>
            <button 
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className='w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors'
            >
              <span className='font-bold text-gray-800 dark:text-white'>{item.question}</span>
              <svg 
                className={`w-5 h-5 text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 py-6 border-t border-gray-100 dark:border-gray-800' : 'max-h-0'}`}
            >
              <p className='text-sm text-gray-600 dark:text-gray-400 leading-relaxed'>
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
