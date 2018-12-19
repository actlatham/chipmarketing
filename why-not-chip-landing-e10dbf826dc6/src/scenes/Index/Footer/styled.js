import styled from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';

import { FacebookIcon, InstagramIcon } from './icons';

export const Container = styled.footer`
  padding: 2rem 1rem;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
    padding: 129px 0 135px 0;
  }
`;

export const Note = styled.p`
  color: ${props => props.theme.colors.blueyGrey};
  line-height: 2;
  margin: 120px 0 0 0;
`;

export const SectionTitle = styled.h4`
  color: ${props => props.theme.colors.slateTwo};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.88;
  margin: 1.5rem 0 0 0;
  opacity: 0.8;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
    margin: 0;
  }
`;

export const List = styled.ul`
  margin: 6px 0 0 0;
  overflow: hidden;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-top: 6px;
`;

export const FacebookIconStyled = styled(FacebookIcon)`
  margin: 0 10px -5px 0;

  path {
    transition: fill 0.3s ease-in-out;
  }
`;

export const InstagramIconStyled = FacebookIconStyled.withComponent(InstagramIcon);

const linkColors = {
  blue: ['denimBlue', 'denimBlueDarken'],
  default: ['slateTwo', 'slateTwoDarken'],
  green: ['aquamarine', 'aquamarineDarken'],
  red: ['darkishPink', 'darkishPinkDarken'],
};

export const ListUrl = styled.a`
  color: ${props => props.theme.colors[linkColors[props.color || 'default'][0]]};
  line-height: 1.88;
  text-transform: capitalize;

  &:hover {
    color: ${props => props.theme.colors[linkColors[props.color || 'default'][1]]};

    ${FacebookIconStyled} path {
      fill: ${props => props.theme.colors[linkColors.blue[1]]};
    }

    ${InstagramIconStyled} path {
      fill: ${props => props.theme.colors[linkColors.red[1]]};
    }
  }
`;

export const GridStyled = styled(Grid)`
  position: relative;
`;
