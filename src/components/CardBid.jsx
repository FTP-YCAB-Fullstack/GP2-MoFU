import React from 'react'

const CardBid = () => {
    return (
        <div className="bg-blue-100 flex items-center gap-4 rounded-lg px-10 py-6 my-6">
            <div className="bg-white w-10 h-10 rounded-full">
            </div>
            <div className="bg-white rounded-lg py-2 px-8" style={{width: 'fit-content'}}>
                <h4>Nama Pengguna</h4>
                <h5>Rp 1.000.000</h5>
            </div>
        </div>
    )
}

export default CardBid
