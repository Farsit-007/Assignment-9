import { Helmet } from "react-helmet-async";

import { ScrollRestoration } from "react-router-dom";
const Gallery = () => {
    return (
        <div>
              <Helmet>
                <title>FaLi | Gallery</title>
            </Helmet>
            <section className="">
                <div className=" bg-cover bg-slate-50 " style={{ backgroundImage: `url(https://i.ibb.co/d6PmYCx/image-1000x400.png)` }}>
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-7xl xl:max-w-3xl text-white playfair animate__animated animate__bounce">Gallery</h1>
                        <p className="mt-6 mb-8 text-lg workSans sm:mb-12 xl:max-w-3xl text-white animate__animated animate__bounce">Welcome to FaLi Villa, where every property is a masterpiece waiting to be discovered. Explore our curated collection of distinctive homes and let their unique charm capture your imagination. Find your dream home at FaLi Villa today!</p>

                    </div>
                </div>
                <img data-aos="fade-up"
                data-aos-duration="1000" src={('https://i.ibb.co/QXy7Ynv/2150666363-removebg-preview.png')} width={600} alt="" className=" mx-auto mb-0 md:mb-12 -mt-[140px] md:-mt-[190px]  rounded-lg lg:-mt-56" />
            </section>
            <section className="mb-20">


                <h1 className='text-center py-6 playfair text-5xl font-bold leading-none sm:text-5xl'>Villa Gallery</h1>

                <div data-aos="fade-up"
                    data-aos-duration="2000" className="container shadow-md rounded-lg grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 animate__animated animate__fadedup">

                    <a href="https://i.ibb.co/ZNYCmNB/2150666300.jpg" target="_blank" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm  md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square cursor-pointer">
                        <img src="https://i.ibb.co/ZNYCmNB/2150666300.jpg" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm  md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square cursor-pointer" alt="" />
                    </a>



                    <a href="https://i.ibb.co/XZJ45mn/2151302622.jpg" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/XZJ45mn/2151302622.jpg" />
                    </a>

                    <a href="https://i.ibb.co/7N0XQM3/outdoor-swimming-pool.jpg" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/7N0XQM3/outdoor-swimming-pool.jpg" />
                    </a>

                    <a href="https://i.ibb.co/LR0bkRy/3.jpg" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/LR0bkRy/3.jpg" />
                    </a>

                    <a href="https://i.ibb.co/g97DH0v/1.jpg" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/g97DH0v/1.jpg" />
                    </a>

                    <a href="https://i.ibb.co/zFNp7X5/main-home-property.jpg" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/zFNp7X5/main-home-property.jpg" />
                    </a>

                    <a href="https://i.ibb.co/b5MW5rQ/2151264503.jpg" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/b5MW5rQ/2151264503.jpg" />
                    </a>

                    <a href="https://i.ibb.co/hH4MLgT/image-1000x600.png" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/hH4MLgT/image-1000x600.png" />
                    </a>


                    <a href="https://i.ibb.co/YXX5WN1/19.png" target="_blank" >
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/YXX5WN1/19.png" />
                    </a>

                </div>
            </section>
            <ScrollRestoration />
        </div>
    );
};

export default Gallery;