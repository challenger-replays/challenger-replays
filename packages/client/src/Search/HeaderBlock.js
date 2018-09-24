import styled from 'styled-components';

const HeaderBlock = styled.header`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-top: 4px;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding-top: 8px;
  }
`;

export default HeaderBlock;
