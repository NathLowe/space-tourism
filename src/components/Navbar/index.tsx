"use client"

import React, { useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useDisclosure } from '@mantine/hooks';
import { usePathname } from 'next/navigation'

import { motion } from 'framer-motion'

import logo from '@/assets/shared/logo.svg'
import hamburger from '@/assets/shared/icon-hamburger.svg'
import close from '@/assets/shared/icon-close.svg'

import './index.css'


// Data
const pages = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Destination',
        href: '/destination',
    },
    {
        title: 'Crew',
        href: '/crew',
    },
    {
        title: 'Technology',
        href: '/technology',
    },
]


export default function Navbar() {
    const [ opened, {toggle} ] = useDisclosure()
    const path = usePathname()

    const isActive = useCallback((href:string)=>path===href,[path])

  return (
    <header className={`relative z-30 flex justify-between items-center px-6 md:px-0 md:pl-10 lg:pt-10 group ${opened && 'menu-open'}`} >
        <Image src={logo} alt="Space logo" className='my-6 w-10 h-10 md:w-12 md:h-12' />
        <button onClick={toggle} className='relative z-20 w-6 h-6 md:hidden' >
            <Image src={hamburger} alt="Icon Menu Open" className='transition group-[.menu-open]:opacity-0 absolute top-1/2 right-0 -translate-y-1/2 w-full h-full'/>
            <Image src={close} alt="Icon Menu Close" className='group-[:not(.menu-open)]:opacity-0 transition absolute top-1/2 right-0 -translate-y-1/2 w-full h-full'/>
        </button>
        <div className="bar grow hidden lg:block h-0.5 bg-white/60 translate-x-8 relative z-10"></div>
        <ul className="list-none transition backdrop-blur-xl translate-x-full fixed top-0 right-0 h-screen w-64 z-0 pt-28 pl-8 group-[.menu-open]:translate-x-0
            md:relative md:h-24 md:w-fit md:px-12 md:pt-0 md:translate-x-0 md:flex md:justify-center md:items-center md:gap-x-12
            lg:min-w-[50vw] ">
            {
                pages.map(({title,href}, index) => (
                    <Link onClick={toggle} key={index} href={href} className='nav-text uppercase relative text-white md:h-full' >
                        <li className={`flex items-center mb-12 w-full transition border-r-2 border-transparent gap-x-3 [&:not(.active)]:hover:border-white/50 [&.active]:border-white
                            md:mb-0 md:w-fit md:border-r-0 md:border-b-4 md:h-full ${isActive(href) && 'active'} `}>
                            <span className="block font-bold min-w-[20px] md:hidden">0{index}</span>
                            <span className="block">{title}</span>
                            {isActive(href) &&
                                <motion.span layoutId="underline" className='absolute bottom-0 right-0 h-full w-1 md:w-full md:h-1 bg-white' />}
                        </li>
                    </Link>
                ))
            }
        </ul>
    </header>
  )
}
