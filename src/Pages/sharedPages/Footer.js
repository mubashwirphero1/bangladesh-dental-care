import { faGlobe, faMailBulk, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom';
import React from 'react';
const Footer = () => {
    return (
        <>
            {/* Footer top section */}
            <div className="bg-gray-200 mt-11 p-10 grid grid-cols-4 gap-x-8">
                <div>
                    <h1 className="text-3xl font-bold text-pink-600"><span className="text-blue-700">Denti</span>Care</h1>
                    <br /><br />
                    <p>A team of dentists working to ensure you receive the best treatment.</p>
                    <br /><br />
                    <p>
                        <FontAwesomeIcon className="text-xl text-blue-900" icon={faPhoneAlt} />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        415-205-5550
                    </p>
                    <br />
                    <p>
                        <FontAwesomeIcon className="text-xl text-blue-900" icon={faMailBulk} />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        emergency@denticare.com
                    </p>
                    <br />
                    <p>
                        <FontAwesomeIcon className="text-xl text-blue-900" icon={faGlobe} />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        web.denticarebangladesh.com
                    </p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-blue-700">About</h1>
                    <br /><br />
                    <p>A team of dentists working to ensure you receive the best treatment.</p>
                    <br /><br />
                    <p>Our Dental Team</p>
                    <br />
                    <p>Solutions</p>
                    <br />
                    <p>Dental Services</p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-blue-700">Our Awards</h1>
                    <br />
                    <p className="text-center">
                        DentiCare is a multiple award winner
                        <br /><br />
                        <span className="text-xl">Best Patient Care <span className="text-blue-600 font-bold">2021</span></span>
                        <br /><br />
                        <span className="text-xl">Best Team <span className="text-blue-600 font-bold">2020</span></span>
                        <br /><br />
                        <span className="text-xl">Best Quality Treatment <span className="text-blue-600 font-bold">2019</span></span>
                        <br /><br />
                        <span className="text-xl">Best Patient Care <span className="text-blue-600 font-bold">2018</span></span>
                    </p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-blue-700">Social Networks</h1>
                    <br /><br />
                    <p>Visit DentiCare on these social links and connect with us. Make sure to follow our accounts for regular updates.</p>
                    <br />
                </div>
            </div>

            {/* Footer copyright section */}
            <Disclosure as="nav" className="bg-blue-600">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <h1 className="text-xl font-bold text-white">&copy; Copyright 2021 by DentiCare. All rights reserved.</h1>
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
                                            <NavLink to='/home' className='text-gray-100 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Home</NavLink>
                                            <NavLink to='/service' className='text-gray-100 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Services</NavLink>
                                            <NavLink to='/about' className='text-gray-100 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>About Us</NavLink>
                                            <NavLink to='/contact' className='text-gray-100 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Contact Us</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
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
                                                        <button className='block px-4 py-2 text-sm text-gray-700'>Sign out</button>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <NavLink to='/home' className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Home</NavLink>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
};

export default Footer;