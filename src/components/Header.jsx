import React from 'react'
import {Button, Navbar, TextInput} from "flowbite-react"
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'

export default function Header() {
    const path = useLocation().pathname; // Get the current path
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-medium dark:text-white'>
            <span className='px-1 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Kal</span>
            Shield
        </Link>
        <form>
            <TextInput
                id="search"
                type="search"
                placeholder="Search"
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
                required
            />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray'pill>
            <AiOutlineSearch/>
        </Button>
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10' color='gray' pill>
                <FaMoon/>
            </Button>
            <Link to="/sign-in">
                <Button className='w-18 h-10' gradientDuoTone='purpleToPink' pill>
                    Sign In
                </Button>
            </Link>
            <Navbar.Toggle />
        </div>
            <Navbar.Collapse>
                <Navbar.Link active={path === '/'} as={'div'}>
                    <Link to='/'>
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/about'} as={'div'}>
                    <Link to='/about'>
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/projects'} as={'div'}>
                    <Link to='/projects'>
                        Projects
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/dashboard'} as={'div'}>
                    <Link to='/dashboard'>
                        Dashboard
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
    </Navbar>
  )
}
