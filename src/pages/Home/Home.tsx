import * as React from 'react';
import { ScrollView } from 'react-native';
import { MainContainer, PaddingContainer } from '../../styled/container';
import { Paragraph, Title } from '../../styled/text';
import TwoItens from '../../components/Rows/TwoItens';
import OneItem from '../../components/Rows/OneItem';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-svg';

function HomeScreen() {
    const nav = useNavigation();
    return (
        <MainContainer as={ScrollView}>
            <PaddingContainer style={{ paddingRight: 30 }}>
                <Title>
                    Bem vindo!
                </Title>
                <Paragraph style={{ paddingTop: 10 }}>
                    Aqui você pode organizar seu trabalho de campo
                </Paragraph>
            </PaddingContainer>

            <OneItem>
                Estatisticas do mês
            </OneItem>

            <TwoItens
                left={{ bg: '#F468B0', icon: 'insights', text: 'Relatórios', onPress: function () { nav.navigate('Report') } }}
                right={{ bg: '#5E478F', icon: 'group', text: 'Revisitas', onPress: function () { nav.navigate('Study') } }}
            />
            <TwoItens
                style={{ marginTop: -30 }}
                left={{ bg: '#6482b3', icon: 'add', text: 'Adicionar serviço', onPress: function () { nav.navigate('RegisterTime') } }}
                right={{ bg: '#E98502', icon: 'phone', text: 'Números e endereços', onPress: function () { nav.navigate('List') } }}
            />
            <TwoItens
                style={{ marginTop: -30 }}
                left={{ bg: '#F468B0', icon: 'lightbulb', text: 'Metas', onPress: function () { nav.navigate('Relatorio') } }}
                right={{ bg: '#5E478F', icon: 'phone', text: 'Configurações', onPress: function () { nav.navigate('Config') } }}
            />
        </MainContainer>
    );
}

export default HomeScreen;