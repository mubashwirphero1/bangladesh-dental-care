import { LockClosedIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
    const { signInUsingGoogle, signInUsingEmailAndPassword, error } = useAuth();

    // Get user name
    const [name, setName] = useState('');
    const getUserName = e => {
        if (e.target.value === '') {
            return;
        }
        else {
            setName(e.target.value)
        }
    }

    // Get user email
    const [email, setEmail] = useState('')
    const getUserEmail = e => {
        setEmail(e.target.value)
    }

    // Get user password
    const [password, setPassword] = useState('');
    const getUserPassword = e => {
        setPassword(e.target.value)
    }

    // Handle user sign in
    const handleSignIn = () => {
        document.getElementById('user-name').value = '';
        document.getElementById('email-address').value = '';
        document.getElementById('password').value = '';
        return signInUsingEmailAndPassword(name, email, password)
    }
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-auto w-1/2"
                            src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2019/12/denticare-logo.png"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or, don't have any account ?{' '}
                            <NavLink to="/register" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">
                                Register
                            </NavLink>
                        </p>
                    </div>
                    <div className="mt-8 space-y-6">
                        {error ? <p className='text-red-600 text-xl'>{error}</p> : <p></p>}
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Your name
                                </label>
                                <input
                                    onBlur={getUserName}
                                    id="user-name"
                                    name="nme"
                                    type="name"
                                    autoComplete="name"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    onBlur={getUserEmail}
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    onBlur={getUserPassword}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={handleSignIn}
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Sign in
                            </button>
                        </div>
                        <p className="text-xl text-center">----------OR----------</p>
                        <button
                            onClick={signInUsingGoogle}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign in with GOOGLE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;