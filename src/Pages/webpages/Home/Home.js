import { faArrowAltCircleRight, faShieldVirus, faTooth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'

const Home = () => {
    // An array for data
    const data = [
        {
            id: 1,
            name: 'Dental Services',
            href: '/service',
            imageSrc: 'http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/home-services.jpg',
            imageAlt: "Dental Services",
            description: "Globally harness multimedia based collaboration and idea haring with backend data.",
        },
        {
            id: "2",
            name: "Dental Implants",
            href: "/service",
            imageSrc: "http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/home-services-2.jpg",
            imageAlt: "Dental Implants",
            description: "Dramatically disseminate standardized metrics after resource-leveling processes.",
        },
        {
            id: "3",
            name: "Surgery",
            href: "/service",
            imageSrc: "http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/home-services-3.jpg",
            imageAlt: "Surgery",
            description: "Proactively fabricate one-to-one materials via effective e-business services processes.",
        },
        {
            id: "4",
            name: "Teeth Whitening",
            href: "/service",
            imageSrc: "http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/home-services-4.jpg",
            imageAlt: "Teeth Whitening",
            description: "Distinctively re-engineer revolutionary meta-services and premium architectures.",
        }
    ]
    return (
        <>
            {/* Banner area */}
            <div className="header-banner-area py-40">
                <div className="p-10 h-auto">
                    <h3 className="text-4xl text-pink-600 font-semibold">Care for your smile</h3>
                    <h1 className="text-5xl text-blue-700 font-semibold">Personalize and comfortable</h1>
                    <div className="md:grid grid-cols-2 gap-2 mt-5">
                        <div className="md:flex items-center">
                            <FontAwesomeIcon className="text-3xl text-blue-400" icon={faTooth} />
                            &nbsp;
                            <div>
                                <h4 className="text-2xl text-blue-500">Whitening</h4>
                                <p>Completely iterate covalent strategic teeth whitening.</p>
                            </div>
                        </div>
                        <div className="md:flex items-center">
                            <FontAwesomeIcon className="text-3xl text-blue-400" icon={faShieldVirus} />
                            &nbsp;
                            <div>
                                <h4 className="text-2xl text-blue-500">Full protection</h4>
                                <p>Make your teeth stronger and advice the best equipment for teeth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service part */}
            <div className="p-4 bg-gray-200">
                <div className="md:flex justify-between">
                    <div className="font-bold">
                        <h3 className="md:2xl lg:4xl sm:xl text-pink-600">
                            Committed to
                        </h3>
                        <h1 className="md:text-2xl lg:text-5xl sm:text-xl text-blue-600"> Excellence</h1>
                    </div>
                    <NavLink className="rounded-sm py-2 px-4 flex items-center justify-center bg-blue-600 text-white" to="/service">View all services &nbsp; <FontAwesomeIcon className="text-pink-500 sm:text-xl md:text-2xl" icon={faArrowAltCircleRight} /></NavLink>
                </div>

                {/* data */}
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data.map((product) => (
                        <div key={product.id} className="group relative bg-pink-400 font-semibold text-white rounded-sm">
                            <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4">
                                <div className="p-4">
                                    <h3 className="md:text-2xl sm:text-sm">
                                        <NavLink to={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </NavLink>
                                    </h3>
                                    <p className="text-sm">{product.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Denticare specialized team */}
            <div className="team-banner p-4 py-40">
                <div className="text-justify font-semibold">
                    <h3 className="sm:text-xl md:text-2xl text-pink-600">DentiCare</h3>
                    <h1 className="sm:text-xl md:text-3xl lg:text-5xl text-blue-700">Specialized Team
                    </h1>
                    <br />
                    <p className="sm:text-xl md:text-2xl font-normal">
                        <q>We are a team of dentists, hygienists and receptionists who work together to ensure that you receive the best treatment that you require at a very time that suits you.</q>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Home;