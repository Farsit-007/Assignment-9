import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowForward } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay,Navigation } from 'swiper/modules';
import '../Banner/Banner.css'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import 'animate.css';
import { FaGithub } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Banner = () => {
    
    
    return (
        <div className='z-20 font-Mulish'>
            <Swiper navigation={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay,Navigation]}
                loop={true}
                className="mySwiper"
                >
                <SwiperSlide>

                    <div className='w-full flex justify-start items-center h-screen bg-cover' style={{ backgroundImage: `url(https://i.ibb.co/Rvxp3dD/minimalistic-cabin-blending-into-environment.jpg)` }} >
                        <div className='w-[80%] mx-auto flex flex-col-reverse md:flex-row gap-12 items-center'>

                            <div className='flex md:flex-col gap-6 animate__animated animate__fadeIn  text-white'>
                                <button ><FaFacebook size={25} /></button>
                                <button><FaGoogle size={25} /></button>
                                <button><FaGithub size={25} /></button>
                            </div>

                            <div>
                                <div className='py-4 animate__animated animate__fadeInDown'>
                                    <h1 className='text-4xl md:text-5xl text-white font-extrabold'>Family Vila</h1>
                                </div>
                                <div  className='animate__animated animate__fadeInRight  md:w-[520px] md:h-36 p-4  rounded-xl bg-opacity-5 backdrop-blur-3xl bg-transparent-white'>
                                    <p className='text-white ' >A family villa provides a spacious and private living environment suitable for households. These residences often include multiple bedrooms, ample living space, and outdoor areas like gardens or pools...</p>
                                </div>
                                <Link  to={'/data/009'}><button  className='border mt-5 rounded-lg bg-transparent animate__animated  animate__fadeInLeft border-white py-2 px-4 font-bold text-white flex gap-1 items-center hover:bg-slate-700 transition-all duration-1000'>More Details <IoIosArrowForward size={25} /></button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className='w-full flex justify-start items-center h-screen bg-cover' style={{ backgroundImage: `url(https://i.ibb.co/db3ytzd/2.jpg)` }} >
                        <div className='w-[80%] mx-auto flex flex-col-reverse md:flex-row gap-12 items-center'>

                            <div className='flex md:flex-col gap-6 animate__animated animate__fadeIn  text-white'>
                                <button><FaFacebook size={25} /></button>
                                <button><FaGoogle size={25} /></button>
                                <button><FaGithub size={25} /></button>
                            </div>

                            <div>
                                <div className='py-4'>
                                    <h1 className='text-4xl md:text-5xl animate__animated animate__fadeInDown text-white  font-extrabold'>Apartment</h1>
                                </div>
                                <div  className='animate__animated animate__fadeInRight md:w-[520px] md:h-36 p-4  rounded-xl bg-opacity-5 backdrop-blur-3xl bg-transparent-white'>
                                    <p className='text-white ' >Modern apartment living combines sleek design, smart technology, and comfort. These spaces feature open layouts, high-end finishes, and amenities like smart home systems and energy-efficient appliances.....</p>
                                </div>
                                <Link to={'/data/003'}><button className='border animate__animated  animate__fadeInLeft mt-5 rounded-lg bg-transparent border-white py-2 px-4 font-bold text-white flex gap-1 items-center hover:bg-slate-700 transition-all duration-1000'>More Details <IoIosArrowForward size={25} /></button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className='w-full flex justify-start items-center h-screen bg-cover' style={{ backgroundImage: `url(https://i.ibb.co/8gKd2RK/3d-rendering-house-model.jpg)` }} >
                        <div className='w-[80%] mx-auto flex flex-col-reverse md:flex-row gap-12 items-center'>

                            <div className='flex md:flex-col gap-6 animate__animated animate__fadeIn  text-white'>
                                <button><FaFacebook size={25} /></button>
                                <button><FaGoogle size={25} /></button>
                                <button><FaGithub size={25} /></button>
                            </div>

                            <div>
                                <div className='py-4 animate__animated animate__fadeInDown'>
                                    <h1 className='text-4xl md:text-5xl text-white  font-extrabold'>Townhouse</h1>
                                </div>
                                <div  className='animate__animated animate__fadeInRight md:w-[520px] animate__animated animate__backInLeft md:h-36 p-4  rounded-xl bg-opacity-5 backdrop-blur-3xl bg-transparent-white'>
                                    <p className='text-white ' >Townhouses offer a blend of convenience and community living. These multi-story homes typically feature modern layouts, often with open-plan living spaces and private outdoor areas like patios or rooftops.... </p>
                                </div>
                                <Link to={'/data/002'}><button className='animate__animated  animate__fadeInLeft border mt-5 rounded-lg bg-transparent border-white py-2 px-4 font-bold text-white flex gap-1 items-center hover:bg-slate-700 transition-all duration-1000'>More Details <IoIosArrowForward size={25} /></button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;