import styled, { css } from 'styled-components';

export const Container = styled.img`
  ${({ theme }) => css`
    width: 900px;
    height: 450px;
    max-width: 100%;
    margin-bottom: ${theme.spacings.medium};
  `}
`;
