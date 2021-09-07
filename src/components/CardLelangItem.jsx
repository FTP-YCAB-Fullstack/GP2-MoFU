import React  , { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import CardBid from './CardBid'
import FormBid from './FormBid'



const CardLelangItem = ({ auction }) => {
    const [displayBids, setDisplayBids] = useState(false)
    const [displayFormBids, setDisplayFormBids] = useState(false);
    const [user, setUser] = useState(null)
    const [listBids, setListBids] = useState([])
    const [totalBid, setTotalBid] = useState(0)
    const users = useSelector(state => state.users)
    const auth = useSelector(state => state.auth)
    const bids = useSelector(state=>state.bids)

    useEffect(() => {
        users.forEach(item => {
            if(item.id === auction.user_id) {
                setUser(item)
            }
        })
    }, [auction , users])
    
    useEffect(() => {
        let matchBid = bids.filter(bid => bid.auction_id === auction.id)
        setTotalBid(matchBid.length)
        matchBid = matchBid.sort(function(a,b) {
            if(parseInt(a.nominal) < parseInt(b.nominal)){
                return 1
            }
            if(parseInt(a.nominal) > parseInt(b.nominal)){
                return -1
            }
            return 0
        })
        matchBid = matchBid.slice(0,3)
        setListBids([...matchBid])
    } , [bids])

    return (
        <>
            <motion.div
            initial={{ opacity: 0 , y: 100 }}
            animate={{ opacity: 1 , y: 0 }}
            transition={{ duration: 1.4 , delay: .2 , type: 'spring' , bounce: 0.7 }} 
            className="bg-white shadow-lg p-6 md:p-10 rounded-lg my-4 md:my-6">
                <div className="flex text-sm md:text-lg items-center justify-between">
                    <div className="flex items-center gap-4">
                        {
                            user ?
                            <>
                                <div className="overflow-hidden rounded-full w-8 md:w-12 h-8 md:h-12">
                                    <img src={user.avatar} alt="user" />
                                </div>
                                <h4 className="font-semibold">{user.name}</h4>
                            </>
                            : ""
                        }
                    </div>
                    <p className="font-semibol">
                        {auction.date}
                    </p>
                </div>
                <div className="h-72 w-full overflow-hidden flex items-center justify-center rounded-md my-8">
                    <img src={auction.image_url} alt="Example item" />
                </div>
                <div>
                    <h3 className="text-2xl text-green-400 font-bold">{auction.name}</h3>
                    <div className="text-base fontfont-semibold italic">Total Bid {totalBid}</div>
                    <p>{auction.description}</p>
                </div>
                <div className="flex justify-around mt-4">
                    <button className="bg-green-400 hover:bg-green-500 transition duration-200 text-white text-sm md:text-base py-2 px-4 md:px-8 rounded-md font-semibold"
                        onClick={() => setDisplayBids(!displayBids)}
                    >Lihat Bid</button>
                    
                    {
                        auth.status && 
                            (
                                new Date(auction.date) > new Date() ||
                                new Date(auction.date).toDateString() === new Date().toDateString()
                            )
                        ?  
                            <button className="bg-green-400 hover:bg-green-500 transition duration-200 text-white text-sm md:text-base py-2 px-4 md:px-8 rounded-md font-semibold" 
                                onClick={() =>  setDisplayFormBids(!displayFormBids)}
                            >Pasang Bid</button>
                        :
                            ''
                    }
                </div>
            </motion.div>
            {
                displayBids ?
                listBids.map((bid , index) => <CardBid key={bid.id} index={index} bid={bid}/>)
                : ""
            }
            <FormBid auctionId={auction.id} display={displayFormBids}/> 
        </>
    )
}

export default CardLelangItem
