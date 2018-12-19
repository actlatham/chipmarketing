import styled from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';

export const GridStyled = styled(Grid)`
  border-bottom: solid 1px ${props => props.theme.colors.whiteTwo};
  margin: 0 40px;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  padding: 8px 0 40px 0;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 169px;
    padding: 0;
  }
`;

export const Logo = styled.img`
  display: block;
  margin: 30px auto 0 auto;
  max-width: 100%;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    margin: 0;
  }
`;
