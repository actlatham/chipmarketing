import * as React from 'react';
import scrollToComponent from 'react-scroll-to-component';

import About from './About';
import Brands from './Brands';
import Footer from './Footer';
import Header from './Header';
import Intro from './Intro';
import Join from './Join';
import Quotes from './Quotes';
import Video from './Video';
import VideoModal from './VideoModal';

import InvestorsProvider, { InvestorsContext } from 'src/contexts/InvestorsContext';
import VideoProvider, { VideoContext } from 'src/contexts/VideoContext';

export default class Index extends React.Component {
  joinComponent = null;

  handleRequest = () => {
    scrollToComponent(this.joinComponent);
  };

  render() {
    return (
      <InvestorsProvider>
        <VideoProvider>
          <Header onRequest={this.handleRequest} />
          <Intro onRequest={this.handleRequest} />
          <Brands />
          <About />
          <Quotes />
          <Video />
          <InvestorsContext.Consumer>
            {state => <Join innerRef={c => (this.joinComponent = c)} {...state} />}
          </InvestorsContext.Consumer>
          <Footer />
          <VideoContext.Consumer>
            {({ onHide, visible }) =>
              visible && <VideoModal src={process.env.VIDEO_EMBED_URL} onClose={onHide} />
            }
          </VideoContext.Consumer>
        </VideoProvider>
      </InvestorsProvider>
    );
  }
}
