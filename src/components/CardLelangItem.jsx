import React  , { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardBid from './CardBid'
import FormBid from './FormBid'

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? 1 : (a[property] > b[property]) ? -1 : 0;
        return result * sortOrder;
    }
}


const CardLelangItem = ({ auction }) => {
    const [displayBids, setDisplayBids] = useState(false)
    const [displayFormBids, setDisplayFormBids] = useState(false);
    const [user, setUser] = useState(null)
    const [listBids, setListBids] = useState([])
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
        matchBid = matchBid.sort(dynamicSort("nominal")).slice(0,3)
        setListBids([...matchBid])
    } , [bids])

    return (
        <>
            <div className="bg-blue-100 p-10 rounded-lg my-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {
                            user ?
                            <>
                                <div className="bg-blue-400 overflow-hidden rounded-full w-12 h-12">
                                    <img src={user.avatar} alt="user" />
                                </div>
                                <h4 className="text-lg font-semibold">{user.name}</h4>
                            </>
                            : ""
                        }
                    </div>
                    <p className="text-lg font-semibold text-red-400">
                        {auction.date}
                    </p>
                </div>
                <div className="h-72 w-full overflow-hidden flex items-center justify-center rounded-md my-8">
                    <img src={auction.image_url} alt="Example item" />
                </div>
                <div>
                    <h3 className="text-lg font-bold">{auction.name}</h3>
                    <p>{auction.description}</p>
                </div>
                <div className="flex justify-around mt-4">
                    <button className="bg-white py-2 px-8 rounded-md font-semibold text-gray-600"
                        onClick={() => setDisplayBids(!displayBids)}
                    >Lihat Bid</button>
                    {
                        auth.status && 
                            (
                                new Date(auction.date) > new Date() ||
                                new Date(auction.date).toDateString() === new Date().toDateString()
                            )
                        ?  
                            <button className="bg-white py-2 px-8 rounded-md font-semibold text-gray-600" 
                                onClick={() =>  setDisplayFormBids(!displayFormBids)}
                            >Pasang Bid</button>
                        :
                            ''
                    }
                </div>
            </div>
            
            <div className={displayBids ? "block" : 'hidden'}>
                {
                    listBids.map(bid => <CardBid key={bid.id} bid={bid}/>)
                }
            </div>
            <FormBid auctionId={auction.id} display={displayFormBids}/> 
        </>
    )
}

export default CardLelangItem
