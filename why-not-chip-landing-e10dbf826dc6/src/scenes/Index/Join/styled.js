import styled from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';

export const Container = styled.div`
  border-bottom: solid 1px ${props => props.theme.colors.whiteTwo};
  max-width: 100%;
  overflow: hidden;
  padding: 0 40px 52px 40px;
  position: relative;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    padding: 0;
  }
`;

export const GridStyled = styled(Grid)`
  padding-top: 35px;
  position: relative;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    padding-top: 135px;
  }
`;

export const Heading = styled.h3`
  color: ${props => props.theme.colors.slate};
  font-size: 24px;
  font-weight: 400;
  margin: 0;
  text-align: center;
`;

export const Highlight = styled.strong`
  color: ${props => props.theme.colors.aquamarine};
  font-size: 36px;
  font-weight: 500;
`;

export const Paragraph = styled.p`
  line-height: 2;
  letter-spacing: 0.2px;
  margin: 0 0 20px 0;
  text-align: center;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    margin-bottom: 54px;
  }
`;
