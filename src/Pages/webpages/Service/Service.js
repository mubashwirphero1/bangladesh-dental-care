import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const Service = () => {
    let { serviceId } = useParams;

    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://mubashwirphero1.github.io/jsonData/fakeAPI.json')
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [])
    const clickedService = service.filter(expectedService => expectedService.id === serviceId)
    const { imageSrc, imageAlt, name, description } = clickedService;
    return (
        <div className="md:grid grid-cols-2">
            <p className="text-center text-xl">Sorry !!! useParams() hook giving me undefined</p>
        </div>
    );
};

export default Service;