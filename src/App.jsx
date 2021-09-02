import React , { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAuction } from './redux/actions/auctions'
import axios from './axios'

const App = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                let auctions = await axios.get('/auctions')
                auctions = auctions.data
                dispatch(fetchAuction(auctions))
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-center text-6xl text-blue-400 font-bold ">Bid Donation Project</h1>
        </div>
    )
}

export default App
