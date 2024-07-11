import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import Footer from "../components/Footer"

export default function Layout() {

    const [active, setActive] = useState(false)

    return (
        <>
            <nav className="w-full navBar z-10 fixed top-0 flex flex-wrap justify-between items-center h-15 bg-gray-800 text-white">
                <div className="flex flex-shrink-0">
                    <h1 className="p-3 focus:border-slate-300 text-2xl font-bold">EXA.</h1>
                </div>
                <div className="flex m-2 p-2 lg:hidden focus:border-slate-300 rounded-lg" onClick={() => setActive(!active)} >
                    <svg className={!active ? '' : "hidden"} xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="list">
                        <g fill="none" fillRule="evenodd" stroke="white" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2">
                            <path d="M1 1h13M1 7h13M1 13h13"></path>
                        </g>
                    </svg>
                    <svg className={active ? '' : "hidden"} xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="x">
                        <g fill="none" fillRule="evenodd" stroke="white" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2">
                            <path d="M13 1 1 13M1 1l12 12"></path>
                        </g>
                    </svg>
                </div>
                <div
                    className={active ? "pl-3.5 w-full lg:h-max duration-300 items-center lg:justify-between  overflow-hidden lg:w-auto lg:flex block lg:flex-grow lg:flex-row h-52" : "pl-3.5 w-full lg:h-max h-0 duration-300 items-center lg:justify-between  overflow-hidden lg:w-auto lg:flex block lg:flex-grow lg:flex-row"}>
                    <div className="flex lg:flex-row flex-col">
                        <NavLink to="/home" className="opacity-70 w-max hover:opacity-100 duration-300 m-2">About me</NavLink>
                        <NavLink to="/skill" className="opacity-70 w-max hover:opacity-100 duration-300 m-2">Skill Framework</NavLink>
                        <NavLink to="/work" className="opacity-70 w-max hover:opacity-100 duration-300 m-2">Recent Work</NavLink>
                    </div>
                    <div className="lg:p-2 p-2">
                        <NavLink to="/contact" className=" hover:bg-zinc-700 p-1.5 border-2 opacity-70 hover:opacity-100 duration-300 border-white">
                            Contact
                            Me</NavLink>
                    </div>
                </div>
            </nav >
            <Outlet />
            <Footer />
        </>
    )


}

