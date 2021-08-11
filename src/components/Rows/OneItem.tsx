import React from 'react'
import { BoxList, PaddingContainer } from '../../styled/container'
import { Paragraph } from '../../styled/text'

interface iOneItemProps {
    bg?: string;
    icon?: string;
    text?: string;
    onPress?: CallableFunction;
}

const OneItem: React.FunctionComponent<iOneItemProps> = (props) => {
    const style = {};
    return (
        <PaddingContainer style={{ flexDirection: 'row' }}>
            <BoxList isFullSized={true} style={{ marginRight: 10 }}>
                <Paragraph>
                    {props.text || props.children}
                </Paragraph>
            </BoxList>
        </PaddingContainer>
    )
}

export default OneItem
