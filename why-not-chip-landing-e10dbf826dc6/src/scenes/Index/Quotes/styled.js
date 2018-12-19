import styled, { css } from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

export const GridStyled = styled(Grid)`
  border-bottom: solid 1px ${props => props.theme.colors.whiteTwo};
  margin: 0 40px;
  padding-bottom: 33px;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    margin: 0 auto;
    padding-bottom: 47px;
  }
`;

export const RowStyled = styled(Row)`
  position: relative;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    padding: 83px 0;
  }
`;

export const ColStyled = styled(Col)`
  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    display: flex;
    flex-direction: column;

    ${props =>
      props.odd &&
      css`
        &::before {
          background: ${props.theme.colors.whiteTwo};
          bottom: 0;
          content: '';
          height: 69%;
          left: 50%;
          position: absolute;
          width: 1px;
        }
      `};
  }
`;

export const Quote = styled.p`
  color: ${props => props.theme.colors.slate};
  font-size: 20px;
  line-height: 1.6;
  margin: 33px 0 auto 0;
  padding-bottom: 1rem;
  text-align: center;

  &::before {
    color: ${props => props.theme.colors.aquamarine};
    content: '“ ';
    font-size: 26px;
  }

  ${props =>
    !props.first &&
    css`
      border-top: solid 1px ${props.theme.colors.whiteTwo};
      padding-top: 28px;
    `};

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    border: 0;
    margin-top: 0;
    padding-top: 0;
  }
`;

export const Details = styled.div`
  margin: auto 0 0 0;
  text-align: center;
`;

export const Picture = styled.img`
  border-radius: 50%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  display: block;
`;

export const Name = styled.h5`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.2px;
  margin: 9px 0 0 0;
`;

export const About = styled.h6`
  color: ${props => props.theme.colors.aquamarine};
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.2px;
  margin: 0;
`;
