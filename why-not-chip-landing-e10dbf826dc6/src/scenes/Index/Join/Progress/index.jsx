import * as React from 'react';
import PropTypes from 'prop-types';

import { Container, Bar } from './styled';

function Progress({ value = 0 }) {
  return (
    <Container>
      <Bar value={value}>{value}%</Bar>
    </Container>
  );
}
Progress.propTypes = {
  value: PropTypes.number,
};

export default Progress;
