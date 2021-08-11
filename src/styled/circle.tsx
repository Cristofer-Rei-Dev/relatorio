import styled from 'styled-components/native';

interface iCircle {
    bg: string;
}

export const Circle = styled.View<iCircle>`
    background-color: ${(props) => props.bg || 'rgba(255, 255, 255, .2)'};
    padding: 10px;
    border-radius: 40px;
    margin-bottom: 8px;
`;
