import React, { useState, useEffect } from "react"
import { useSelector } from 'react-redux'

const CollectTotal = () => {
    const auctions = useSelector(state => state.auctions)
    const bids = useSelector(state => state.bids)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let listAuctions = auctions.filter(auction => 
            new Date(auction.date) > new Date() ||
            new Date(auction.date).toDateString() === new Date().toDateString()
        )
        let totalDonation = listAuctions.map(auction => {
            let result = 0
            bids.forEach(bid => {
                if(bid.auction_id === auction.id){
                    result += parseInt(bid.nominal)
                    console.log(bid.nominal , bid.id)
                }
            })
            return result
        })
        totalDonation = totalDonation.reduce((acc , value) => acc + value)
        setTotal(totalDonation)
    }, [auctions])

    
    return (
        <div className="text-white my-5 rounded-lg w-1/4 h-36 bg-white shadow-md p-8 text-center">
            <div className="text-2xl font-bold text-black"> Total Donasi </div>
            <div className="text-2xl font-bold text-black leading-relaxed">Rp {Intl.NumberFormat('id-ID').format(total)}</div>
        </div>
    )
}

export default CollectTotal