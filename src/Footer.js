import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-slate-100 wifull mt-[5rem] p-5'>
    <div className='max-w-[1340px] mx-auto py-8 px-8 grid lg:grid-cols-3 gap-4 '>
      <div className='w-80 '>
         <div>
            <span className=" text-orange-500 font-bold text-3xl">Green </span>
            <span className="text-slate-700 font-thin text-2xl">Recipe</span>
        </div>
        <p className='text-slate-600  py-3'>Food is more than just sustenance; it is a language that speaks to our senses and brings people together.</p>
        <div className='text-slate-600 flex justify-between md:w-[75%] my-6'>
            <a href='/'><FaFacebookSquare size={30} /></a>
            <a href='/'><FaInstagram size={30} /></a>
            <a href='/'><FaTwitterSquare size={30} /></a>
            <a href='https://github.com/vibeeshvibi'><FaGithubSquare size={30} /></a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-slate-700'>Quick Link</h6>
        <ul className='text-slate-600'>
        <li className='py-2 text-sm'><Link to="/">Recipe</Link></li>
        <li className='py-2 text-sm'><a href='https://smittenkitchen.com/'>Authors</a></li>
        <li className='py-2 text-sm'><Link to="/about">About us</Link></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-slate-700'>More</h6>
        <ul className='text-slate-600'>
        <li className='py-2 text-sm'><Link to="/">Recipe</Link></li>
        <li className='py-2 text-sm'><a href='https://smittenkitchen.com/'>Authors</a></li>
        <li className='py-2 text-sm'><Link to="/about">About us</Link></li>
       
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-slate-700'>Contact Us</h6>
        <ul className='text-slate-600'>
            <li className='py-2 text-sm'>+91 9344136348</li>
            <li className='py-2 text-sm'>Erode,</li>
            <li className='py-2 text-sm'>Tamil Nadu-638057,</li>
            <li className='py-2 text-sm'>India</li>
        </ul>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Footer;