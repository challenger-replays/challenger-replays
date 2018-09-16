import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;

  width: 100vw;
  height: 100vh;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export default Wrapper;
