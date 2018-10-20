import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  width: 96%;
  max-width: 500px;
  height: 44px;
  padding-left: 12px;
  border-color: rgba(0, 0, 0, 0.15);
  border-radius: ${p => p.theme.borderRadius};
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
`;

export default Form;
