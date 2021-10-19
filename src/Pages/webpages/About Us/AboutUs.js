import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
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
        <div>
            {/* Banner area */}
            <div className="banner-area py-40 px-4">
                <h3 className="sm:text-xl md:text-2xl text-pink-600">We Would Love To</h3>
                <h1 className="sm:text-xl md:text-3xl lg:text-5xl text-blue-700">See You Smile</h1>
            </div>

            {/* Service part */}
            <div className="p-4 bg-gray-200">

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

            {/* Services in number */}
            <div className="mt-5 p-10">
                <h3 className="sm:text-xl font-semibold md:text-2xl text-pink-600">Our Dental Service</h3>
                <h1 className="sm:text-xl font-bold md:text-3xl lg:text-5xl text-blue-700">In Numbers</h1>
                <br />
                <p className="text-lg">Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts for change. Seamlessly underwhelm optimal testing processes.</p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
                    <div className=" divide-y divide-pink-400">
                        <p></p>
                        <p className="font-light text-xl divide-y divide-pink-400 py-16"><q>DentiCare was founded in the first place to create absolutely beautiful smiles.</q></p>
                        <p></p>
                    </div>
                    <p className="text-lg">Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities.
                        <br />
                        Appropriately communicate one-to-one technology after plug-and-play networks. Quickly aggregate B2B users and worldwide potentialities.</p>
                    <p className="text-lg">Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service. Professionally fashion wireless leadership.
                        <br />
                        Energistically myocardinate clicks-and-mortar testing procedures whereas next-generation manufactured services, appropriately implement visionary readiness.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;