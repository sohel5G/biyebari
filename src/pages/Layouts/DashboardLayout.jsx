import { LuMenu } from "react-icons/lu";
import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./DashboardLayout.css";
import { FaEdit, FaHeart, FaUsers, FaTachometerAlt, FaHome } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { RiShutDownLine } from "react-icons/ri";
import { TbPremiumRights } from "react-icons/tb";
import { FcAbout } from "react-icons/fc";

const DashboardLayout = () => {
    const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 1024);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    // Update showSidebar state on window resize
    useEffect(() => {
        const handleResize = () => {
            setShowSidebar(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Inline styles for transition
    const sidebarStyles = {
        transform: showSidebar ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 300ms ease-in-out',
    };

    return (
        <>

            {/* Open button on mobile screen */}
            <div className="lg:hidden flex justify-center my-3">
                <button onClick={toggleSidebar} className="hover:bg-primary-normal py-1 px-5 text-primary-normal hover:text-white rounded border-2 border-primary-normal text-xl flex items-center gap-1">
                    <LuMenu /> <span className="text-base font-medium">Dashboard</span>
                </button>
            </div>

            {/* Overlay Background for Main Content on Mobile */}
            {showSidebar && (<div className="lg:hidden fixed top-0 left-0 w-full h-full bg-[#000000b0]" onClick={toggleSidebar} />)}



            <div className="lg:grid lg:grid-cols-4 lg:gap-3">

                <div className="bg-gray-50 fixed lg:relative w-80 lg:w-full top-0 left-0 z-50" style={sidebarStyles}>
                    <div className="h-screen relative overflow-y-auto">
                        {showSidebar && (
                            <span onClick={toggleSidebar} className="absolute top-0 right-0 text-red-500 text-3xl p-5 hover:bg-[#ff000012] lg:hidden cursor-pointer">
                                <MdClose />
                            </span>
                        )}

                        {/* Sidebar content */}
                        <div>
                            <ul className="dashboard-menu mt-20 pb-10">

                                {/* Admin routes  */}
                                <li>
                                    <NavLink className="hover:bg-gray-200 text-lg font-normal py-3 px-7 hover:text-primary-normal flex items-center gap-2" to={'/dashboard/admin'}>
                                        <span className="text-xl"><FaTachometerAlt /></span>
                                        <span>Dashboard</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="hover:bg-gray-200 text-lg font-normal py-3 px-7 hover:text-primary-normal flex items-center gap-2" to={'/users'}>
                                        <span className="text-xl"><FaUsers /></span>
                                        <span>Manage Users</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="hover:bg-gray-200 text-lg font-normal py-3 px-7 hover:text-primary-normal flex items-center gap-2" to={'/premium'}>
                                        <span className="text-xl"><TbPremiumRights /></span>
                                        <span>Approved Premium</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="hover:bg-gray-200 text-lg font-normal py-3 px-7 hover:text-primary-normal flex gap-2" to={'/requested'}>
                                        <span className="text-xl mt-1"><BiSolidContact /></span>
                                        <span>Approved Contact Request</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="hover:bg-gray-200 text-lg font-normal py-3 px-7 hover:text-primary-normal flex items-center gap-2" to={'/logout'}>
                                        <span className="text-xl"><RiShutDownLine /></span>
                                        <span>Logout</span>
                                    </NavLink>
                                </li>



                                <hr className="my-8" />



                                {/* User routes  */}
                                <li>
                                    <NavLink className="hover:bg-gray-200 text-lg font-normal py-3 px-7 hover:text-primary-normal flex items-center gap-2" to={'/dashboard/client'}>
                                        <span className="text-xl"><FaTachometerAlt /></span>
                                        <span>Dashboard</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="hover:bg-gray-200 text-lg font-normal py-3 px-7 hover:text-primary-normal flex items-center gap-2" to={'/add'}>
                                        <span className="text-xl"><FaEdit /></span>
                                        <span>Edit Biodata</span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink className="hover:bg-gray-200 text-lg font-normal py-3 px-7 hover:text-primary-normal flex items-center gap-2 active" to={'/view'}>
                                        <span className="text-xl"> <MdLibraryBooks /> </span>
                                        <span>View Biodata</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="hover:bg-gray-200 text-lg font-normal py-3 px-7 hover:text-primary-normal flex items-center gap-2" to={'/request'}>
                                        <span className="text-xl"><BiSolidContact /></span>
                                        <span>Contact Request</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="hover:bg-gray-200 text-lg font-normal py-3 px-7 hover:text-primary-normal flex items-center gap-2" to={'/favourite'}>
                                        <span className="text-xl"><FaHeart /></span>
                                        <span>My Favourites</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="hover:bg-gray-200 text-lg font-normal py-3 px-7 hover:text-primary-normal flex items-center gap-2" to={'/logout'}>
                                        <span className="text-xl"><RiShutDownLine /></span>
                                        <span>Logout</span>
                                    </NavLink>
                                </li>





                                <hr className="my-8" />



                                <li>
                                    <NavLink className="hover:bg-gray-200 text-lg font-normal py-3 px-7 hover:text-primary-normal flex items-center gap-2" to={'/'}>
                                        <span className="text-xl"><FaHome /></span>
                                        <span>Home</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="hover:bg-gray-200 text-lg font-normal py-3 px-7 hover:text-primary-normal flex items-center gap-2" to={'/biodatas'}>
                                        <span className="text-xl"><MdLibraryBooks /></span>
                                        <span>Biodatas</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="hover:bg-gray-200 text-lg font-normal py-3 px-7 hover:text-primary-normal flex items-center gap-2" to={'/about-us'}>
                                        <span className="text-xl"><FcAbout /></span>
                                        <span>About us</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="hover:bg-gray-200 text-lg font-normal py-3 px-7 hover:text-primary-normal flex items-center gap-2" to={'/contact-us'}>
                                        <span className="text-xl"><BiSolidContact /></span>
                                        <span>Contact us</span>
                                    </NavLink>
                                </li>





                            </ul>
                        </div>


                    </div>
                </div>


                {/*Dashboard Content here */}
                <div className='lg:col-span-3 p-4'>
                    <h1 className="text-3xl">This is dashboard <br /> content area </h1>
                </div>

            </div>
        </>
    );
};

export default DashboardLayout;
