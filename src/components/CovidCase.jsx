import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router"
import illustration from '../assets/covid_illustration.svg'
import { motion } from "framer-motion"


const CovidCase = () =>{
    const covid = useSelector(state => state.covid )
    const history = useHistory()
    return (
        <div className={(history.location.pathname.includes('covid') ? "w-full " : "hidden md:block ") + " md:w-1/4 px-6 md:px-10"}>
            <motion.h1
            initial={{ opacity: 0 , x: -50 }}
            animate={{ opacity: 1 , x: 0 }}
            transition={{ duration: 1.4 , type: 'spring' , bounce: 0.7 }}
            className="bg-white text-center text-2xl font-bold shadow-md rounded-lg py-4">Kasus Covid</motion.h1>

            <motion.div
            initial={{ opacity: 0 , x: -50 }}
            animate={{ opacity: 1 , x: 0 }}
            transition={{ duration: 1.4 , delay: 0.3, type: 'spring' , bounce: 0.7 }}
            className="rounded-md overflow-hidden shadow-md mt-4">
                <img src={illustration} alt="covid illustration" />
            </motion.div>

            <motion.div
            initial={{ opacity: 0 , x: -50 }}
            animate={{ opacity: 1 , x: 0 }}
            transition={{ duration: 1.4 , delay: 0.3, type: 'spring' , bounce: 0.7 }}
            className="my-4 rounded-lg w-full bg-white h-36 p-8 shadow-md">
                <div className="text-center text-xl font-bold">
                    Positif      
                </div>
                <div className="text-center text-4xl text-red-400 font-bold ">{Intl.NumberFormat('id-ID').format(covid.positive)}</div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0 , x: -50 }}
            animate={{ opacity: 1 , x: 0 }}
            transition={{ duration: 1.4 , delay: 0.6, type: 'spring' , bounce: 0.7 }}            
            className="my-4 rounded-lg w-full bg-white h-36 text-gray-700 p-8 shadow-md">
                <div className=" text-center text-xl font-bold">
                    Meninggal 
                </div>
                <div className="text-center text-4xl font-bold ">{Intl.NumberFormat('id-ID').format(covid.death)}</div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0 , x: -50 }}
            animate={{ opacity: 1 , x: 0 }}
            transition={{ duration: 1.4 , delay: 0.9, type: 'spring' , bounce: 0.7 }}
            className="my-4 rounded-lg w-full bg-white h-36  p-8 shadow-md">
                <div className="text-center text-xl font-bold">
                    Sembuh      
                </div>
                <div className="text-center text-4xl text-green-400 font-bold">{Intl.NumberFormat('id-ID').format(covid.recovery)}</div>
            </motion.div>
        </div>
    )
}

export default CovidCase