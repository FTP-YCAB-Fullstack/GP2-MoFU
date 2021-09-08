import React , { useEffect, useState } from 'react'
import axios from '../axios'
import { useParams } from 'react-router'
import CardLelangItem from './CardLelangItem'

const DetailAuction = () => {
    const {id} = useParams()
    const [auction, setAuction] = useState(null)
    useEffect(() => {
        const fetchAuction = async () => {
            try {
                let dataAuction = await axios.get(`/auctions/${id}`)
                setAuction(dataAuction.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAuction()
    }, [])
    return (
        <div>
            {
                auction !== null &&
                    <CardLelangItem auction={auction} />
            }
        </div>
    )
}

export default DetailAuction
