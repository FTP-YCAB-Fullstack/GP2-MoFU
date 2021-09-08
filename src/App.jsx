import React , { useEffect , useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuctions } from './redux/actions/auctions'
import { fetchUsers } from './redux/actions/users'
import { fetchBids } from './redux/actions/bids'
import { positive,recovery,death } from './redux/actions/covid' 
import Modal from './components/Modal'

import axios from './axios'
import { Route, Switch , Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Admin from './pages/Admin'
import Navbar from './components/Navbar'
import { loginUser } from './redux/actions/auth'
import Covid from './pages/Covid'
import Payment from './pages/Payment'
import Loader from './components/Loader'

const PrivateRoute  = (props) => {
    const auth = useSelector(state => state.auth)
    return auth.status && auth.user.role_id === 1 ? 
        <Route {...props} >{props.children}</Route>
    :
        <Redirect to="/" />
}

const App = () => {
    const dispatch = useDispatch()
    const [loaders, setLoaders] = useState({
        auctions: true,
        users: true,
        bids: true,
        dataCovid: true,
    })
    
    useEffect(() => { 
        const fetchData = async () => {
            try {
                // cek status login in local storage
                const objLoading = {}
                let authLocal = localStorage.getItem('bid-donation')
                authLocal = JSON.parse(authLocal)
                if(authLocal && authLocal.login) { 
                    let userLogin = await axios.get(`/users/${authLocal.user_id}`)
                    dispatch(loginUser(userLogin.data))
                }
                
                let auctions = await axios.get('/auctions')
                auctions = auctions.data.reverse()
                if(auctions) objLoading.auctions = false 
                dispatch(fetchAuctions(auctions))
                let users = await axios.get(`/users`)
                users = users.data
                if(users) objLoading.users = false  
                dispatch(fetchUsers(users))
                let bids = await axios.get('/bids')
                bids = bids.data
                if(bids) objLoading.bids = false 
                dispatch(fetchBids(bids))

                // fetch covid
                // https://apicovid19indonesia-v2.vercel.app/api/indonesia
                let dataCovid = await axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia')
                dataCovid = dataCovid.data
                if(dataCovid) objLoading.dataCovid = false 

                setLoaders({...objLoading})
                dispatch(positive(dataCovid.positif))
                dispatch(recovery(dataCovid.sembuh))
                dispatch(death(dataCovid.meninggal))

            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    } , [])

    if(Object.values(loaders).indexOf(true) === -1) {
        return (
            <>
                <Navbar />
                <Modal />
                <div className="pt-8 pb-16 md:pb-0 md:pt-24 min-h-screen bg-gray-100">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/covid" component={Covid} />
                        <Route path="/payment" component={Payment} />
                        <PrivateRoute path="/admin" component={Admin} /> 
                        <PrivateRoute path="/detail/:id" component={Detail} />
                    </Switch>
                </div>
            </>
        )
    } else {
        return <Loader/> 
    }
}

export default App
