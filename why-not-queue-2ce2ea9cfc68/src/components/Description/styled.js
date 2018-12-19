import styled from 'styled-components';

import { ChipIcon } from './icons';

export const Container = styled.section`
  min-height: 100%;
  position: relative;
`;

export const Content = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const Box = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: 22px;
  bottom: 100%;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  left: 25px;
  opacity: ${props => (props.current ? 1 : 0)};
  padding: 25px 30px 30px 30px;
  position: absolute;
  right: 25px;
  transform: translateY(${props => (props.current ? 0 : '10px')});
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out,
    visibility ${props => (props.current ? '0.3s 0s' : '0s 0.3s')} linear;
  visibility: ${props => (props.current ? 'visible' : 'hidden')};
`;

export const Buttons = styled.div`
  display: flex;
  margin: 0 25px;
  padding: 30px 0 50px 0;
`;

export const RequestButton = styled.button`
  background: ${props => props.theme.colors.aquamarine};
  border: 0;
  border-radius: 22px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  color: ${props => props.theme.colors.white};
  flex-grow: 1;
  font-size: 15px;
  font-weight: 500;
  height: 44px;
  letter-spacing: 0.2px;
  text-transform: capitalize;
`;

export const MoreButton = RequestButton.extend`
  background: ${props => props.theme.colors.white};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: ${props => props.theme.colors.aquamarine};
  margin-left: 15px;
`;

export const IconContainer = styled.div`
  background: ${props => props.theme.colors.aquamarine};
  border: 3px solid ${props => props.theme.colors.whiteTwo};
  border-radius: 50%;
  bottom: -16px;
  display: flex;
  height: 32px;
  left: -9px;
  position: absolute;
  width: 32px;
`;

export const ChipIconStyled = styled(ChipIcon)`
  margin: auto;
`;

export const Video = styled.video`
  border: 0;
  height: 100%;
  left: 0;
  object-fit: cover;
  object-position: center top;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const VideoPreload = styled.video`
  display: none;
`;
