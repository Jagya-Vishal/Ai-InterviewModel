import React from 'react'
import '../Components/Header.css'
import logo from '../assets/Logo.png'
import '../output.css'
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <>
        
            <header className="site-header min-w-full">
                <div className='w-full flex justify-between items-center px-4 py-4' >
              
              <Link to='/'> <img src={logo} alt='logo' className='w-[180px]'></img> </Link>
                
                    
                <ul className='flex gap-10 md:gap-16 '>
               
                <li className='hover:font-bold cursor-pointer'><Link to='/startinterview'>Start Interview</Link></li>
                <li className='hover:font-bold cursor-pointer'><Link to='/faq'>FAQs</Link></li>
                <li className='hover:font-bold cursor-pointer'>
                <Link to='/about'>About</Link>
                </li>
                </ul>
                <div className='flex gap-8 md:gap-12'>
                <button className=''>Login</button>
                <button className='bg-black text-white px-4 py-2 rounded hover:bg-gray-200 hover:text-black'>Sign Up</button>
                </div>    
                
             

              
              
                </div>
            </header>
        </>
    )
}
