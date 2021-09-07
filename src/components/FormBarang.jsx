import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAuction } from '../redux/actions/auctions'
import axios from '../axios'
import {motion} from 'framer-motion'

const Input = ({name , text , type = "text"}) => {
    return <input name={name} type={type} placeholder={text} className="outline-none block border-2 border-gray-200 py-2 px-6 my-4 w-full md:w-5/6 mx-auto rounded-lg" />
}

const FormBarang = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = {
            name : e.target.name.value,
            date : e.target.date.value,
            image_url : e.target.image_url.value,
            description : e.target.description.value,
            user_id : auth.user.id,
        }

        try {
            const createAuction = async() => {
                let response = await axios.post("/auctions",data)
                console.log(response)
                if(response.status === 201) {
                    dispatch(addAuction(response.data))
                }
            }
            createAuction()
            e.target.reset()
        } catch (error) {
            console.log(error)
        }
    
    }

    return (
            <motion.div 
            initial={{ opacity: 0 , y: 100 }}
            animate={{ opacity: 1 , y: 0 }}
            transition={{ duration: 1.4 , delay: .2 , type: 'spring' , bounce: 0.7 }} 
            className="rounded-lg p-6 md:p-8 text-center bg-white shadow-lg mb-10">
                <h1 className=" text-lg md:text-3xl font-bold ">Kirim Barang Lelang</h1>
                <form onSubmit={handleSubmit}>
                    <Input name="name" text="Nama Barang" />
                    <Input name="date" type="date" text="Waktu" />
                    <Input name="image_url" type="url" text="Gambar Barang" />
                    <textarea name="description" className="block border-2 border-gray-200 py-2 px-6 my-4 w-full md:w-5/6 mx-auto rounded-lg" placeholder="Deskripsi" ></textarea>
                    <button type="submit" className="bg-green-400 hover:bg-green-500 transition duration-200 text-white rounded-md text-sm md:text-base py-2 px-4 md:px-8 font-semibold">Kirim</button>
                </form>
            </motion.div>
    )
}

export default FormBarang