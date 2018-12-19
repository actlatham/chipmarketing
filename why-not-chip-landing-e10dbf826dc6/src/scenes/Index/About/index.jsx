import * as React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import { GridStyled, Picture, Center, ColStyled, Title, Paragraph } from './styled';

import { toSrcSet } from 'src/services/helpers';

import ScreenshotPicture from './images/Screenshot.jpg';
import ScreenshotPicture2 from './images/Screenshot@2x.jpg';
import ScreenshotPicture3 from './images/Screenshot@3x.jpg';

export default function About() {
  return (
    <GridStyled>
      <Row>
        <Col xs={12} sm={6}>
          <Picture src={ScreenshotPicture} {...toSrcSet(ScreenshotPicture2, ScreenshotPicture3)} />
        </Col>
        <ColStyled xs={12} sm={5} smOffset={1}>
          <Center>
            <Title>What is Chip?</Title>
            <Paragraph>
              Chip is beginning its journey towards becoming a fully licensed bank, and building the
              best savings account in the world.
            </Paragraph>
            <Paragraph>
              A savings account that helps you save more of your money and spend less of it on
              interest.
            </Paragraph>
          </Center>
        </ColStyled>
      </Row>
    </GridStyled>
  );
}
