import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import Bganimated from '../Animation/Bganimated' // Import your animated background component

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
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
               <Bganimated 
                               color={[1, 1, 1]}
                                mouseReact={false} 
                                amplitude={0.1} 
                                speed={0.05} 
                                />
            </div>
            
            {/* Signup Form */}
            <div className="relative z-10 mx-auto w-full max-w-lg bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-black/10 shadow-xl">
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[150px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Welcome</h2>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    <br />
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
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
                            {...register("name", {
                                required: true,
                            })} 
                        />
                        <Input
                            label="Email:"
                            placeholder='Enter your email'
                            type='email'
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
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button
                            type="submit"
                            className='w-full'
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