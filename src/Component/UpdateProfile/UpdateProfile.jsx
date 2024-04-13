import Lottie from 'react-lottie-player';
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import lottieJson from '../../assets/Animation - 1712776024840.json'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
const UpdateProfile = () => {
    const navigate = useNavigate();
    const { profileUpdate } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { userName, userPhoto } = data;
        profileUpdate(userName, userPhoto)
            .then(() => {
                toast.success("User Info Updated")
                setTimeout(() => {
                    navigate('/userprofile')
                    reset()
                }, 2000);

            })
    }
    return (
        <div className="flex justify-center pt-12 items-center min-h-screen font-Mulish w-full h-[700px] bg-cover" style={{ backgroundImage: `url(https://i.ibb.co/Rvxp3dD/minimalistic-cabin-blending-into-environment.jpg)` }}>
             <Helmet>
                <title>FaLa | Update Profile</title>
            </Helmet>
            <div className="md:w-[700px] p-8 bg-opacity-5 backdrop-blur-3xl bg-transparent-white rounded-xl sm:flex sm:items-center sm:space-x-6">
                <div className="flex-shrink-0 w-full mb-6  md:w-[50%] sm:mb-0">
                    <Lottie
                        loop
                        animationData={lottieJson}
                        play
                        style={{ width: 250, height: 250 }}
                    />
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h1 className="text-xl font-semibold text-white">Wanna Change Information</h1>

                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-2">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm  text-white">Username</label>
                                <input type="text" placeholder="Enter your Name" className="w-full  text-white px-3 outline-none py-2 border rounded-md  bg-transparent "
                                    {...register("userName", { required: true })}

                                />
                                {errors.userName && <small className='text-red-500'>Please give your name</small>}
                            </div>

                            <div>
                                <label htmlFor="photo" className="block  text-white mb-2 text-sm">Photo url</label>
                                <input type="url" placeholder="Enter your photo url" className="w-full px-3 py-2 border outline-none rounded-md bg-transparent " {...register("userPhoto", { required: true })} />
                                {errors.userPhoto && <small className='text-red-500'>Please give your profile URL</small>}
                            </div>

                        </div>
                        <div className="space-y-2">
                            <div>
                                <button type="submit" className="w-full border px-8 py-3 font-semibold rounded-md bg-transparent text-white">Update</button>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default UpdateProfile;