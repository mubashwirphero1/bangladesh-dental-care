import React from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhoneAlt, faUserNurse } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const navigation = [
        { name: 'Home', href: '/home', current: false },
        { name: 'Service', href: '/service', current: false },
        { name: 'About Us', href: '/about', current: false },
        { name: 'Contact Us', href: '/contact', current: false },
    ]
    const { user, logOut, userName } = useAuth()
    return (
        <>
            {/* Navbar top section */}
            <div className="mx-4 p-4 lg:flex justify-between">
                {/* Header */}
                <NavLink to="/">
                    <img className="w-1/4" src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2019/12/denticare-logo.png" alt="" />
                </NavLink>
                {/* Time and Phone */}
                <div className='md:grid grid-cols-2 gap-4'>
                    <p>
                        <FontAwesomeIcon className="md:text-2xl sm:text-xl text-blue-500" icon={faPhoneAlt} />
                        &nbsp;&nbsp;
                        <span className="md:text-3xl sm:text-xl">415-205-5550</span> <br />
                        <span className="text-sm block text-center">24/7 Emergency Phone</span>
                    </p>
                    <p>
                        <FontAwesomeIcon className="md:text-2xl sm:text-xl text-blue-500" icon={faClock} />
                        &nbsp;&nbsp;
                        <span className="md:text-3xl sm:text-xl">Saturday - Thursday</span> <br />
                        <span className="text-sm block text-center">9AM - 9PM</span>
                    </p>
                </div>
            </div>
            {/* Navbar section */}
            <Disclosure as="nav" className="bg-blue-600 sticky">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4">
                                            <NavLink to='/home' className='text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Home</NavLink>
                                            <NavLink to='/service' className='text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Service</NavLink>
                                            <NavLink to='/about' className='text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>About Us</NavLink>
                                            <NavLink to='/contact' className='text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Contact Us</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    {userName ? <p className='text-gray-100 text-xl'>{userName}</p> : <p></p>}
                                    {/* Profile dropdown */}
                                    {user?.email ? <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">Open user menu</span>
                                                <FontAwesomeIcon className="text-2xl text-white" icon={faUserNurse} />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button onClick={logOut} className='block px-4 py-2 text-sm text-gray-700'>Sign out</button>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu> : <div className='flex'>
                                        <NavLink to="/login" className="text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign in</NavLink>
                                        <NavLink to="/register" className="text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Register</NavLink></div>}
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        className='text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
}
export default Header;