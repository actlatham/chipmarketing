import styled from 'styled-components';

export const Heading = styled.h1`
  color: ${props => props.theme.colors.slate};
  font-size: 17px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: 0.2px;
  margin: 0 0 8px 0;
  text-align: center;
`;

export const Paragraph = styled.p`
  color: ${props => props.theme.colors.slateTwo};
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: 0.2px;
  margin: 0;
  text-align: center;
`;
