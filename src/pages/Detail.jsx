import React from 'react'
import Content from '../components/Content'
import CovidCase from '../components/CovidCase'
import CardRekening from '../components/CardRekening'
import DetailAuction from '../components/DetailAuction'

const Detail = () => {
    return (
        <div className="pb-20 flex text-gray-600 bg-gray-100">
            <CovidCase />
            <Content>
                <DetailAuction />
            </Content>
            <CardRekening />
        </div>
    )
}

export default Detail
