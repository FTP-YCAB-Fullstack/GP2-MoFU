import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { modal } from '../redux/actions/modal'
import { logoutUser } from "../redux/actions/auth"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth )

    return (
        <div>
            <nav className="flex justify-between bg-indigo-500 p-3">
                <Link to="/"  className="left py-2 mx-4 text-white font-bold text-2xl">Logo</Link>
                <div className="right mx-4">
                    {
                        !auth.status ? 
                        <>
                            <button onClick={() => dispatch(modal("login"))} className="text-xl px-3 bg-white rounded-lg mx-2 py-2 font-bold">Login</button>
                            <button onClick={() => dispatch(modal("register"))} className="text-xl px-3 bg-white rounded-lg mx-2 py-2 font-bold">Register</button>
                        </>
                        :
                        <>
                            {
                                auth.user.role_id === 1 ? 
                                    <Link to="/admin" className="text-xl px-3 bg-white rounded-lg mx-2 py-2 font-bold">Admin</Link>
                                    :
                                    ""
                            }
                            <button onClick={() => dispatch(logoutUser())} className="text-xl px-3 bg-white rounded-lg mx-2 py-2 font-bold">Log-out</button>
                        </>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
