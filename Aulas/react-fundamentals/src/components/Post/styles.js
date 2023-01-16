import styled from "styled-components";

export const Container = styled.article`
  margin-bottom: 24px;
  opacity: ${(props) => props.removed ? 0.5 : 1};
  color: ${(props) => props.removed ? 'red' : '#FFF'};
`;

export const SubTitle = styled.small`
  display: block;
`;

export const Likes = styled.span`
  font-size: 10px;
  opacity: 0.7;
`;