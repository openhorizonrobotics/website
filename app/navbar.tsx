"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import DarkModeToggele from '../components/ToggleDark'
function Navbar() {
    const pathname = usePathname();
    return (
        <div className='flex justify-center my-6'>
            <ul>
                <Link className={`link ${pathname === '/' ? 'text-red-500 mx-4' : 'mx-4'}`} href="/">
                    Home
                </Link>
                <Link className={`link ${pathname === '/aboutus' ? 'text-red-500 mx-4' : 'mx-4'}`} href="/aboutus">
                    About Us
                </Link>
                <Link className={`link ${pathname === '/blog' ? 'text-red-500 mx-4' : 'mx-4'}`} href="/blog">
                    Blog
                </Link>
                <Link className={`link ${pathname === '/contactus' ? 'text-red-500 mx-4' : 'mx-4'}`} href="/contactus">
                    Contact Us
                </Link>
            </ul>
            <DarkModeToggele  ></DarkModeToggele>
        </div>
    )
}

export default Navbar