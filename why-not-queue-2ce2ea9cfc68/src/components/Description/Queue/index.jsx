import * as React from 'react';

import {
  Container,
  PositionContainer,
  Position,
  PositionText,
  Description,
  DescriptionContainer,
  DescriptionUrl,
  DescriptionUrlContainer,
  Features,
  FeaturesContainer,
  FeaturesList,
  FeaturesListItem,
  ShareButton,
  Content,
  Congratulations,
} from './styled';
import { Video } from '../styled';

import Background from './videos/Background.mp4';

const POSITION = 3445;
const SHARE_URL = 'https://getchip.uk/alex/DSG12/F';

export default class Queue extends React.Component {
  render() {
    return (
      <Container>
        <Video src={Background} autoPlay loop muted playsInline />
        <Content>
          <PositionContainer>
            <Congratulations>Congratulations! You're in the queue...</Congratulations>
            <Position>
              <PositionText text>Queue Position</PositionText>
              <PositionText number>{POSITION}</PositionText>
            </Position>
          </PositionContainer>
          <DescriptionContainer>
            <Description>
              Goals - Meet ‘Dynamic Goals’. Our enhanced AI will give you intelligent
              recommendations as to when you'll reach your target and warn you if you're ’off
              track’. You can even save with friends by adding them to your ’Squad goals’.
            </Description>
            <Description>
              Friends List - Chip 2.0 has gone social. Our ‘Friends list‘ feature is the home of
              your very own Chip Community. Set up ‘Squad goals‘ and motivate each other to reach
              your target. You'll get 1% interest for every new Chip saver you add.
            </Description>
            <DescriptionUrlContainer>
              <DescriptionUrl type="button">{SHARE_URL.replace(/^https?:\/\//, '')}</DescriptionUrl>
            </DescriptionUrlContainer>
          </DescriptionContainer>
          <FeaturesContainer>
            <Features>Every friend you add entitles you to</Features>
            <FeaturesList>
              <FeaturesListItem data-icon="🚶">
                Jump 1000 places in the queue to 2.0
              </FeaturesListItem>
              <FeaturesListItem data-icon="😈">They jump with you too</FeaturesListItem>
              <FeaturesListItem data-icon="📈">Get 1% Interest</FeaturesListItem>
              <FeaturesListItem data-icon=" 👨‍👨‍👧‍👧">Group savings Goals</FeaturesListItem>
              <FeaturesListItem data-icon="💑">Shared Goals</FeaturesListItem>
            </FeaturesList>
          </FeaturesContainer>
          <ShareButton>Share URL</ShareButton>
        </Content>
      </Container>
    );
  }
}
