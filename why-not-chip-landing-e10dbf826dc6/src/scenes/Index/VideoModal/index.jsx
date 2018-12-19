import * as React from 'react';
import PropTypes from 'prop-types';

import { Embed, EmbedContainer } from './styled';

import ModalContainer from 'src/components/ModalContainer';

function VideoModal({ src, onClose = () => {} }) {
  return (
    <ModalContainer col={{ xs: 12, md: 10, mdOffset: 1 }} onClose={onClose}>
      <EmbedContainer>
        <Embed src={src} allowFullScreen />
      </EmbedContainer>
    </ModalContainer>
  );
}
VideoModal.propTypes = {
  src: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default VideoModal;
