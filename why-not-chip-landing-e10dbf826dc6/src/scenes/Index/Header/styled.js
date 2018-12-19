import styled from 'styled-components';

import { LogoIcon } from './icons';

export const Container = styled.header`
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
`;

export const LogoIconStyled = styled(LogoIcon)`
  left: 50%;
  position: absolute;
  top: 40px;
  transform: translateX(-50%);

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    left: 60px;
    transform: none;
  }
`;

export const RequestButton = styled.button`
  background: ${props => props.theme.colors.white};
  border: solid 1px ${props => props.theme.colors.whiteTwo};
  border-radius: 25px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: ${props => props.theme.colors.aquamarine};
  display: none;
  font-size: 16px;
  font-weight: 500;
  height: 50px;
  position: absolute;
  right: 1rem;
  top: 15px;
  width: 194px;

  &:hover {
    color: ${props => props.theme.colors.aquamarineDarken};
  }

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    display: initial;
    right: 60px;
    top: 35px;
  }
`;
