import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const Service = () => {
    const { serviceId } = useParams();

    const bookedAppointment = (e) => {
        e.target.innerText = 'Booked';
    }

    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://mubashwirphero1.github.io/jsonData/fakeAPI.json')
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [])
    const expectedService = service.find(i => i.id == serviceId);
    return (
        <div className="md:grid grid-cols-2 gap-4 p-4">
            <img className='w-100' src={expectedService?.imageSrc} alt={expectedService?.imageAlt} />
            <div>
                <h1 className="sm:text-xl md:text-3xl lg:text-5xl text-gray-700">{expectedService?.name}</h1>
                <p className='sm:text-sm md:text-xl text-gray-700 mt-5'>{expectedService?.description}</p>
                <div className="mt-8 p-6 bg-blue-600 text-gray-100  rounded-xl">
                    <div className="flex my-5 justify-between items-center hover:text-white ">
                        <p className="sm">Saturday</p>
                        <p className="sm text-gray-300">9am-9pm</p>
                        <button onClick={bookedAppointment} className="px-6 transition duration-500 py-2 rounded-xl bg-blue-600 hover:bg-blue-800">Book Appointment <FontAwesomeIcon icon={faClock} /></button>
                    </div>
                    <hr />
                    <div className="flex my-5 justify-between items-center hover:text-white ">
                        <p className="sm">Sunday</p>
                        <p className="sm text-gray-300">9am-9pm</p>
                        <button onClick={bookedAppointment} className="px-6 transition duration-500 py-2 rounded-xl bg-blue-600 hover:bg-blue-800">Book Appointment <FontAwesomeIcon icon={faClock} /></button>
                    </div>
                    <hr />
                    <div className="flex my-5 justify-between items-center hover:text-white ">
                        <p className="sm">Monday</p>
                        <p className="sm text-gray-300">9am-9pm</p>
                        <button onClick={bookedAppointment} className="px-6 transition duration-500 py-2 rounded-xl bg-blue-600 hover:bg-blue-800">Book Appointment <FontAwesomeIcon icon={faClock} /></button>
                    </div>
                    <hr />
                    <div className="flex my-5 justify-between items-center hover:text-white ">
                        <p className="sm">Tuesday</p>
                        <p className="sm text-gray-300">9am-9pm</p>
                        <button onClick={bookedAppointment} className="px-6 transition duration-500 py-2 rounded-xl bg-blue-600 hover:bg-blue-800">Book Appointment <FontAwesomeIcon icon={faClock} /></button>
                    </div>
                    <hr />
                    <div className="flex my-5 justify-between items-center hover:text-white ">
                        <p className="sm">Thursday</p>
                        <p className="sm text-gray-300">9am-9pm</p>
                        <button onClick={bookedAppointment} className="px-6 transition duration-500 py-2 rounded-xl bg-blue-600 hover:bg-blue-800">Book Appointment <FontAwesomeIcon icon={faClock} /></button>
                    </div>
                    <hr />
                    <div className="flex my-5 justify-between items-center hover:text-white ">
                        <p className="sm">Friday</p>
                        <p className="sm text-gray-300">Closed</p>
                        <button onClick={bookedAppointment} className="px-6 transition duration-500 py-2 rounded-xl bg-blue-600 hover:bg-blue-800"></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;