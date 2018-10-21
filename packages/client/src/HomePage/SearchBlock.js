import styled from 'styled-components';

const SearchBlock = styled.section`
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 18vh;

  @media (min-width: 1024px) {
    width: auto;
    padding-right: 10vw;
  }

  @media (min-height: 480px) {
  }

  @media (min-height: 600px) {
    margin-top: 26vh;
  }
`;

export default SearchBlock;
