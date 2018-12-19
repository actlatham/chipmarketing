import styled from 'styled-components';
import { Grid, Col } from 'react-styled-flexboxgrid';

export const GridStyled = styled(Grid)`
  border-bottom: solid 1px ${props => props.theme.colors.whiteTwo};
  margin: 0 40px;
  padding: 40px 0 30px 0;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    margin: 0 auto;
    padding: 140px 0;
  }
`;

export const Picture = styled.img`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
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
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.slate};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  margin: 20px 0 0 0;
  text-align: center;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    margin: 0;
    text-align: left;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 2;
  letter-spacing: 0.2px;
  margin: 10px 0 0 0;
`;
