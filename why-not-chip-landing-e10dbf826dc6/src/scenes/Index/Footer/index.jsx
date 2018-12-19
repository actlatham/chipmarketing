import * as React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import {
  Container,
  Note,
  SectionTitle,
  ListUrl,
  List,
  ListItem,
  FacebookIconStyled,
  InstagramIconStyled,
  GridStyled,
} from './styled';

import { ChipIcon } from './icons';

export default function Footer() {
  return (
    <Container>
      <GridStyled>
        <Row>
          <Col xs={12} md={3}>
            <ChipIcon />
          </Col>
          <Col xs={6} md={3}>
            <SectionTitle>Chip</SectionTitle>
            <List>
              <ListItem>
                <ListUrl href={`${process.env.WEBSITE_URL}/how-it-works`}>How it works</ListUrl>
              </ListItem>
              <ListItem>
                <ListUrl href={`${process.env.WEBSITE_URL}/about-us`}>About us</ListUrl>
              </ListItem>
              <ListItem>
                <ListUrl href="https://chiphelp.zendesk.com/hc/en-us" target="_blank">
                  Help
                </ListUrl>
              </ListItem>
              <ListItem>
                <ListUrl href={`${process.env.WEBSITE_URL}/get-chip`} color="green">
                  Get The App
                </ListUrl>
              </ListItem>
            </List>
          </Col>
          <Col xs={6} md={3}>
            <SectionTitle>Community</SectionTitle>
            <List>
              <ListItem>
                <ListUrl href="#" target="_blank">
                  Community website
                </ListUrl>
              </ListItem>
              <ListItem>
                <ListUrl href="#" target="_blank">
                  Chip champions
                </ListUrl>
              </ListItem>
              <ListItem>
                <ListUrl
                  href="https://www.facebook.com/getchipapp/"
                  target="_blank"
                  color="blue"
                  social
                >
                  <FacebookIconStyled /> Facebook
                </ListUrl>
              </ListItem>
              <ListItem>
                <ListUrl
                  href="https://www.instagram.com/chiptribe/"
                  target="_blank"
                  color="red"
                  social
                >
                  <InstagramIconStyled /> Instagram
                </ListUrl>
              </ListItem>
            </List>
          </Col>
          <Col xs={12} md={3}>
            <SectionTitle>Policies</SectionTitle>
            <List>
              <ListItem>
                <ListUrl href={`${process.env.WEBSITE_URL}/terms-of-use`}>
                  Terms & conditions
                </ListUrl>
              </ListItem>
              <ListItem>
                <ListUrl href={`${process.env.WEBSITE_URL}/privacy-policy`}>Privacy policy</ListUrl>
              </ListItem>
              <ListItem>
                <ListUrl href={`${process.env.WEBSITE_URL}/direct-debit`}>Direct debit</ListUrl>
              </ListItem>
            </List>
          </Col>
        </Row>
        <Note>
          Chip Financial Limited, trading as Chip, is a limited company registered in England and
          Wales at 89 New Bond Street, London, W1S 1DA . Company Registration Number: (CRN:
          10113174). ICO Data protection registration number: (ZA: 192036) Chip is an appointed
          representative of Resolution Compliance Limited which is authorised and regulated by the
          Financial Conduct Authority (FRN: 574048). Why not come by and say hello at Chip HQ at
          239, Shoreditch High Street, London E1 6PJ 👋
        </Note>
      </GridStyled>
    </Container>
  );
}
