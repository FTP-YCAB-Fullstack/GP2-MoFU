import React , { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAuction } from './redux/actions/auctions'
import axios from './axios'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

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
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </>
    )
}

export default App
