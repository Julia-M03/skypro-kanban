import styled from "styled-components"

export const AWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #EAEEF6;
`;

export const SigninContainer = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto; 
`;

export const SigninModal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const ModalTtl = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 20px;
`;

export const ModalFormLogin = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input:first-child {
  margin-bottom: 7px;
}
`;

export const ModalInput = styled.input.attrs((props) => props)`
  width: 100%;  
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid ${(props) => props.$error ? "red" : "rgba(148, 166, 190, 0.4)"};
  outline: none;
  padding: 10px 8px;

&::placeholder {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.28px;
  color: #94A6BE;
}
`;

export const ModalEnter = styled.button.attrs((props) => props)`
  width: 100%;
  height: 30px;
  background-color: ${(props) => props.$error ? " #94A6BE" : " #565EEF"};
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #FFFFFF;
  font-family: "Roboto", sans-serif;

  &:hover {
  background-color: #33399b;
}
`;

export const ErrorInput = styled.div`
font-family: Arial;
font-weight: 400;
font-size: 12px;
line-height: 150%;
text-align: center;
color: #F84D4D;
padding-top: 8px;
`;

export const ModalFormGroup = styled.div`
  text-align: center;

  p, a {
  color: rgba(148, 166, 190, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;
}
a {
  text-decoration: underline;
}
`;