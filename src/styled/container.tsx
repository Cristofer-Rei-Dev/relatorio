import styled from 'styled-components/native';

export const MainContainer = styled.View`
  background-color: #101428;
`;

interface iPaddingContainer {
  top?: string;
  left?: string;
  right?: string;
}

export const PaddingContainer = styled.View<iPaddingContainer>`
  padding-top: ${(props) => props.top || 40}px;
  padding-left: ${(props) => props.left || 20}px;
  padding-right: ${(props) => props.right || 20}px;
`;

interface iBoxList {
  isFullSized?: boolean;
}

export const BoxList = styled.View<iBoxList>`
  flex: 1;
  background-color: rgba(255, 255, 255, .15);
  min-width: ${(props) => props.isFullSized ? 99 : 49}%;
  max-width:  ${(props) => props.isFullSized ? 99 : 49}%;
  padding: 15px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;