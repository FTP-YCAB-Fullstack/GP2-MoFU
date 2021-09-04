import React from 'react'
import CardLelang from '../components/CardLelang'
import FormBarang from '../components/FormBarang'
import Modal from '../components/Modal'
import Content from '../components/Content'

const Home = () => {
    return (
        <div className="pb-20">
            <Content>
                <FormBarang />
                <CardLelang />
            </Content>
            <Modal />
        </div>
    )
}

export default Home
