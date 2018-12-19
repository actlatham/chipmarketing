import * as React from 'react';

import { GridStyled, Container, Logo } from './styled';

import { toSrcSet } from 'src/services/helpers';

import IndependentLogo from './images/Independent.png';
import IndependentLogo2 from './images/Independent@2x.png';
import IndependentLogo3 from './images/Independent@3x.png';

import LondonEveningStandardLogo from './images/LondonEveningStandard.png';
import LondonEveningStandardLogo2 from './images/LondonEveningStandard@2x.png';
import LondonEveningStandardLogo3 from './images/LondonEveningStandard@3x.png';

import TechCrunchLogo from './images/TechCrunch.png';
import TechCrunchLogo2 from './images/TechCrunch@2x.png';
import TechCrunchLogo3 from './images/TechCrunch@3x.png';

import TheGuardianLogo from './images/TheGuardian.png';
import TheGuardianLogo2 from './images/TheGuardian@2x.png';
import TheGuardianLogo3 from './images/TheGuardian@3x.png';

const BRANDS = [
  {
    id: 1,
    logo: [LondonEveningStandardLogo, LondonEveningStandardLogo2, LondonEveningStandardLogo3],
    url: 'https://www.standard.co.uk/',
  },
  {
    id: 2,
    logo: [TheGuardianLogo, TheGuardianLogo2, TheGuardianLogo3],
    url: 'https://www.theguardian.com/',
  },
  {
    id: 3,
    logo: [TechCrunchLogo, TechCrunchLogo2, TechCrunchLogo3],
    url: 'https://techcrunch.com/',
  },
  {
    id: 4,
    logo: [IndependentLogo, IndependentLogo2, IndependentLogo3],
    url: 'https://www.independent.co.uk/',
  },
];

export default function Brands() {
  return (
    <GridStyled>
      <Container>
        {BRANDS.map(brand => {
          const images = [...brand.logo];
          const firstImage = images.shift();
          return (
            <a href={brand.url} target="_blank">
              <Logo key={brand.id} src={firstImage} {...toSrcSet(images)} />
            </a>
          );
        })}
      </Container>
    </GridStyled>
  );
}
