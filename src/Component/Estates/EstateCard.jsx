/* eslint-disable react/prop-types */
import { LiaBedSolid } from "react-icons/lia";
import { GiShower } from "react-icons/gi";
import { TbRulerMeasure } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineSell } from "react-icons/md";
import { Link } from "react-router-dom";
import { GiBlockHouse } from "react-icons/gi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const EstateCard = ({ estateA }) => {
    const {image,estate_title,description,price,segment_name,status,area,facilities,location,id}=estateA
    return (
        <div data-aos="fade-up"
        data-aos-duration="2000" className="font-Mulish mb-20">
            <div className="card  md:h-[510px] space-y-2 p-2 shadow-md">
                <div className="relative">
                <figure className=" rounded-xl">
                    <img src={image}  alt="Shoes" />
                </figure>
                <div className="absolute top-3 left-3">
                    
                    <div className="badge badge-ghost bg-blue-500 border-none font-semibold text-white text-md "><MdOutlineSell /> {status}</div>
                </div>
                </div>
               
                <div className="space-y-1">
                   
                <div>
                    <span className="text-blue-500 font-semibold text-lg">{price}</span>
                </div>
                    <h2 className="card-title text-[21px] font-bold"> {estate_title}</h2>
                    <div>
                        <h3 className="flex gap-3 items-center  font-semibold text-lg"><GiBlockHouse className="font-bold text-blue-500"/> {segment_name}</h3>
                    </div>
                    <p className="text-[16px]">{description.slice(0,70)}....</p>

                    <div className="flex gap-2 py-1 font-semibold items-center">
                          <IoLocationOutline className="text-blue-500" size={20} />
                             {location}
                          </div>
                    <div className="flex gap-8">
                          <div className="flex gap-2 font-semibold items-center">
                             <LiaBedSolid className="text-blue-500" size={20}/>
                             {facilities[0].slice(0,1)}
                          </div>
                          <div className="flex gap-2 font-semibold items-center">
                          <GiShower className="text-blue-500" size={20}/>
                             {facilities[1].slice(0,1)}
                          </div>
                          <div className="flex gap-2 font-semibold items-center">
                          <TbRulerMeasure className="text-blue-500" size={20}/>
                             {area}
                          </div>
                          <div className="flex gap-2 font-semibold items-center">
                          <IoCarSportOutline className="text-blue-500" size={20}/>
                             {facilities[2].slice(0,1)}
                          </div>
                         
                    </div>
                    
                    <div className="card-actions justify-end mr-3">
                    <Link to={`/data/${id}`} className="my-3 bg-transparent text-lg font-bold  border border-blue-500 text-blue-500 p-2 flex gap-1 items-center hover:text-white hover:bg-blue-500 transition-all duration-1000 " ><MdKeyboardDoubleArrowRight size={30}/> View Property</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;