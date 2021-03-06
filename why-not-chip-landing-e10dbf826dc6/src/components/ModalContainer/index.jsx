import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import { Container, Center, Content, CloseButton, BodyStyled, CloseIconStyled } from './styled';

function Body({ className }) {
  return (
    <Helmet>
      <body className={className} />
    </Helmet>
  );
}
Body.propTypes = {
  className: PropTypes.string,
};

export { Body };

export default class ModalContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
    col: PropTypes.object,
  };

  static defaultProps = {
    col: { xs: 12 },
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.props.onClose();
    }
  };

  render() {
    const { children, col, onClose } = this.props;

    return (
      <Container>
        <BodyStyled />
        <Center>
          <Grid>
            <Row>
              <Col {...col}>
                <Content>
                  <CloseButton onClick={onClose}>
                    <CloseIconStyled />
                  </CloseButton>
                  {children}
                </Content>
              </Col>
            </Row>
          </Grid>
        </Center>
      </Container>
    );
  }
}
