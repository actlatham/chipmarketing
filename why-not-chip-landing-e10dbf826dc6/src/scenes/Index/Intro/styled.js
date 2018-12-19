import styled from 'styled-components';
import { Grid, Col } from 'react-styled-flexboxgrid';

import { BackgroundIcon } from './icons';

export const Container = styled.div`
  position: relative;
`;

export const BackgroundIconStyled = styled(BackgroundIcon)`
  bottom: 0;
  position: absolute;
  right: 0;
`;

export const GridStyled = styled(Grid)`
  border-bottom: solid 1px ${props => props.theme.colors.whiteTwo};
  padding-top: 116px;
  position: relative;
  z-index: 1;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    padding: 186px 0 105px 0;
  }
`;

export const Heart = styled.img`
  display: block;
  max-width: 100%;
`;

export const ColStyled = styled(Col)`
  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    display: flex;
  }
`;

export const Center = styled.div`
  margin: auto 0;
  padding: 0 40px;
  text-align: center;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    padding: 0;
    text-align: left;
  }
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.slate};
  font-size: 36px;
  font-weight: 400;
  line-height: 1.33;
  margin: 0;
`;

export const Description = styled.p`
  color: ${props => props.theme.colors.steel};
  font-size: 20px;
  line-height: 1.6;
  margin: 18px 0 22px 0;
`;

export const RequestButton = styled.button`
  background: ${props => props.theme.colors.aquamarine};
  border: 0;
  border-radius: 25px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  height: 50px;
  width: 100%;

  &:hover {
    background: ${props => props.theme.colors.aquamarineDarken};
  }

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    width: 194px;
  }
`;
