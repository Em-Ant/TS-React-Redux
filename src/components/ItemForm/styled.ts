import styled, { css } from 'styled-components';

export interface Invalidable {
  invalid: boolean;
}

export const Form = styled.form`
  margin: 15px auto;
  max-width: 400px ;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: bold;
`;

const inputsCommon = css`
  display: block;
  flex-grow: 1;
  border-radius: 4px;
  padding: 6px;
  margin: 5px 0 10px 0;
  transition: border 0.2s ease-in-out;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Input = styled.input`
  ${inputsCommon};
  border: ${(props: Invalidable) => props.invalid ? '2px solid #ff4757' : '1px solid #bbb'};
`;

export const Textarea = styled.textarea`
 ${inputsCommon};
  border: ${(props: Invalidable) => props.invalid ? '2px solid #ff4757' : '1px solid #bbb'};
  height: 160px;
  resize: none;
`;

export const Button = styled.button`
  border: none;
  background-color: #16a085;
  color: white;
  padding: 8px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #1abc9c;
  }
`;