import styled from 'styled-components';
import { Grid, Col } from 'react-styled-flexboxgrid';

export const GridStyled = styled(Grid)`
  border-bottom: solid 1px ${props => props.theme.colors.whiteTwo};
  margin: 0 40px;
  padding: 40px 0;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    margin: 0 auto;
    padding: 140px 0;
  }
`;

export const ColStyled = styled(Col)`
  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    display: flex;
  }
`;

export const Thumbnail = styled.img`
  cursor: pointer;
  display: block;
  max-width: 100%;
`;

export const Center = styled.div`
  margin: auto 0;
  padding-top: 30px;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    padding: 0;
  }
`;

export const Heading = styled.h3`
  color: ${props => props.theme.colors.slate};
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  text-align: center;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    text-align: left;
  }
`;

export const Paragraph = styled.p`
  line-height: 2;
  letter-spacing: 0.2px;
  margin: 20px 0;
`;

export const WatchButton = styled.button.attrs({ type: 'button' })`
  background: ${props => props.theme.colors.white};
  border: solid 1px ${props => props.theme.colors.veryLightPink};
  border-radius: 25px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: ${props => props.theme.colors.aquamarine};
  font-size: 16px;
  font-weight: 500;
  height: 50px;
  width: 100%;

  &:hover {
    color: ${props => props.theme.colors.aquamarineDarken};
  }

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    width: 144px;
  }
`;
