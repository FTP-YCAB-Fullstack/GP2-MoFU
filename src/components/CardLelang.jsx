import React from 'react'
import { useSelector } from 'react-redux'
import CardLelangItem from './CardLelangItem'


const CardLelang = () => {
    const auctions = useSelector(state => state.auctions)

    return (
        <>
            {
                auctions.length ?
                    auctions.map(auction => 
                        <CardLelangItem key={auction.id} auction={auction} />
                    )
                    : 
                    <h4 className="text-center text-4xl">Tidak ada data</h4>
            }
            
        </>
    )
}

export default CardLelang
