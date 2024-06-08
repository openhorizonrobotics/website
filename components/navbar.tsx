"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import DarkModeToggle from './ToggleDark'
import styles from './navbar.module.css'

function Navbar() {
    const pathname = usePathname();
    const linkClasses = (path: string) => `${styles.labels} link font-semibold flex text-center ${pathname === path ? 'text-orange-600' : ''}`;

    return (
        <div className='flex justify-between items-center my-6 px-4'>
            <div className='flex-grow flex justify-center'>
                <ul className='flex'>
                    <li>
                        <Link className={linkClasses('/')} href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={linkClasses('/aboutus')} href="/aboutus">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link className={linkClasses('/contactus')} href="/contactus">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link className={linkClasses('/blog')} href="/blog">
                            Blog
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='ml-auto mr-4'>
                <DarkModeToggle />
            </div>
        </div>
    )
}

export default Navbar
