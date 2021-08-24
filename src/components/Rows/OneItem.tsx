import React from 'react'
import { BoxList, PaddingContainer } from '../../styled/container'
import { Paragraph } from '../../styled/text'

interface iOneItemProps {
    bg?: string;
    icon?: string;
    text?: string;
    onPress?: CallableFunction;
    paragraphProps?: any;
}

const OneItem: React.FunctionComponent<iOneItemProps> = (props) => {
    return (
        <PaddingContainer style={{ flexDirection: 'row' }}>
            <BoxList isFullSized={true} style={{ marginRight: 10 }}>
                <Paragraph {...props.paragraphProps}>
                    {props.text || props.children}
                </Paragraph>
            </BoxList>
        </PaddingContainer>
    )
}

export default OneItem
