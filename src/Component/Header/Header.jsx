import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import '../Header/Header.css'
import { AuthContext } from "../AuthProvider/AuthProvider";
import f1 from '../../assets/fav.png'
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [active, setActive] = useState(false);
    window.addEventListener("scroll", function () {
        if (this.window.scrollY > 100) {
            setActive(true)
        }
        else {
            setActive(false)
        }
    })
    const Links = < >
        <li className="text-[16px] font-bold"><NavLink to='/' className={({ isActive }) => isActive ? 'text-white focus:text-white border-t-2 border-b-2  border-blue-500  font-bold ' : 'font-bold bg-transparent text-white'}  >Home</NavLink></li>
        <li className="text-[16px] font-bold"><NavLink to='/gallery' className={({ isActive }) => isActive ? 'text-white focus:text-white border-t-2 border-b-2  border-blue-500  font-bold ' : 'font-bold bg-transparent text-white'}  >Gallery</NavLink></li>
        <li className="text-[16px] font-bold"><NavLink to='/about' className={({ isActive }) => isActive ? 'text-white focus:text-white border-t-2 border-b-2  border-blue-500  font-bold ' : 'font-bold bg-transparent text-white'}  >About Us</NavLink></li>
        {
            user && 
            <>
                <li className="text-[16px] font-bold"><NavLink to='/userprofile' className={({ isActive }) => isActive ? 'text-white focus:text-white border-t-2 border-b-2  border-blue-500  font-bold ' : 'font-bold bg-transparent text-white '} >User Profile</NavLink></li>
                <li className="text-[16px] font-bold"><NavLink to='/updateprofile' className={({ isActive }) => isActive ? 'text-white focus:text-white border-t-2 border-b-2  border-blue-500 font-bold ' : 'font-bold bg-transparent text-white '} >Update Profile</NavLink></li>
                <li className="text-[16px] font-bold"><NavLink to='/contact' className={({ isActive }) => isActive ? 'text-white focus:text-white border-t-2 border-b-2  border-blue-500 font-bold ' : 'font-bold bg-transparent text-white '} >Contact Us</NavLink></li>
            </>
        }
    </>
    const handleLogout = () => {
        logOut()
    }
    return (
        <div className="font-Mulish">
            <div className={`navbar lg:px-24 transition-all duration-1000 text-white z-10 fixed top-0 left-0 right-0 bg-transparent ${active ? "activecls" : ""}`}>
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#05030a] rounded-box w-52 ">
                            {Links}
                        </ul>
                    </div>
                   <div className="flex gap-3 items-center">
                    <div className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]">
                    <img src={f1} alt="" />
                    </div>
                   <Link to='/' className="text-xl md:text-3xl font-extrabold ">Fa<span className="text-blue-500" >L</span>i  Vil<span className="text-blue-500" >L</span>a</Link>
                   </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                {
                    user ? <div className=" navbar-end flex items-center gap-2  md:pl-8">
                        <div className="tooltip  tooltip-bottom" data-tip={user?.displayName || "User Name"}>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <Link to='/login' onClick={handleLogout} className="btn text-white bg-transparent text-[16px] font-bold">Logout</Link>
                        </div>
                    </div> : <div className="navbar-end flex items-center gap-2  md:pl-8"><Link to='/login' className="text-[16px] font-bold btn bg-transparent text-white">Login</Link></div>
                }

            </div>

        </div>
    );
};
export default Header;