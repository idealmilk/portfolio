import styled from "styled-components";

export const Container = styled.form`
  min-height: 160px;
  width: 40%;
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-top: 4rem;
    width: 100%;
  }
`;

export const FormWrap = styled.div`
  transition: all 0.5s ease;
`;

export const InputWrap = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const FormResponse = styled.div`
  width: 100%;
  color: #969ca0;
  text-align: center;
  transition: all 0.5s ease-in;
`;

type InputContainerProps = {
  color: string;
};

export const InputContainer = styled.div<InputContainerProps>`
  margin-bottom: 1.4rem;
  input {
    width: 100%;
    padding: 14px;
    border: none;
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors[props.color]};
    color: white;
    &:focus,
    &::placeholder {
      color: white;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    width: 100%;
  }
`;

export const TextAreaContainer = styled.div`
  height: 258px;
  textarea {
    width: 100%;
    height: 100%;
    padding: 14px;
    border: none;
    font-size: 1.6rem;
    border: 1px solid black;
    background: ${(props) => props.theme.colors.yellow};
    color: black;
    &:focus,
    &::placeholder {
      color: black;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  background: #ffffff;
  border-radius: 4rem;
  overflow: hidden;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    background: transparent;
    display: block;
    border-radius: 0;
  }
`;
