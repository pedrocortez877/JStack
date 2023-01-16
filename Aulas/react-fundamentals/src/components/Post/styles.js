import styled, { css } from "styled-components";

export const Container = styled.article`
  margin-bottom: 24px;

  ${(props) => css`
    opacity: ${props.removed ? 0.5 : 1};
    color: ${props.removed ? 'red' : '#FFF'};
  `}
`;

export const SubTitle = styled.small`
  display: block;
`;

export const Likes = styled.span`
  font-size: 10px;
  opacity: 0.7;
`;