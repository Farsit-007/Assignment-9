/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from "react-helmet-async";
import { ScrollRestoration } from "react-router-dom";
const Register = () => {
    const { createUser, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const togglePasswordVisibility = () => {
        setShow(!show);
    };

    const onSubmit = (data) => {
        const { userEmail, userPassword, userName, userPhoto } = data;
        createUser(userEmail, userPassword)
            .then(result => {
                toast.success("User Created")
                profileUpdate(userName, userPhoto)
                    .then(() => {
                        navigate('/')
                        reset()
                    })
            })
            .catch(error => {
                if (error.message) {
                    toast.error("User already exists")
                }
            })
    }
    return (
        <div className="flex justify-center  items-center min-h-[700px] font-Mulish w-full  bg-cover" style={{ backgroundImage: `url(https://i.ibb.co/w0507tx/2151004024.jpg)` }}>
             <Helmet>
                <title>FaLi | Register</title>
            </Helmet>
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col md:w-[450px] animate__animated animate__zoomIn mt-8 p-10 pb-4 pt-2 rounded-xl text-white bg-opacity-5 backdrop-blur-3xl bg-transparent-white">
                    <div className="mb-4 text-center border-b-2">
                        <h1 className="my-2 text-3xl font-bold  ">Register your account</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-2">
                            <div>
                                <label htmlFor="name" className="block  mb-2 text-sm">Username</label>
                                <input type="text" placeholder="Enter your Name" className="w-full px-3 py-2 border outline-none rounded-md  bg-transparent  "
                                    {...register("userName")}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2   text-sm">Email address</label>
                                <input type="email" placeholder="Enter your email address" className="w-full px-3 py-2 border outline-none rounded-md border-gray-200 bg-transparent  "  {...register("userEmail",
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
                                <label htmlFor="photo" className="block   mb-2 text-sm">Photo url</label>
                                <input type="url" placeholder="Enter your photo url" className="w-full px-3 py-2 border outline-none rounded-md bg-transparent  " {...register("userPhoto")} />
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm ">Password</label>

                                </div>
                                <div className="relative">
                                    <input type={show ? "text" : "password"} placeholder="Enter your password" className="w-full outline-none px-3 py-2 border rounded-md border-gray-200 bg-transparent  "
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
                            <div className="flex items-center gap-2 ">
                                <input type="checkbox"  {...register("userTerms", { required: true })} />
                                <label className="block " htmlFor="term">Accept Term & Conditions</label>
                                {errors.userTerms && <small className="text-red-500">(Please accept out terms & conditions)</small>}
                            </div>

                        </div>
                        <div className="space-y-2">
                            <div>
                                <button type="submit" className="w-full px-8 py-2 font-bold rounded-md bg-blue-500 text-xl ">Register</button>
                            </div>
                            <p className="px-6 text-sm text-center text-gray-300">Already have an account?
                                <Link to="/login" className="hover:underline pl-1 text-red-600 font-extrabold">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <ScrollRestoration />
            <Toaster />
        </div>
    );
};

export default Register;