import { useLoaderData } from "react-router-dom";
import EstateCard from "../Estates/EstateCard";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";
const Home = () => {
    const estates = useLoaderData();
    return (
        <div className="font-Mulish">
            <Helmet>
                <title>FaLi | Home</title>
            </Helmet>
            <div className="z-20">
                <Banner></Banner>
            </div>
            <div className=" space-y-4 max-w-6xl mx-auto mb-10" >
                <div className="py-6 md:py-12">
                    <h1 className="text-3xl md:text-5xl text-center font-bold">Estates</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {
                        estates.map(estateA => <EstateCard key={EstateCard.id} estateA={estateA}></EstateCard>)
                    }
                </div>
            </div>
            <section className="pt-6">
                <div data-aos="fade-up"
                    data-aos-duration="2000" className="container  flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-6">
                    <h1 className="text-4xl font-bold leading-none playfair text-center sm:text-5xl">Our Agents</h1>
                    <p className="max-w-2xl text-center text-gray-400 workSans ">FaLI VilLa is dedicated to curating a diverse portfolio of real estate listings that inspire and enrich lives. Our goal is to help you find the perfect property that aligns with your lifestyle and aspirations.</p>
                    <div className="flex flex-row flex-wrap-reverse justify-center">
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://i.ibb.co/N9GmQKQ/32988.jpg" />
                            <p className="text-xl font-semibold leading-tight">B.Robert</p>

                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://i.ibb.co/x3qnNnZ/2149944075.jpg" />
                            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>

                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://i.ibb.co/nwV4XVS/15902.jpg" />
                            <p className="text-xl font-semibold leading-tight">P.Charle</p>

                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://i.ibb.co/VYGbwWy/9861.jpg" />
                            <p className="text-xl font-semibold leading-tight">Marly Jenkins</p>

                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://i.ibb.co/ggG7fXX/confident-smiling-businesswoman-writing-notes.jpg" /><p>Routh Paul</p>

                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src="https://i.ibb.co/Jk386Sx/portrait-young-man-while-studying-books.jpg" />
                            <p className="text-xl font-semibold leading-tight">Sevan t.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section data-aos="fade-up"
                data-aos-duration="2000"  className="mb-10">
                <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                    <h1 className="text-4xl font-bold leading-none text-center">What our customers are saying about us</h1>
                </div>
                <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                    <div className="flex flex-col items-center mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-blue-500">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">FaLI VilLa made finding my dream home effortless. Their curated selection of properties matched my needs perfectly. The team was responsive, knowledgeable, and committed to assisting me every step of the way. I highly recommend FaLI VilLa to anyone searching for their perfect property</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-blue-500">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg bg-blue-500"></span>
                        <p>Leroy Jenkins</p>
                    </div>
                    <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-blue-500">
                                <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic"> FaLI VilLa's personalized service and attention to details exceeded my expectations. Thanks to their expertise I'm grateful for the seamless experience and confidently recommend FaLI VilLa to friends and family. </p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-blue-500">
                                <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg dark:bg-blue-500"></span>
                        <p>Leroy Jenkins</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;