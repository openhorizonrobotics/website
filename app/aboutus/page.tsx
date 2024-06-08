import Image from 'next/image'
import React from 'react'
import aboutimg from './about.png'
import styles from './aboutus.module.css'

function AboutUs() {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col mx-8 justify-center'>
        <div className={`${styles.heading} text-4xl mb-4 mt-2 text-left text-orange-600 font-semibold`}>
          What OHR is all about!
        </div>
        <Image src={aboutimg} width={1000} height={500} alt='about-us' className='rounded-md' />
        <div className='bg-orange-600 rounded-md p-3 my-6 flex flex-col items-center w-full' style={{ maxWidth: '1000px' }}>
          <div className={styles.welcome}>
            Welcome to the world of innovation and automation! Join us at  the OHR, where we're building tomorrow's technology today
          </div>
          <div className={`${styles.discover} bg-blue-500 px-4 py-2 rounded-md mt-3 mb-2 cursor-pointer`}>
            Discover more!!
          </div>
        </div>
        <div className={`${styles.bottomheading} text-blue-600 text-3xl font-semibold mt-4`}>
          What makes us, us :)
        </div>
        <div className={`${styles.bottomtext} mt-4 mb-6`} style={{ maxWidth: '1000px' }}>
          OHR Robotics Club: Ignite your passion for automation and creativity! Dive into the exciting realm of robotics, where imagination meets engineering. Join us to design, build, and program robots, and let's embark on a journey to shape the future through innovation and teamwork. Together, we are OHR Robotics!
        </div>
      </div>
    </div>
  )
}

export default AboutUs