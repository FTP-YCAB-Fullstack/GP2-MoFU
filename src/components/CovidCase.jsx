import React from "react"
import { useSelector } from "react-redux"

const CovidCase = () =>{
    const covid = useSelector(state => state.covid )
    return (
        <div className="w-1/4 py-10 px-10">
            <div>
                <h3 className="text-center text-2xl font-bold">Covid Stat</h3>
            </div>
            <div className="my-8 rounded-lg w-full h-36 bg-red-300 p-8">
                <div className="text-center text-xl font-bold text-white">
                        Positif      
                </div>
                <div className="text-center text-4xl text-white font-bold ">{Intl.NumberFormat('id-ID').format(covid.positive)}</div>
            </div>
            <div className="my-8 rounded-lg w-full h-36 bg-red-300 p-8">
                <div className=" text-center text-xl font-bold text-white ">
                    meninggal 
                </div>
                <div className="text-center text-4xl text-white font-bold ">{Intl.NumberFormat('id-ID').format(covid.death)}</div>
            </div>
            <div className="my-8 rounded-lg w-full h-36 bg-red-300 p-8">
                <div className="text-center text-xl font-bold text-white">
                    Sembuh      
                </div>
                <div className="text-center text-4xl text-white font-bold">{Intl.NumberFormat('id-ID').format(covid.recovery)}</div>
            </div>
        </div>
    )
}

export default CovidCase