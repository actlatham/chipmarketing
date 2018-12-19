import styled, { css } from 'styled-components';

import { Paragraph } from 'src/components/Typography';
import { RequestButton } from '../styled';

export const Container = styled.section`
  padding: 233px 25px 48px 25px;
  position: relative;
`;

export const PositionContainer = styled.div`
  background: ${props => props.theme.colors.aquamarine};
  border-radius: 22px 22px 5px 5px;
  margin-bottom: 4px;
  padding: 25px 35px 19px 35px;
`;

export const Position = styled.h3`
  color: ${props => props.theme.colors.white};
  display: flex;
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0 0 0;
  line-height: 2.25;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const PositionText = styled.span`
  flex-grow: 1;

  ${props =>
    props.text &&
    css`
      text-align: left;
    `};

  ${props =>
    props.number &&
    css`
      font-size: 22px;
      text-align: right;
      line-height: normal;
    `};
`;

export const DescriptionContainer = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: 5px 5px 22px 22px;
  padding: 20px 29px 30px 29px;
`;

export const Description = Paragraph.extend`
  margin-bottom: 10px;
  padding: 3px 0 9px 0;
`;

export const DescriptionUrlContainer = styled.div`
  margin: 0 6px;
`;

export const DescriptionUrl = styled.button`
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.aquamarine};
  border-radius: 5px;
  color: ${props => props.theme.colors.aquamarine};
  display: block;
  font-size: 15px;
  font-weight: 500;
  height: 44px;
  letter-spacing: 0.2px;
  width: 100%;
`;

export const FeaturesContainer = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: 22px;
  margin-top: 20px;
  padding: 0 25px;
`;

export const Features = styled.h4`
  color: ${props => props.theme.colors.slateTwo};
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  padding: 26px 0 27px 0;
  text-align: center;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 16px 0;
`;

export const FeaturesListItem = Paragraph.withComponent('li').extend`
  border-top: 1px solid ${props => props.theme.colors.whiteThree};
  padding: 10px 20px 10px 35px;
  position: relative;
  text-align: left;
  
  &::before {
    content: attr(data-icon);
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ShareButton = RequestButton.extend`
  display: block;
  margin-top: 20px;
  width: 100%;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
`;

export const Congratulations = styled.p`
  border-bottom: 1px solid rgba(255, 255, 255, 0.34);
  color: ${props => props.theme.colors.white};
  font-size: 17px;
  font-weight: 500;
  margin: 0;
  padding-bottom: 26px;
  text-align: center;
`;
