import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./SErvices.css"

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://mubashwirphero1.github.io/jsonData/fakeAPI.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <>
            {/* Banner area */}
            <div className="banner-area py-40 px-4">
                <h3 className="sm:text-xl md:text-2xl text-pink-600">Dentistry Excellence</h3>
                <h1 className="sm:text-xl md:text-3xl lg:text-5xl text-blue-700">Exceptional Care</h1>
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

            {/* Services area */}
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 p-4">
                {services.map((service) => (
                    <div key={service.id} className="group relative bg-pink-400 font-semibold text-white rounded-sm">
                        <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                                src={service.imageSrc}
                                alt={service.imageAlt}
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                        </div>
                        <div className="mt-4">
                            <div className="p-4">
                                <h3 className="md:text-2xl sm:text-sm">
                                    <NavLink to={"/service/" + service.id}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {service.name}
                                    </NavLink>
                                </h3>
                                <p className="text-sm">{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Services;