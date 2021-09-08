import React , { useRef , useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { modal } from '../redux/actions/modal'
import { logoutUser } from "../redux/actions/auth"
import { Link } from 'react-router-dom'
import logoNav from '../assets/logo_icon.svg'
import {motion} from 'framer-motion'

const Navbar = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth )
    const menuMobile = useRef(null)

    useEffect(() => {
        let menus = menuMobile.current.querySelectorAll('.menu-mobile')
        menus.forEach(menu => {
            menu.addEventListener('click' , e => {
                menus.forEach(m => {
                    m.classList.remove('text-green-500')
                })
                menu.classList.add('text-green-500')
            })
        })
    })
    
    return (
        <>
            {/* nav for dekstop */}
            <div className="fixed w-screen hidden md:block">
                <motion.nav 
                initial={{ opacity: 0 , y: -50 }}
                animate={{ opacity: 1 , y: 0 }}
                transition={{ duration: 1.4 , delay: .2 , type: 'spring' , bounce: 0.7 }} 
                className="flex justify-between shadow-md bg-green-400 p-3">
                    <Link to="/"  className="left flex flex-row mx-4 text-white font-bold text-2xl">
                        <img src={logoNav} alt="logo bid-donation" className="h-10 w-10 mx-2"/>
                        <div className="flex items-center font-bold">Bid Donation</div>
                    </Link>
                    <div className="right mx-4">
                        {
                            !auth.status ? 
                            <>
                                <button onClick={() => dispatch(modal("login"))} className="text-xl px-3 bg-white rounded-lg mx-2 py-2 font-bold transition duration-200 hover:text-green-400">Login</button>
                                <button onClick={() => dispatch(modal("register"))} className="text-xl px-3 bg-white rounded-lg mx-2 py-2 font-bold transition duration-200 hover:text-green-400">Register</button>
                            </>
                            :
                            <>
                                <Link to="/">
                                    <button className="text-xl px-3 bg-white rounded-lg mx-2 py-2 font-bold transition duration-200 hover:text-green-400">Home</button>
                                </Link>
                                {
                                    auth.user.role_id === 1 ? 
                                        <Link to="/admin" className="text-xl px-3 bg-white rounded-lg mx-2 py-2 font-bold transition duration-200 hover:text-green-400">Admin</Link>
                                        :
                                        ""
                                }
                                <button onClick={() => dispatch(logoutUser())} className="text-xl px-3 bg-white rounded-lg mx-2 py-2 font-bold transition duration-200 hover:text-red-400">Log-out</button>
                            </>
                        }
                    </div>
                </motion.nav>
            </div>


            {/* nav for mobile */}
            <div ref={menuMobile} className="fixed flex md:hidden z-50 justify-around items-center w-screen py-2 bottom-0 bg-white border-gray-200 text-gray-500 border-2">
                <Link to="/" > 
                    <div className="menu-mobile text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <p className="text-xs font-semibold">Home</p>
                    </div>
                </Link>
                <Link to="/covid">
                    <div className="menu-mobile">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                        </svg>
                        <p className="text-xs font-semibold">Covid</p>
                    </div>
                </Link>
                <div></div>
                <div className="bg-green-400 rounded-full h-16 w-16 absolute bottom-4 flex justify-center items-center">
                    <Link to="/" >
                        <img src={logoNav} alt="logo bid-donation" className="h-12 w-12 mx-2"/>
                    </Link>
                </div>
                <Link to="/payment" >
                    <div className="menu-mobile">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <p className="text-xs font-semibold">Payment</p>
                    </div>
                </Link>
                {
                    !auth.status ?
                        <div className="cursor-pointer" onClick={() => dispatch(modal("login"))}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            <p className="text-xs font-semibold">Login</p>
                        </div>
                    :
                        <div className="cursor-pointer text-red-400" onClick={() => dispatch(logoutUser())} >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <p className="text-xs font-semibold">Logout</p>
                        </div>
                }
            </div>
        </>
    )
}

export default Navbar;
