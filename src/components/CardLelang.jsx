import React, { useState } from 'react'
import CardBid from './CardBid'
import ExImage from './ex-item.jpg'
import FormBid from './FormBid'


const CardLelang = () => {
    const [displayBids, setDisplayBids] = useState(false)
    const [displayFormBids, setDisplayFormBids] = useState(false);
    
    return (
        <>
            
            <div className="bg-blue-100 p-10 rounded-lg my-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="bg-blue-400 rounded-full w-12 h-12">
                        </div>
                        <h4 className="text-lg font-semibold">Nama Pengguna</h4>
                    </div>
                    <p className="text-lg font-semibold text-red-400">
                        18:20
                    </p>
                </div>
                <div className="h-72 w-full overflow-hidden flex items-center justify-center rounded-md my-8">
                    <img src={ExImage} alt="Example item" />
                </div>
                <div>
                    <h3 className="text-lg font-bold">Nama Barang</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur eveniet obcaecati aut fugit tempora. Fugiat ratione nesciunt beatae nobis ea distinctio, eligendi tenetur obcaecati non, corporis cupiditate, ipsam consectetur vero.</p>
                </div>
                <div className="flex justify-around mt-4">
                    <button className="bg-white py-2 px-8 rounded-md font-semibold text-gray-600"
                        onClick={() => setDisplayBids(!displayBids)}
                    >Lihat Bid</button>
                    <button className="bg-white py-2 px-8 rounded-md font-semibold text-gray-600" 
                        onClick={() =>  setDisplayFormBids(!displayFormBids)}
                    >Pasang Bid</button>
                </div>
            </div>
            
            <div className={displayBids ? "block" : 'hidden'}>
                <CardBid />
                <CardBid />
                <CardBid />
            </div>
            <FormBid display={displayFormBids}/>
        </>
    )
}

export default CardLelang
