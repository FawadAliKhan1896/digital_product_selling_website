import React from 'react'

const Title = ({title,desc}) => {
  return (
    <div className='flex flex-col items-center text-center'>
        <h2 className='text-3xl sm:text-5xl font-medium mb-4'>{title}</h2>
        <p className='max-w-2xl text-gray-500 dark:text-white/70 mb-6'>{desc}</p>
    </div>
  )
}

export default Title