import { faG } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Signin = () => {

    const { siginUser, user, googleSignin } = useContext(AuthContext)

    const [error, setError] = useState('')
    const nevigate = useNavigate()

    let location  = useLocation()
    console.log(location);

    const from = location.state?.from?.pathname

    const handlerSignin = event => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        setError('')
        siginUser(email, password)
            .then(userCredential => {
                const user = userCredential.user
                console.log(user);
                form.reset()
                nevigate(from)
            }).catch(e => setError(e.message))

    }

    const handlerGoogleSignin = _ => {
        googleSignin()
    }

    return (
        <>
            {
                error && <div className='flex justify-center mt-5 rounded-md'>
                    <div className='bg-red bg-opacity-10 w-5/12'>
                        <p className='text-red font-bold p-5'>{error}</p>
                    </div>
                </div>
            }

            <div className='flex justify-center items-center lg:pt-20'>
                <div className='bg-secondary bg-opacity-30 rounded-md'>
                    <div className='border border-border-clr rounded-md p-10 bg-white ml-3 -mt-3 mb-3'>
                        <h3 className='text-4xl text-center'>Signin</h3>

                        <form onSubmit={handlerSignin}>
                            <label className='inline-block mt-7' htmlFor="Email">Email</label>
                            <input className='border block lg:w-[415px] py-2 px-3 focus:border-secondary focus:outline-none rounded-md border-border-clr' type="email" name='email' required />
                            <label className='inline-block mt-5' htmlFor="Password">Password</label>
                            <input className='border block lg:w-[415px] py-2 px-3 focus:border-secondary focus:outline-none rounded-md border-border-clr' type="password" name='password' />

                            <input className='bg-secondary w-full py-3 mt-11 rounded-md bg-opacity-40 text-xl cursor-pointer' type="submit" value="Sign In" />
                        </form>

                        <p className='text-center pt-2'>New to Ema-john? <Link to='/signup' className='text-secondary'>Create New Account</Link></p>

                        <div className='flex gap-5 items-center mt-8'>
                            <hr className='border-1 border-border-clr w-5/12' />
                            <p className='text-text-secondary'>or</p>
                            <hr className='border-1 border-border-clr w-5/12' />
                        </div>

                        <button onClick={handlerGoogleSignin} className='w-full border border-border-clr p-3 mt-11 rounded-md bg-opacity-40 flex justify-center items-center hover:bg-secondary hover:bg-opacity-50'>
                            <FontAwesomeIcon className='text-2xl mr-2 text-red' icon={faG} /><span>Continue with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Signin;