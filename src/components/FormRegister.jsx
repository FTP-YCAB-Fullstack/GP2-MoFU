import React from 'react'
import { useDispatch } from 'react-redux'
import axios from '../axios'
import { registerUser } from '../redux/actions/users'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const FormRegister = () => {
    const dispatch = useDispatch()
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        let form  = e.target
        let data = {
            name: form.name.value,
            email: form.email.value,
            password:form.password.value,
            confirm_password:form.confirm_password.value
        }
        if(data.confirm_password === data.password) {
            try {
                const createUser = async () => {
                    let response = await axios.post('/users',{
                        name: data.name,
                        email: data.email,
                        password:data.password,
                        role_id: 2
                    })
                    if(response.status === 201) {
                        dispatch({type: "CHANGE_TO_LOGIN"})
                        dispatch(registerUser(response.data))
                    }
                }
                createUser()
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <motion.form 
        initial={{opacity:0 , x:-50 }}
        animate={{opacity:1, x:0}}
        transition={{duration:0.6}}
        
        onSubmit={handleSubmit} className="flex py-10 flex-col items-center w-full md:w-2/5 ">
            <h2 className="text-3xl font-bold mb-5">Register</h2>
            <input name="name" className="outline-none block border-2 border-gray-200 focus:border-green-200 py-2 px-6 my-2 w-5/6 mx-auto rounded-lg" type="text" placeholder="Masukan username ...."/>
            <input name="email" className="outline-none block border-2 border-gray-200 focus:border-green-200 py-2 px-6 my-2 w-5/6 mx-auto rounded-lg" type="email" placeholder="Masukan email ...."/>
            <input name="password" className="outline-none block border-2 border-gray-200 focus:border-green-200 py-2 px-6 my-2 w-5/6 mx-auto rounded-lg" type="password" placeholder="Masukan password ...."/>
            <input name="confirm_password" className="outline-none block border-2 border-gray-200 focus:border-green-200 py-2 px-6 my-2 w-5/6 mx-auto rounded-lg" type="password" placeholder="Masukan password ...."/>
            <div className="w-3/4 flex gap-4 justify-center mt-6">
                <button type="submit" className="bg-green-400 hover:bg-green-500 transition duration-200 text-white py-2 w-2/3 font-semibold rounded-md ">MASUK</button>
            </div>

            <p className="mt-4">Sudah mempunyai akun? <Link to="" onClick={()=>dispatch({type:"CHANGE_TO_LOGIN"})} > Login </Link> </p>
    
        </motion.form>
    )
}

export default FormRegister
