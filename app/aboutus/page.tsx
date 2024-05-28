import Image from 'next/image'
import React from 'react'
import aboutimg from './about.png'

function AboutUs() {
  return (
    <div className='flex justify-center'>
      <div style={{ maxWidth: '1000px' }}>
        <div className='text-4xl my-6 text-orange-600 font-semibold'>
          What OHR is all about!
        </div>
        <Image src={aboutimg} width={1000} height={500} alt='about-us' className='rounded-md' />
        <div className='bg-orange-600 rounded-md p-3 my-6 flex flex-col items-center' style={{ width: '1000px' }}>
          <div style={{ maxWidth: '500px' }}>
            Welcome to the world of innovation and automation! Join us at  the OHR, where we're building tomorrow's technology today
          </div>
          <div className='bg-blue-500 px-4 py-2 rounded-md mt-3 mb-2 cursor-pointer'>
            Discover more!!
          </div>
        </div>
        <div className='text-blue-600 text-3xl font-semibold mt-8'>
          What makes us, us :)
        </div>
        <div className='mt-4 mb-6'>
          OHR Robotics Club: Ignite your passion for automation and creativity! Dive into the exciting realm of robotics, where imagination meets engineering. Join us to design, build, and program robots, and let's embark on a journey to shape the future through innovation and teamwork. Together, we are OHR Robotics!
        </div>
      </div>
    </div>
  )
}

export default AboutUs