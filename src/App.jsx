import React , { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuctions } from './redux/actions/auctions'
import { fetchUsers } from './redux/actions/users'
import { fetchBids } from './redux/actions/bids'
import { positive,recovery,death } from './redux/actions/covid' 

 
import axios from './axios'
import { Route, Switch , Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Navbar from './components/Navbar'

const PrivateRoute  = (props) => {
    const auth = useSelector(state => state.auth)
    return auth.status ? 
        <Route {...props} >{props.children}</Route>
    :
        <Redirect to="/" />
}

const App = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                let auctions = await axios.get('/auctions')
                auctions = auctions.data
                dispatch(fetchAuctions(auctions))
                let users = await axios.get(`/users`)
                users = users.data
                dispatch(fetchUsers(users))
                let bids = await axios.get('/bids')
                bids = bids.data
                dispatch(fetchBids(bids))

                // fetch covid
                // https://apicovid19indonesia-v2.vercel.app/api/indonesia
                let dataCovid = await axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia')
                dataCovid = dataCovid.data
                dispatch(positive(dataCovid.positif))
                dispatch(recovery(dataCovid.sembuh))
                dispatch(death(dataCovid.meninggal))

                
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute path="/admin" component={Admin} /> 
            </Switch>
        </>
    )
}

export default App
