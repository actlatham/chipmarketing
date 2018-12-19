import * as React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-styled-flexboxgrid';

import { Container, GridStyled, Heading, Highlight, Paragraph } from './styled';

import Form from './Form';
import Progress from './Progress';

function Join({ count, percent, innerRef = () => {} }) {
  return (
    <Container innerRef={innerRef}>
      <GridStyled>
        <Row>
          <Col xs={12} sm={6} smOffset={3}>
            <Heading>
              Join the <Highlight>{count}</Highlight> Investors
            </Heading>
            <Progress value={percent} />
            <Paragraph>
              Enter email address and you will be sent a link with option to invest? I don’t know
              but the end confirmation can be shown after users sign up -> about the link etc.
            </Paragraph>
          </Col>
        </Row>
        <Form investorsCount={count} />
      </GridStyled>
    </Container>
  );
}
Join.propTypes = {
  count: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
  innerRef: PropTypes.func,
};

export default Join;
