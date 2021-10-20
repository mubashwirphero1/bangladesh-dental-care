import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 className="text-9xl text-center text-blue-600">404</h1>
            <h1 className="text-7xl text-center text-pink-600">Page not found !!!</h1>
            <br />
            <NavLink to='/' className='text-center text-2xl block text-blue-800 hover:underline'>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Go back to Home page
            </NavLink>
        </div>
    );
};

export default NotFound;