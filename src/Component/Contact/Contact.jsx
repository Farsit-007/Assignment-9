import { Helmet } from "react-helmet-async";
import { ScrollRestoration } from "react-router-dom";
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const nameref = useRef();
    const emailref = useRef();
    const msgref = useRef();
    
    const handleSubmit = e =>{
        e.preventDefault();
        const data = {
            Name : nameref.current.value,
            Email : emailref.current.value,
            Msg : msgref.current.value
        }
        toast.success("Thanks for contact with us")
        console.log(data);
        nameref.current.value = '';
        emailref.current.value = '';
        msgref.current.value = '';
    }
   
    return (
        <div className="font-Mulish">
            <Helmet>
                <title>FaLi VilLa | Contact Us</title>
            </Helmet>

            <div className=" bg-cover object-cover bg-slate-50" style={{ backgroundImage: `url(https://i.ibb.co/PNrDTbW/2151302621-1.jpg)` }}>
                <div className="flex flex-col justify-center items-center min-h-[350px] md:min-h-[550px]">
                    <h1 className="text-5xl text-center font-bold drop-shadow-2xl md:text-7xl  text-white animate__animated animate__bounce ">Contact Us</h1>
                </div>
            </div>
            <div className="max-w-6xl my-20 mx-auto">
                <section data-aos="fade-up"
                data-aos-duration="1000" className="py-8  bg-slate-100 rounded-xl">
                    <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                        <div className="py-6 md:py-0 md:px-6">
                            <h1 className="text-4xl font-bold">Get in touch</h1>
                            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 text-blue-500 h-5 mr-2 sm:mr-6">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Hathazari , Chittangong</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 text-blue-500 h-5 mr-2 sm:mr-6">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span>+880 16322-16145</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 text-blue-500 h-5 mr-2 sm:mr-6">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <span>robayatfarsit@gmail.com</span>
                                </p>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="flex flex-col py-6 space-y-6 font-Mulish md:py-0 md:px-6">
                            <label className="block">
                                <span className="mb-1">Full name</span>
                                <input ref={nameref} type="text" placeholder="Full Name" className="block p-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
                            </label>
                            <label className="block">
                                <span className="mb-1">Email address</span>
                                <input ref={emailref} type="email" placeholder="Email address" className="block p-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 " required/>
                            </label>
                            <label className="block">
                                <span className="mb-1">Message</span>
                                <textarea ref={msgref} rows="3"  placeholder="Message" className="block w-full rounded-md focus:ring focus:ring-opacity-75 p-2 focus:ring-violet-400 "></textarea>
                            </label>
                            <button type="submit" className="self-center outline-none px-8 py-3 text-lg rounded focus:ring w-full focus:ring-opacity-75 text-white font-bold bg-blue-500 ">Submit</button>
                        </form>
                    </div>
                </section>
            </div>
            <ToastContainer />
            <ScrollRestoration />
        </div>
    );
};

export default Contact;