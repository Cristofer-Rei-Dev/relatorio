import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import OneItem from '../../components/Rows/OneItem'
import { MainContainer } from '../../styled/container'

function Report() {
    return (
        <MainContainer as={ScrollView}>
            <OneItem paragraphProps={{ fontSize: 20 }}>
                Relatório
            </OneItem>
        </MainContainer>
    )
}

export default Report
