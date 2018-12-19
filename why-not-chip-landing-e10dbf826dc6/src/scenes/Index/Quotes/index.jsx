import * as React from 'react';

import { GridStyled, ColStyled, Quote, Details, Picture, Name, About, RowStyled } from './styled';

import { toSrcSet } from 'src/services/helpers';

import DanielHarrisPicture from './images/DanielHarris.png';
import DanielHarrisPicture2 from './images/DanielHarris@2x.png';
import DanielHarrisPicture3 from './images/DanielHarris@3x.png';

import RichardFrankPicture from './images/RichardFrank.png';
import RichardFrankPicture2 from './images/RichardFrank@2x.png';
import RichardFrankPicture3 from './images/RichardFrank@3x.png';

const QUOTES = [
  {
    id: 1,
    about: 'Director of West Ham FC & Chip Investor',
    name: 'Daniel Harris',
    quote:
      'Chip is one of the fastest growing consumer Fintech companies in the UK. I have been delighted to have backed Chip since the beginning and this new investment will truly take the business to the next level.',
    pictures: [DanielHarrisPicture, DanielHarrisPicture2, DanielHarrisPicture3],
  },
  {
    id: 2,
    about: 'Sold Dial-A-Phone in 2008 & Chip Investor',
    name: 'Richard Frank',
    quote:
      'I have seen enormous growth & profit potential in Chip. The management team are experienced and their users are loving the product',
    pictures: [RichardFrankPicture, RichardFrankPicture2, RichardFrankPicture3],
  },
];

export default function Quotes() {
  return (
    <GridStyled>
      <RowStyled>
        {QUOTES.map((quote, index) => {
          const pictures = [...quote.pictures];
          const firstPicture = pictures.shift();

          const col = { key: quote.id, xs: 12, sm: 5 };
          if (index % 2) {
            col.smOffset = 2;
            col.odd = true;
          }

          return (
            <ColStyled {...col}>
              <Quote first={index === 0}>{quote.quote}</Quote>
              <Details>
                <Picture src={firstPicture} {...toSrcSet(pictures)} />
                <Name>{quote.name}</Name>
                <About>{quote.about}</About>
              </Details>
            </ColStyled>
          );
        })}
      </RowStyled>
    </GridStyled>
  );
}
