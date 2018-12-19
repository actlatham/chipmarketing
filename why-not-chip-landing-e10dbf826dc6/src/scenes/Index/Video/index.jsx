import * as React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import {
  GridStyled,
  ColStyled,
  Thumbnail,
  Paragraph,
  Center,
  Heading,
  WatchButton,
} from './styled';

import { VideoContext } from 'src/contexts/VideoContext';

export default class Video extends React.Component {
  render() {
    return (
      <VideoContext.Consumer>
        {({ onShow }) => (
          <GridStyled>
            <Row reverse>
              <Col xs={12} sm={6} smOffset={1}>
                <Thumbnail src={process.env.VIDEO_THUMBNAIL_URL} onClick={onShow} />
              </Col>
              <ColStyled xs={12} sm={5}>
                <Center>
                  <Heading>Meet Simon</Heading>
                  <Paragraph>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took
                  </Paragraph>
                  <WatchButton onClick={onShow}>Watch Video</WatchButton>
                </Center>
              </ColStyled>
            </Row>
          </GridStyled>
        )}
      </VideoContext.Consumer>
    );
  }
}
