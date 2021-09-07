import React from "react"
import poster from "../assets/poster_right.jpg"
import logoWarna from "../assets/logo_tulisan_warna.svg"
import { useHistory } from "react-router"
import { motion } from "framer-motion"

const CardRekening = () => {
    const history = useHistory()
    return (
        <div className={(history.location.pathname.includes('payment') ? "w-full " : "hidden md:block ") + " md:w-1/4 px-4 md:px-10"}>    
            <motion.div
            initial={{ opacity: 0 , x: 50 }}
            animate={{ opacity: 1 , x: 0 }}
            transition={{ duration: 1.4 , delay: 0.3, type: 'spring' , bounce: 0.7 }}
            className=" mb-4 rounded-lg w-full bg-white shadow-md p-8 mx-auto">
                <img src={logoWarna} alt="logo warna" />
            </motion.div>
            <motion.div
            initial={{ opacity: 0 , x: 50 }}
            animate={{ opacity: 1 , x: 0 }}
            transition={{ duration: 1.4 ,delay: 0.6, type: 'spring' , bounce: 0.7 }}
            className="overflow-hidden rounded-lg shadow-md">
                <img src={poster} alt="poster" />
            </motion.div>
        </div>
    )
}

export default CardRekening