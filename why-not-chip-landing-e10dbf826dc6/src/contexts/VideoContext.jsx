import * as React from 'react';
import PropTypes from 'prop-types';

export const VideoContext = React.createContext();

export default class VideoProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  state = {
    visible: false,
  };

  handleHide = () => {
    this.setState({ visible: false });
  };

  handleShow = () => {
    this.setState({ visible: true });
  };

  render() {
    const { visible } = this.state;

    return (
      <VideoContext.Provider value={{ visible, onHide: this.handleHide, onShow: this.handleShow }}>
        {this.props.children}
      </VideoContext.Provider>
    );
  }
}
