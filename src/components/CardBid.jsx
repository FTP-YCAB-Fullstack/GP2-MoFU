import React,{useEffect , useState} from 'react'
import { useSelector } from 'react-redux'

const CardBid = ({ bid }) => {
    const [user, setUser] = useState(null)
    const users = useSelector(state => state.users)

    useEffect(() => {
        users.forEach(user => {
            if(user.id === bid.user_id){
                setUser(user)
            }
        })
    } , [bid , users])
    
    return (
        <div className="bg-blue-100 flex items-center gap-4 rounded-lg px-10 py-6 my-6">
            {
                !!user ?
                <>
                    <div className="bg-white w-10 h-10 rounded-full overflow-hidden">
                        <img src={user.avatar} alt="profile user" />
                    </div>
                    <div className="bg-white rounded-lg py-2 px-8" style={{width: 'fit-content'}}>
                        <h4>{user.name}</h4>
                        <h5>Rp {bid.nominal}</h5>
                    </div>
                </> 
                :
                ''
            }
        </div>
    )
}

export default CardBid
