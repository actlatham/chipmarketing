import * as React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Input,
  RequestButton,
  DudeIconStyled,
  Outer,
  WomanIconStyled,
  Highlight,
  Info,
  Row,
} from './styled';

export default class Form extends React.Component {
  static propTypes = {
    investorsCount: PropTypes.number.isRequired,
  };

  handleForm = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Outer>
        <WomanIconStyled />
        <form onSubmit={this.handleForm}>
          <Container>
            <Row>
              <Input type="email" name="email" placeholder="Your Email" />
              <Input type="text" name="name" placeholder="Full Name" />
              <RequestButton>Request Access</RequestButton>
            </Row>
            <Info>
              <Highlight>{this.props.investorsCount}</Highlight> Investors already on board
            </Info>
          </Container>
        </form>
        <DudeIconStyled />
      </Outer>
    );
  }
}
