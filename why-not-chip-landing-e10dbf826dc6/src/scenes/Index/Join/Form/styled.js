import styled from 'styled-components';

import { DudeIcon, WomanIcon } from './icons';

export const Outer = styled.div`
  position: relative;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    padding: 0 0 140px 0;
  }
`;

export const Container = styled.div`
  background: ${props => props.theme.colors.white};
  border: solid 1px ${props => props.theme.colors.whiteTwo};
  border-radius: 22px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
  padding: 25px 20px 20px 20px;
  position: relative;
  z-index: 1;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    flex-direction: row;
    padding: 40px 40px 20px 40px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    flex-direction: row;
  }
`;

export const Input = styled.input`
  background: ${props => props.theme.colors.white};
  border: solid 1px ${props => props.theme.colors.whiteThree};
  border-radius: 5px;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  color: ${props => props.theme.colors.slate};
  flex-grow: 1;
  font: inherit;
  height: 50px;
  padding: 15px 16px;
  margin-bottom: ${props => (props.name === 'name' ? 20 : 15)}px;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    margin: 0 1rem 0 0;
  }
`;

export const RequestButton = styled.button.attrs({ type: 'submit' })`
  background: ${props => props.theme.colors.aquamarine};
  border: 0;
  border-radius: 25px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  color: ${props => props.theme.colors.white};
  flex-grow: 1;
  font-size: 16px;
  font-weight: 500;
  height: 50px;

  &:hover {
    background: ${props => props.theme.colors.aquamarineDarken};
  }

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    max-width: 223px;
  }
`;

export const DudeIconStyled = styled(DudeIcon)`
  bottom: -83px;
  position: absolute;
  right: -254px;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    bottom: 0;
    right: -200px;
  }
`;

export const WomanIconStyled = styled(WomanIcon)`
  bottom: -74px;
  left: -213px;
  position: absolute;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    bottom: 0;
    left: -200px;
  }
`;

export const Info = styled.h5`
  color: ${props => props.theme.colors.slate};
  font-size: 14px;
  font-weight: 500;
  margin: 17px 0 0 0;
  text-align: center;
`;

export const Highlight = styled.strong`
  color: ${props => props.theme.colors.aquamarine};
  font-size: 16px;
  font-weight: 500;
`;
