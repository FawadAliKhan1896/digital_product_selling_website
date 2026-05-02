import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import {toast} from 'react-hot-toast'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "34c46e3c-c81d-4430-8d93-0b43c08d05d5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      toast.error(data.message)
    }
    } catch (error) {
        toast.error(error.message)
    }
  };


  return (
    <div id='contact-us' className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 gap-8
    text-gray-700 dark:text-white'>
        <Title title='Reach out to us' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>

        <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl w-full'>
            <div>
                <p className='mb-2 text-sm font-medium'>
                    Your name
                </p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.person_icon} alt="" />
                    <input type="text" name="name" id="" placeholder='Enter your name' className='w-full
                    p-3 text-sm outline-none' required/>
                </div>
            </div>
            <div>
                <p className='mb-2 text-sm font-medium'>
                    Your email
                </p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.email_icon} alt="" />
                    <input type="email" name="email" id="" placeholder='Enter your email' className='w-full
                    p-3 text-sm outline-none' required/>
                </div>
            </div>
            <div className='sm:col-span-2'>
                <p className='mb-2 text-sm font-medium'>Message</p>
                <textarea rows={8} name="message" id="" placeholder='Enter your message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300
                dark:border-gray-600' required/>
            </div>
            <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-102 transition-all'>
                Submit <img src={assets.arrow_icon} alt="" className='w-4'/>
            </button>
        </form>
    </div>
  )
}

export default Contact