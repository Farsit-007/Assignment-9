import { useLoaderData, useParams } from "react-router-dom"
import { ScrollRestoration } from "react-router-dom";
import { LiaBedSolid } from "react-icons/lia";
import { GiShower } from "react-icons/gi";
import { TbRulerMeasure } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineSell } from "react-icons/md";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { IoMdArrowDroprightCircle } from "react-icons/io";
import 'leaflet/dist/leaflet.css';
import { Helmet } from "react-helmet-async";
const EstateDetails = () => {
    const estateB = useLoaderData();
    const { id } = useParams();
    const nEstate = estateB.find(newEst => newEst.id === id)
    return (
        <div>
             <Helmet>
                <title>FaLa | Estate Details</title>
            </Helmet>
            <section className="font-Mulish">
                <div className=" bg-cover object-cover bg-slate-50" style={{ backgroundImage: `url(${nEstate.image})` }}>
                    <div className="flex flex-col justify-center items-center min-h-[350px] md:min-h-[550px]">
                        <h1 className="text-5xl text-center font-extrabold drop-shadow-2xl md:text-7xl  text-white">{nEstate.segment_name}</h1>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto ">
                    <div className="flex justify-between rounded-lg p-6 bg-white shadow-xl  relative bottom-12  ">
                        <div className="">
                            <h1 className="font-extrabold text-4xl lg:text-5xl  pb-3">{nEstate.segment_name}</h1>
                            <div className="flex gap-2 mt-2 md:text-lg font-bold items-start ">
                                <IoLocationOutline className="text-blue-500" size={25} />
                                {nEstate.location}
                            </div>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-3xl lg:text-4xl text-blue-500 pb-3">{nEstate.price}</h1>
                            <div className="badge p-4 font-bold text-lg mt-2 badge-ghost">
                                <MdOutlineSell className=""/>
                                {nEstate.status}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto ">
                    <div className="col-span-3 space-y-8 lg:col-span-2">
                        <div className="rounded-xl bg-white shadow-md p-6 flex flex-col md:flex-row items-center gap-8 ">
                            <div className="py-3">
                                <h1 className="text-3xl font-bold">Overview </h1>
                            </div>
                            <div className="flex items-center gap-4 md:gap-16">
                                <div className="flex font-bold gap-2 items-center">
                                    <LiaBedSolid className="text-blue-500" size={30} />
                                    {nEstate.facilities[0].slice(0, 1)}
                                </div>
                                <div className="flex gap-2 font-bold items-center">
                                    <GiShower className="text-blue-500" size={30} />
                                    {nEstate.facilities[1].slice(0, 1)}
                                </div>
                                <div className="flex gap-2 font-bold items-center">
                                    <TbRulerMeasure className="text-blue-500" size={30} />
                                    {nEstate.area}
                                </div>
                                <div className="flex gap-2 font-bold items-center">
                                    <IoCarSportOutline className="text-blue-500" size={30} />
                                    {nEstate.facilities[2].slice(0, 1)}
                                </div>

                            </div>
                        </div>
                        <div className="rounded-xl shadow-md p-6">
                            <h1 className="text-3xl py-2 font-bold">Description </h1>
                            <p className="font-medium text-[16px]">{nEstate.description}</p>
                        </div>
                        <div className="rounded-xl shadow-md p-6">
                            <h1 className="text-3xl font-bold py-2">Details </h1>
                            <div>
                                <div className="overflow-x-auto">
                                    <table className="table ">
                                        {/* head */}

                                        <tbody>
                                            {/* row 1 */}
                                            <tr>

                                                <td><span className="font-bold">Property Id : </span> {nEstate.id}</td>
                                                <td><span className="font-bold">Price : </span>{nEstate.price}</td>
                                                <td><span className="font-bold">Status : </span>{nEstate.status}</td>
                                            </tr>
                                            {/* row 2 */}
                                            <tr>

                                                <td><span className="font-bold">Bedrooms : </span>{nEstate.facilities[0].slice(0, 1)}</td>
                                                <td><span className="font-bold">Bathrooms: </span>{nEstate.facilities[1].slice(0, 1)}</td>
                                                <td><span className="font-bold">Room : </span>{nEstate.room}</td>
                                            </tr>
                                            {/* row 3 */}
                                            <tr>

                                                <td><span className="font-bold">Car Parking Ability : </span>{nEstate.facilities[2].slice(0, 1)}</td>
                                                <td><span className="font-bold">Location : </span>{nEstate.location}</td>
                                                <td><span className="font-bold">Property Size : </span>{nEstate.area}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                        <div className="rounded-xl shadow-md p-6"> 
                            <h1 className="text-3xl font-bold py-2">Facilities </h1>
                            <div className="">
                                {nEstate.facilities.map((facility, index) => (
                                    <p className="flex items-center gap-2 py-1 font-medium" key={index}><IoMdArrowDroprightCircle className="text-blue-500 " size={20}/> {facility}</p>
                                ))}
                            </div>
                        </div>


                        <div className="rounded-xl shadow-md p-6">
                            <div>
                                <h1 className="text-3xl font-bold pb-8">Location </h1>
                            </div>
                            <MapContainer center={[nEstate.la, nEstate.lo]} zoom={13} scrollWheelZoom={false} style={{ height: '500px', width: '100%' }}>
                                <TileLayer
                                    attribution=''
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[nEstate.la, nEstate.lo]}>
                                    <Popup>
                                        <div className="flex gap-2 items-center ">
                                            <IoLocationOutline size={30} />
                                            {nEstate.location}
                                        </div>
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>

                    </div>
                    <div className="col-span-3 lg:col-span-1 relative">
                        <section className="">
                            <div>
                                <h1 className="text-3xl pb-2 font-bold">Feature Gallery</h1>
                            </div>
                            <div className="container shadow-lg rounded-lg grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">

                                <a  href="https://i.ibb.co/rQ6QWmD/image-1000x600-1.png" target="_blank" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm  md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square cursor-pointer">
                                  <img src="https://i.ibb.co/rQ6QWmD/image-1000x600-1.png" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm  md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square cursor-pointer" alt=""  />
                                </a>

                                

                               <a href="https://i.ibb.co/85B42r0/image-1000x600-2.png" target="_blank" >
                               <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/85B42r0/image-1000x600-2.png" />
                               </a>

                               <a href="https://i.ibb.co/0KxsNQg/13.png" target="_blank" >
                               <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/0KxsNQg/13.png" />
                               </a>

                               <a href="https://i.ibb.co/k1zFWNN/14.png" target="_blank" >
                               <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/k1zFWNN/14.png" />
                               </a>

                               <a href="https://i.ibb.co/Hp45Q9K/15.png" target="_blank" >
                               <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/Hp45Q9K/15.png" />
                               </a>

                               <a href="https://i.ibb.co/M1FgFSg/16.png" target="_blank" >
                               <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/M1FgFSg/16.png" />
                               </a>

                               <a href="https://i.ibb.co/34MwDFQ/17.png" target="_blank" >
                               <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/34MwDFQ/17.png" />
                               </a>

                               <a href="https://i.ibb.co/8cpD8Ny/18.png" target="_blank" >
                               <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/8cpD8Ny/18.png" />
                               </a>


                               <a href="https://i.ibb.co/YXX5WN1/19.png" target="_blank" >
                               <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer" src="https://i.ibb.co/YXX5WN1/19.png" />
                               </a>
                                
                            </div>
                        </section>
                        <section className="mt-5">
                            <div className="container shadow-xl rounded-lg flex flex-col-reverse mx-auto lg:flex-row">
                                <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-6 lg:p-6  ">
                                    <div className="flex space-x-2 sm:space-x-4">
                                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500 flex-shrink-0 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <div className="space-y-2">
                                            <p className="text-lg font-bold leading-snug ">Detailed Property Listings</p>
                                            <p className="leading-snug">
                                                Real estate websites offer comprehensive property listings with precise search filters for location, price, property type, and amenities.</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 sm:space-x-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500  flex-shrink-0 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <div className="space-y-2">
                                            <p className="text-lg font-bold leading-snug">Interactive Maps Info</p>
                                            <p className="leading-snug">Interactive maps show property locations and nearby amenities like schools, parks, and transportation options, aiding in neighborhood assessment.</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 sm:space-x-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-500  flex-shrink-0 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <div className="space-y-2">
                                            <p className="text-lg font-bold leading-snug">Rich Property Details</p>
                                            <p className="leading-snug">Properties are presented with concise descriptions, features, floor plans, and photo galleries, aiding users in visualizing properties and making informed decisions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <ScrollRestoration />
        </div>
    );
};

export default EstateDetails;