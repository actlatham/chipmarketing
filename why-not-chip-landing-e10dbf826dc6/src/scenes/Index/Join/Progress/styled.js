import styled from 'styled-components';

export const Container = styled.div`
  background: #f5f5f5;
  border-radius: 4px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  height: 17px;
  margin: 20px 0;
  overflow: hidden;

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
    margin-left: auto;
    margin-right: auto;
    width: 295px;
  }
`;

export const Bar = styled.p`
  align-items: center;
  background: ${props => props.theme.colors.aquamarine};
  color: ${props => props.theme.colors.white};
  display: flex;
  font-size: 10px;
  height: 100%;
  justify-content: center;
  margin: 0;
  min-width: ${props => props.value}%;
  padding: 0 9px 0 11px;
  width: 0;
`;
