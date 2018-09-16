import styled from 'styled-components';

const SearchBlock = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;

  @media (min-height: 480px) {
    top: 18%;
  }

  @media (min-height: 600px) {
    top: 24%;
  }
`;

export default SearchBlock;
