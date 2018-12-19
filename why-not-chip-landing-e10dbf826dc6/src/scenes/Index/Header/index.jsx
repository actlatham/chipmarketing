import * as React from 'react';
import PropTypes from 'prop-types';

import { Container, LogoIconStyled, RequestButton } from './styled';

function Header({ onRequest = () => {} }) {
  return (
    <Container>
      <LogoIconStyled />
      <RequestButton onClick={onRequest}>Request Access</RequestButton>
    </Container>
  );
}
Header.propTypes = {
  onRequest: PropTypes.func,
};

export default Header;
