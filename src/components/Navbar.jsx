import React from 'react'
import { useDispatch } from 'react-redux'
import { modal } from '../redux/actions/modal'

const Navbar = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <nav className="flex justify-between bg-indigo-500 p-3">
                <div className="left py-2 mx-4 text-white font-bold text-2xl">Logo</div>
                <div className="right mx-4">
                    <button onClick={() => dispatch(modal("login"))} className="text-xl px-3 bg-white rounded-lg mx-2 py-2 font-bold">Login</button>
                    <button onClick={() => dispatch(modal("register"))} className="text-xl px-3 bg-white rounded-lg mx-2 py-2 font-bold">Register</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
