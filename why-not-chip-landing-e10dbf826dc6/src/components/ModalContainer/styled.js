import styled, { keyframes } from 'styled-components';

import { Body } from './index';
import { CloseIcon } from './icons';

const containerAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  animation: ${containerAnimation} 0.5s ease-in-out;
  backdrop-filter: blur(1.8px);
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
`;

export const Content = styled.div`
  position: relative;
`;

export const CloseIconStyled = styled(CloseIcon)`
  transition: transform 0.3s ease-in-out;
`;

export const CloseButton = styled.button.attrs({ type: 'button' })`
  background: #000;
  border: 0;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
  height: 50px;
  padding: 0;
  position: absolute;
  right: 0;
  top: -66px;
  width: 50px;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    right: -66px;
    top: 0;
  }

  &:hover ${CloseIconStyled} {
    transform: rotate(180deg);
  }
`;

export const BodyStyled = styled(Body)`
  overflow: hidden;
`;

export const Center = styled.div`
  margin: auto;
  padding: 5rem 1rem;
  width: 100%;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    padding: 0;
    width: auto;
  }
`;
