/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from "react-helmet-async";
const Login = () => {
    const { loginUser, facebokLogin, googleSign, githubLogin } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    const togglePasswordVisibility = () => {
        setShow(!show);
    };

    const onSubmit = (data) => {
        const { userEmail, userPassword } = data;
        loginUser(userEmail, userPassword)
            .then(result => {
                toast.success("Welcome to FL Villa")
                navigate(location.state ? location.state : '/')
                reset()
            })
            .catch(error => {
                if (error.message) {
                    toast.error("Matched no email/password")
                    reset()
                }
            })
    }

    const handleGoogle = () => {
        googleSign()
            .then(result => {
                toast.success("Welcome to FL Villa")
                setTimeout(() => {
                    navigate(location.state ? location.state : '/')
                }, 1000);
                
            })
            .catch(error => {
                if (error.message) {
                    toast.error("You have already sign in with same email")
                }
            })
    }

    const handleFacebook = () => {
        facebokLogin()
            .then(result => {
                toast.success("Welcome to FL Villa")
                setTimeout(() => {
                    navigate(location.state ? location.state : '/')
                }, 1000);

            })
            .catch(error => {
                if (error.message) {
                    toast.error("You have already sign in with same email")
                }
            })
    }
    const handleGithub = () => {
        githubLogin()
        
            .then(result => {
                toast.success("Welcome to FL Villa")
                setTimeout(() => {
                    navigate(location.state ? location.state : '/')
                }, 1000);
            })
            .catch(error => {
                if (error.message) {
                    toast.error("You have already sign in with same email");
                }
            })
    }
    return (
        <div className="font-Mulish">
             <Helmet>
                <title>FaLa | Login</title>
            </Helmet>
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col bg-white  md:w-[450px] p-10 pb-4 pt-2 rounded-xl border-2 border-blue-500 ">
                    <div className="mb-4 text-center border-b-2">
                        <h1 className="my-2 text-3xl font-bold">Login</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-2">

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email address" className="w-full px-3 py-2 border rounded-md border-gray-200 bg-gray-200 " {...register("userEmail",
                                    {
                                        required: true,
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[cC][oO][mM]$/,
                                            message: "Invalid Email"
                                        }
                                    }
                                )} />
                                {errors.userEmail && <small className="text-red-500">{errors.userEmail.message}</small>}

                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm">Password</label>

                                </div>
                                <div className="relative">
                                    <input type={show ? "text" : "password"} placeholder="Enter your password" className="w-full px-3 py-2 border rounded-md border-gray-200 bg-gray-200 "
                                        {...register("userPassword",
                                            {
                                                required: true,
                                                minLength: {
                                                    value: 6,
                                                    message: "Password must be at least 6 characters"
                                                },
                                                pattern: {
                                                    value: /^(?=.*[a-z])(?=.*[A-Z])/,
                                                    message: "At least one lowercase letter and one uppercase letter"
                                                }
                                            }
                                        )}
                                    />
                                    <span onClick={togglePasswordVisibility} className="absolute right-[2%] top-[31%]">
                                        {!show ? <IoEyeOff size={20} /> : <IoEye size={20} />}
                                    </span>

                                </div>
                                {errors.userPassword && <small className="text-red-500">{errors.userPassword.message}</small>}
                            </div>


                        </div>
                        <div className="pt-1">
                            <div>
                                <button type="submit" className="w-full px-8 py-2 font-semibold rounded-md bg-blue-500  text-xl text-white">Login</button>
                            </div>

                        </div>
                    </form>

                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handleGoogle} className="p-3 rounded-sm">
                            <FaGoogle size={25} />
                        </button>
                        <button onClick={handleFacebook} className="p-3 rounded-sm">
                            <FaFacebookSquare size={30} />
                        </button>
                        <button onClick={handleGithub} className="p-3 rounded-sm">
                            <FaGithub size={30} />
                        </button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-400">Already have an account?
                        <Link to="/register" className="hover:underline text-red-600">Register</Link>.
                    </p>
                </div>
            </div>
            <Toaster />
        </div>
    );
};


export default Login;