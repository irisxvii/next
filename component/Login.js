import { Fugaz_One } from '@next/font/google';
import React from 'react'
import Button from './Button';

const fugazOne = Fugaz_One({
  weight: '400',  
  subsets: ['latin'],  
});

export default function Login() {
  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4'>
      <h3 className={'subtext ' + fugazOne.className}>Log In / Register</h3>
      <p>you're one step away!</p>
      <input placeholder='Email'/>
      <input placeholder='Password'/>
      <Button text="Submit"/>
    </div>
  )
}
