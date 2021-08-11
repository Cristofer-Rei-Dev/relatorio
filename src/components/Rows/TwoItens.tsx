import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Circle } from '../../styled/circle'
import { BoxList, PaddingContainer } from '../../styled/container'
import { Paragraph } from '../../styled/text'

type options = {
    bg: string;
    icon: string;
    text: string;
    onPress: () => void;
}

interface iTwoItensProps {
    style?: any;
    left: options;
    right: options
}

const TwoItens: React.FunctionComponent<iTwoItensProps> = (props) => {
    const style = {};
    if (props.style) Object.assign(style, props.style);
    return (
        <PaddingContainer style={{ flexDirection: 'row', ...style }}>
            <BoxList style={{ marginRight: 10 }} as={TouchableOpacity} onPress={props.left.onPress}>
                <Circle bg={props.left.bg}>
                    <Icon name={props.left.icon} size={30} color={"#eee"} />
                </Circle>
                <Paragraph>
                    {props.left.text}
                </Paragraph>
            </BoxList>
            <BoxList  as={TouchableOpacity} onPress={props.right.onPress}>
                <Circle bg={props.right.bg}>
                    <Icon name={props.right.icon} size={30} color={"#eee"} />
                </Circle>
                <Paragraph>
                    {props.right.text}
                </Paragraph>
            </BoxList>
        </PaddingContainer>
    )
}

export default TwoItens
