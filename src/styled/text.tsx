import styled from 'styled-components/native';

export const Title = styled.Text`
    color: #ffffff;
    font-size: 25px;
`;
export const SubTitle = styled.Text`
    color: #ffffff;
    font-size: 22px;
`;

interface iParagraph {
    fontSize: number
}

export const Paragraph = styled.Text<iParagraph>`
    color: #ffffff;
    font-size: ${(props) => props.fontSize || 16}px;
`;