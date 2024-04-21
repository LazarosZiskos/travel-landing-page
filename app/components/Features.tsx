import Image from 'next/image'
import React from 'react'
import { FEATURES } from '../constants'

const Features = () => {
  return (
    <section className='bg-feature-bg bg-center bg-no-repeat flexCenter flex-col py-24
    overflow-hidden'>
      <div className='max-container w-full relative flex justify-end'> 
        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image src="/phone.png" alt='phone' loading='lazy' width={400} height={1000} className='feature-phone'/>
        </div>
        <div className='flex z-20 w-full flex-col lg:w-[60%]'>
          <div className='relative'>
            <Image src="/camp.svg" alt='camp' height={50} width={50} className='absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]'/>
            <h2 className='bold-40 lg:bold-64'>Our Features</h2>
          </div>
          <ul className='grid gap-10 mt-10 md:grid-cols-2 lg:mg-20 lg:gap-20'>
            {FEATURES.map((FEATURE) => 
            <li className='flex flex-col w-full flex-1 items-start'>
              <div className='rounded-full p-4 lg:p-7 bg-green-50'>
                <Image src={FEATURE.icon} alt='map' height={28} width={28}/>
              </div>
              <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>{FEATURE.title}</h2>
              <p className='regular-16 mt-5 bg-white/80 text-gray-30 
              lg:mt-[30px] lg:bg-none'>{FEATURE.description}</p>
            </li> )}
          </ul>
        </div>
      </div>

      

    </section>
  )
}

export default Features