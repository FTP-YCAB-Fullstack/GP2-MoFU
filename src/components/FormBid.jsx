import React from 'react'
import {addBid} from "../redux/actions/bids"
import axios from '../axios'
import { useSelector, useDispatch } from 'react-redux'

const FormBid = ({ display , auctionId }) => {
    const auth = useSelector(state =>state.auth)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        let nominal = e.target.nominal.value
        try {
            let createBid = async() => {
                let response = await axios.post('/bids', {
                    user_id: auth.user.id,
                    auction_id: auctionId,
                    nominal: nominal,
                })
                dispatch(addBid(response.data))
        }
            createBid()
        } catch (error) {
            console.log(error)
        }
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit} className={(display ? 'block' : 'hidden') + " bg-purple-100 flex items-center gap-4 rounded-lg px-10 py-6 my-6"}>
            <input name="nominal" className="block border-2 border-gray-200 py-2 px-6 my-4 w-5/6 mx-auto rounded-lg" placeholder="Masukan nominal bid" />
            <button className="bg-green-400 py-2 px-8 rounded-md font-semibold text-white">Pasang</button>
        </form>
    )
}

export default FormBid