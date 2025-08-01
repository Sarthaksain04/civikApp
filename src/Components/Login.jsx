import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
    
    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="relative w-full h-screen overflow-hidden">

        
            <div className="relative z-15 flex items-center justify-center w-full h-screen p-4">
               
                <div className="mx-auto w-full max-w-lg bg-gray-100 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                    
                    <div className="mb-6 flex justify-center">
                        <span className="inline-block w-full max-w-[150px]">
                            <Logo width="100%" />
                        </span>
                    </div>
                           <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;  
 
                        <Link
                            to="/signup"
                            className="font-medium text-gray-500 transition-all duration-200 hover:text-blue-600 hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                    
                    {error && (
                        <p className="text-red-400 mt-4 text-center bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                            {error}
                        </p>
                    )}
                    
                    <form onSubmit={handleSubmit(login)} className="mt-8">
                        <div className="space-y-6">
                            <div className="transform transition-all duration-200 ">
                                <Input
                                    label="Email:"
                                    placeholder="Enter your email"
                                    type="email"
                                    className="bg-white border-white text-black placeholder-black focus:border-blue-300 focus:ring-blue-300/30"
                                    {...register("email", {
                                        required: true,
                                        validate: {
                                            matchPattern: (value) =>
                                                /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(value) ||
                                                "Email must be a valid address"
                                        }
                                    })}
                                />
                            </div>
                            
                            <div className="transform transition-all duration-200 ">
                                <Input
                                    label="Password:"
                                    type="password"
                                    placeholder="Enter your password here"
                                    className="bg-white border-white text-black placeholder-black focus:border-blue-300 focus:ring-blue-300/30"
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                            </div>
                            
                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
                            >
                                Sign in
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login