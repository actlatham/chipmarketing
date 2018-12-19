import * as React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-styled-flexboxgrid';

import {
  Container,
  BackgroundIconStyled,
  GridStyled,
  Heart,
  ColStyled,
  Center,
  Title,
  Description,
  RequestButton,
} from './styled';

import { toSrcSet } from 'src/services/helpers';

import HeartIcon from './images/Heart.png';
import HeartIcon2 from './images/Heart@2x.png';
import HeartIcon3 from './images/Heart@3x.png';

function Intro({ onRequest = () => {} }) {
  return (
    <Container>
      <GridStyled>
        <Row>
          <ColStyled xs={12} sm={6}>
            <Center>
              <Title>Join us on our mission, building the best savings account in the world.</Title>
              <Description>
                We are raising £2.4 million and allocating £600,000 of that to you, our Chip savers.
              </Description>
              <RequestButton onClick={onRequest}>Request Access</RequestButton>
            </Center>
          </ColStyled>
          <Col xs={12} sm={6}>
            <Heart src={HeartIcon} {...toSrcSet(HeartIcon2, HeartIcon3)} />
          </Col>
        </Row>
      </GridStyled>
      <BackgroundIconStyled />
    </Container>
  );
}
Intro.propTypes = {
  onRequest: PropTypes.func,
};

export default Intro;
