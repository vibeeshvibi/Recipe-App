import React from 'react'
import { Link } from 'react-router-dom'
function Header(){
    return(
        <>
        <nav className="bg-white h-12 max-w-full mx-auto p-3 md:p-5 flex items-center justify-between shadow-md">
            <div className="flex items-center">
             <span className='text-orange-500  font-extrabold text-3xl ' ><a href='/'>Green &nbsp;</a></span>
             <span className="text-slate-700  text-2xl font-semibold pt-1">Recipe</span>
            </div>
            <ul className="flex space-x-2 md:space-x-7 md:mr-3 font-semibold ">
                <li className="hover:text-orange-500 cursor-pointer"><Link to="/">Recipe</Link></li>
                <li className="hover:text-orange-500 cursor-pointer"><a href='https://smittenkitchen.com/'>Authors</a></li>
                <li className="hover:text-orange-500 cursor-pointer"><Link to="/about">About us</Link></li>
            </ul>
      </nav>
      </>
    )
}
export default Header