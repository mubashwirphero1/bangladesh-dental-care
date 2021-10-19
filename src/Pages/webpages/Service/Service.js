import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const Service = () => {
    const { serviceId } = useParams;

    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://mubashwirphero1.github.io/jsonData/fakeAPI.json')
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [])
    /* const clickedService = service.filter(expectedService => expectedService.id === { param })
    const { imageSrc, imageAlt, name, description } = clickedService; */
    return (
        <div className="">
            <p className="text-center text-xl">Sorry !!! useParams() hook giving me undefined</p>
            <p className="text-center text-xl">id : {serviceId}</p>
        </div>
    );
};

export default Service;