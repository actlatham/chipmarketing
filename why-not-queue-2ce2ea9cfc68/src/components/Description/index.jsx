import * as React from 'react';

import {
  Container,
  Box,
  Content,
  Buttons,
  MoreButton,
  RequestButton,
  ChipIconStyled,
  IconContainer,
  Video,
  VideoPreload,
} from './styled';
import { Heading, Paragraph } from 'src/components/Typography';

import Queue from './Queue';

import { normalize } from 'src/services/helpers';

import Background from './Queue/videos/Background.mp4';
import FirstVideo from './videos/First.mp4';
import FourthVideo from './videos/Fourth.mp4';
import SecondVideo from './videos/Second.mp4';
import ThirdVideo from './videos/Third.mp4';

const MESSAGES = [
  {
    id: 1,
    nextId: 2,
    title: 'Welcome to Chip 2.0',
    description:
      'Bringing you smarter AI and even more brilliant ways to save for the things that matter to you. We can’t wait for you to see it.',
    video: FirstVideo,
  },
  {
    id: 2,
    nextId: 3,
    title: 'Goals',
    description:
      'Meet ‘Goals’. Now you can have as many goals as you want! Chip will give you intelligent recommendations as to when you’ll reach them and warn you if you’re ‘off track’ based on your recent spending.',
    video: SecondVideo,
  },
  {
    id: 3,
    nextId: 4,
    title: 'Returns',
    description:
      'There are tons of new ways to get the most out of your savings. Our new LockIn bonus gives you extra interest if you don’t withdraw. With Chip 2.0, good saving automatically gets a good return.',
    video: ThirdVideo,
  },
  {
    id: 4,
    title: 'Social',
    description:
      'Chip 2.0 has become social -- meet Friends List. Friends List is the home of your very own Chip community. Set up ‘Squad Goals’ to motivate each other and get 1% interest for every friend on your list.',
    moreButton: false,
    video: FourthVideo,
  },
];

export default class Description extends React.Component {
  state = {
    message: 0,
    messages: [],
    queue: false,
  };

  componentDidMount() {
    this.setState({
      message: MESSAGES[0],
      messages: normalize(MESSAGES),
    });
  }

  handleMoreButton = () => {
    const { message, messages } = this.state;
    this.setState({ message: messages[message.nextId] });
  };

  handleRequestButton = () => {
    this.setState({ queue: true });
  };

  render() {
    const { message, messages, queue } = this.state;

    if (queue) return <Queue />;

    return (
      <Container>
        <Video src={message.video} autoPlay loop muted playsInline />
        <Content>
          {Object.values(messages).map(msg => (
            <Box key={msg.id} current={msg.id === message.id}>
              <Heading>{msg.title}</Heading>
              <Paragraph>{msg.description}</Paragraph>
              <IconContainer>
                <ChipIconStyled />
              </IconContainer>
              <VideoPreload src={messages.video} preload="auto" />
            </Box>
          ))}
          <Buttons>
            <RequestButton type="button" onClick={this.handleRequestButton}>
              Check my upgrade
            </RequestButton>
            {message.moreButton !== false && (
              <MoreButton type="button" onClick={this.handleMoreButton}>
                Tell me more
              </MoreButton>
            )}
          </Buttons>
        </Content>
        <VideoPreload src={Background} preload="auto" />
      </Container>
    );
  }
}
