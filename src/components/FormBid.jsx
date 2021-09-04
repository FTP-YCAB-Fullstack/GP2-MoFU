import React from 'react'

const FormBid = ({display}) => {
    return (
        <form className={(display ? 'block' : 'hidden') + " bg-purple-100 flex items-center gap-4 rounded-lg px-10 py-6 my-6"}>
            <input name="nominal" className="block border-2 border-gray-200 py-2 px-6 my-4 w-5/6 mx-auto rounded-lg" placeholder="Masukan nominal bid" />
            <button className="bg-green-400 py-2 px-8 rounded-md font-semibold text-white">Pasang</button>
        </form>
    )
}

export default FormBid
