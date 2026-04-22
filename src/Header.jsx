import React from 'react'
import logo from './assets/logo.png'
import { NavLink } from 'react-router-dom'
export default function Header() {
    return (
        <div className='w-full h-auto  flex justify-center  bg-amber-950 border-b-2 border-yellow-200 '>
            <div className='container h-full bg-amber-950 place-items-center md:flex justify-between items-center text-center'>
                {/* <h1 className='text-4xl font-bold text-amber-50'>LOGO</h1> */}
                <img className='h-20 ' src={logo} alt="" />
                <nav className='font-bold text-amber-50 font-arabic  text-[15px] gap-8 md:text-[20px] flex md:gap-10 flex-row-reverse'>
                    <NavLink className='hover:text-yellow-200 font-arabic' to="/">مشروبات ساخنه</NavLink>
                    <NavLink className='hover:text-yellow-200 font-arabic' to="/Colddrinks">مشربات بارده</NavLink>
                    <NavLink className='hover:text-yellow-200 font-arabic' to="/Coffeeside"> بن</NavLink>
                    <NavLink className='hover:text-yellow-200 font-arabic' to="/More"> سناك</NavLink>
                </nav>
            </div>


        </div>
    )
}
