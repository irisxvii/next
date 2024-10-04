import React from 'react';
import { Fugaz_One } from '@next/font/google';

const fugazOne = Fugaz_One({
  weight: '400',
  subsets: ['latin'],
});

export default function Hero() {
    return (
        <div className='maintext py-4 md:py-10 flex flex-col gap-8 sm:gap-10'>
            <h1 className={'text-5xl sm:text-6xl md:text-7xl text-center lg:text-8xl ' + fugazOne.className}><span className='textGradient'>Drackit</span> helps you track your <span className='textGradient'>daily</span> mood!</h1>
            <p className='subtext text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]'>Create your mood record and see how you feel on <span className='font-semibold'>every day of every year.</span></p>
        </div>
    )
}