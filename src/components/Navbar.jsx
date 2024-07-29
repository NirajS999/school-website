import React from 'react'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ImMenu } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    const [toggle,setToggle]=useState(false);

    return (
    <nav className='flex items-center justify-between z-30 py-5 sticky top-0 bg-red-100'>
        <Link className='pl-12 flex items-center text-xl font-bold gap-2 hover:scale-125' to="/">
            <img src="../logo.jfif" alt="logo" width={60} height={60} />
            <h1 className='hidden lg:block text-amber-900'>Springdale Public School</h1>
        </Link>
        <ul className='hidden h-full gap-4 xl:gap-12 font-bold text-xl md:flex lg:px-12 px-6 '>
        {navLinks.map((link)=>(
            <Link className='hover:text-2xl' to={link.href} key={link.title}>{link.title}</Link>
        ))}
        </ul>

        <div className='sm:hidden flex relative justify-end items-center'>
        <button className='mx-12'
        onClick={()=>setToggle(!toggle)}
        >
          {toggle? <RxCross2 />:<ImMenu />} 
        </button>
        <div className={`${
            !toggle ? "hidden" : "flex" } bg-red-100 bg-opacity-80 absolute top-10 w-screen h-screen`}>
            <ul className='font-bold flex flex-col flex-1 gap-4 text-2xl items-center pt-12'>
            {navLinks.map((link)=>(
            <Link className='hover-effect' to={link.href} key={link.title}>{link.title}</Link>
            ))}
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
