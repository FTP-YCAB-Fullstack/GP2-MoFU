import React,{useEffect , useState} from 'react'
import { useSelector } from 'react-redux'
import bidOne from '../assets/bid-one.svg'
import bidTwo from '../assets/bid-two.svg'
import bidThree from '../assets/bid-three.svg'
import { motion } from 'framer-motion'

const CardBid = ({ bid , index }) => {
    const [user, setUser] = useState(null)
    const users = useSelector(state => state.users)

    useEffect(() => {
        users.forEach(user => {
            if(user.id === bid.user_id){
                setUser(user)
            }
        })
    } , [bid , users])

    const icons = [bidOne, bidTwo , bidThree]
    return (
        <motion.div 
            initial={{ opacity: 0 , y: 100 }}
            animate={{ opacity: 1 , y: 0 }}
            transition={{ duration: 1.4 , delay: .2* index , type: 'spring' , bounce: 0.7 }}
        className={(index===0? "border-4 border-green-400":"") + " bg-white border-box shadow-md flex items-center gap-4 rounded-lg px-10 py-6 my-2"}>
            {
                !!user ? 
                <>
                    <div className="bg-white w-10 h-10 rounded-full overflow-hidden">
                        <img src={user.avatar} alt="profile user" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between w-full md:items-center">
                        <div className="bg-green-50 rounded-lg py-2 px-4 md:px-8" style={{width: 'fit-content'}}>
                            <h5 className="whitespace-nowrap font-semibod text-base md:text-2xl">Rp {Intl.NumberFormat('id-ID').format(bid.nominal)}</h5>
                            <h4 className="whitespace-nowrap text-xs md:text-base font-bold">{user.name}</h4>
                        </div>
                        <div className="flex items-center gap-4 md:gap-8 mt-2 ml-4 md:mt-0">
                            <div className="text-xs md:text-base font-semibold">{bid.createdAt.slice(0, 10)}</div>
                            <div>
                                <img src={icons[index]} alt="icon-winner" className="w-4 md:w-10"/>
                            </div>
                        </div>
                    </div>
                </> 
                :
                ''
            }
        </motion.div>
    )
}

export default CardBid
