import { useState } from "react";
import Container from "../pages/Utils/Container";
import { LuMenu } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import Button from "../pages/Utils/Button";
import "./header.css";
import SocialWidget from "../pages/Utils/SocialWidget";
import Logo from "../pages/Utils/Logo";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [headerNavDrawer, setHeaderNavDrawer] = useState(false);

    return (
        <header className="bg-slate-50 border-b border-b-slate-200 z-50">
            <Container>

                {/* Main nav bar */}
                <div className="navigation flex justify-between gap-5 items-center py-4">
                    <div className="block lg:hidden">
                        <button onClick={() => setHeaderNavDrawer(!headerNavDrawer)} className="bg-primary-normal hover:bg-primary-hover py-2 px-3 text-white rounded-lg text-xl flex items-center gap-1"> 
                            <LuMenu /> <span className="text-base font-medium">Menu</span>
                        </button>
                    </div>
                    <div>
                        <Logo width="w-36"/>
                    </div>
                    <nav className="hidden lg:block">
                        <ul className="header-menu flex gap-3 items-center justify-center">
                            <li>
                                <NavLink to={'/'} className="text-base font-medium hover:!bg-primary-hover hover:text-white py-2 px-4 rounded-lg"> Home </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/biodata'} className="text-base font-medium hover:!bg-primary-hover hover:text-white py-2 px-4 rounded-lg"> Biodatas </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'} className="text-base font-medium hover:!bg-primary-hover hover:text-white py-2 px-4 rounded-lg"> About us </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'} className="text-base font-medium hover:!bg-primary-hover hover:text-white py-2 px-4 rounded-lg"> Contact us </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <Button text="Login" link="/login" />
                    </div>
                </div>
                {/* Main nav bar End*/}





                {/* Drawer area  */}
                <div onClick={() => setHeaderNavDrawer(false)} className={`${headerNavDrawer && 'lg:hidden fixed top-0 left-0 w-full h-screen bg-[#000000b0] z-50'}`}>

                    <div className={`drawer-wrapper transform transition-transform duration-300 ease-in-out ${headerNavDrawer ? 'translate-x-0 z-50' : '-translate-x-full'} lg:translate-x-0 lg:hidden fixed top-0 left-0 h-full w-80 bg-slate-50 overflow-hidden z-50`}>

                        {/* Drawer content  */}
                        <div className="h-screen relative overflow-y-auto">
                            <button onClick={() => setHeaderNavDrawer(false)} className="absolute top-0 right-0 text-red-500 text-3xl p-5 hover:bg-[#ff000012]">
                                <MdClose />
                            </button>

                            <div className="p-4 pb-5 pt-16">
                                <div>
                                    <Logo width="w-56"/>
                                </div>
                                <ul className="header-menu mt-10">
                                    <li className="py-2">
                                        <NavLink to={'/'} className="text-base font-medium hover:!bg-primary-hover hover:text-white py-3 px-4 rounded-lg block"> Home </NavLink>
                                    </li>
                                    <li className="py-2">
                                        <NavLink to={'/biodata'} className="text-base font-medium hover:!bg-primary-hover hover:text-white py-3 px-4 rounded-lg block"> Biodatas </NavLink>
                                    </li>
                                    <li className="py-2">
                                        <NavLink to={'/about'} className="text-base font-medium hover:!bg-primary-hover hover:text-white py-3 px-4 rounded-lg block"> About us </NavLink>
                                    </li>
                                    <li className="py-2">
                                        <NavLink to={'/contact'} className="text-base font-medium hover:!bg-primary-hover hover:text-white py-3 px-4 rounded-lg block"> Contact us </NavLink>
                                    </li>
                                    <div className="pl-4">
                                        <SocialWidget />
                                    </div>
                                </ul>
                            </div>
                        </div>
                        {/* Drawer content End */}

                    </div>
                </div>
                {/* Drawer area End*/}

            </Container>
        </header>
    );
};

export default Header;