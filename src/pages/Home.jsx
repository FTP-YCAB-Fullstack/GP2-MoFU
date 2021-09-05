import React from 'react'
import CardLelang from '../components/CardLelang'
import FormBarang from '../components/FormBarang'
import Modal from '../components/Modal'
import Content from '../components/Content'
import CovidCase from '../components/CovidCase'
import CardRekening from '../components/CardRekening'
import { useSelector } from 'react-redux'

const Home = () => {
    const auth = useSelector(state => state.auth )
    return (
        <div className="pb-20 flex">
            <CovidCase />
            <Content>
                { 
                    auth.status ? <FormBarang  /> : ""
                }
                <CardLelang />
            </Content>
            <CardRekening />
            <Modal />
        </div>
    )
}

export default Home
