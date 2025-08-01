import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    
    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message) 
        }
    }

    return (
        <div className="relative flex items-center justify-center h-screen overflow-hidden">
           
         
            <div className="relative z-10 mx-auto w-full max-w-lg bg-gray-100 backdrop-blur-sm rounded-xl p-8 border border-black/10 shadow-xl">
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[150px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Welcome!!</h2>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    <br />
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline  hover:text-blue-600 "
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(create)}>
                    <br />
                    <div className='space-y-5'>
                        <Input 
                            label="Full name:"
                            placeholder='Enter your full name'
                            className="bg-white border-white text-black placeholder-black focus:border-blue-300 focus:ring-blue-300/30"
                            {...register("name", {
                                required: true,
                            })} 
                        />
                        <Input
                            label="Email:"
                            placeholder='Enter your email'
                            type='email'
                            className="bg-white border-white text-black placeholder-black focus:border-blue-300 focus:ring-blue-300/30"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) => /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(value) || "Email must be a valid address"
                                }
                            })}
                        />
                        
                        <Input
                            label="Password" 
                            type='password'
                            placeholder='Enter your password here'
                            className="bg-white border-white text-black placeholder-black focus:border-blue-300 focus:ring-blue-300/30"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
                        >
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup