import styled from "styled-components"; 

export const SPopNewCard = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }

  @media screen and (max-width: 495px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopNewCardTtl = styled.h3`
  color: black;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`
export const PopNewCardClose = styled.span`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94A6BE;
  cursor: pointer;
  &:hover {
    color: white;
  }
`

export const PopNewCardWrap =styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`

export const PopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
    width: 100%;
    display: block;
  }
`

export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export const Subttl = styled.label`
  color: black;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`

export const FormNewInput = styled.input`
  width: 100%;
  margin: 20px 0;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }
`

export const FormNewArea = styled.textarea`
  max-width: 370px;
  margin-top: 14px;
  height: 200px;

  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;


  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }
`
export const PopNewCardCategories = styled.div`
  margin-bottom: 20px;
  p {
    margin-bottom: 14px;

    color: black;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
  }

`
export const PopNewCardCategoriesTheme = styled.div`

`
export const InputRadio = styled.input`
  display: none;

  &:checked + label {
    opacity: 100%;
  }
`

export const RadioToolbarLabel1 = styled.label`
  display: inline-block;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  color: #ff6d00;
  background: #ffe4c2;
  cursor: pointer;
  margin-right: 7px;
  opacity: 40%;

  &:hover {
    opacity: 100%;
  }
`

export const RadioToolbarLabel2 = styled.label`
  display: inline-block;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  color: #06b16e;
  background: #b4fdd1;
  cursor: pointer;
  margin-right: 7px;
  opacity: 40%;

  &:hover {
    opacity: 100%;
  }
`

export const RadioToolbarLabel3 = styled.label`
  display: inline-block;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  color: #9a48f1;
  background: #E9D4FF;
  cursor: pointer;
  margin-right: 7px;
  opacity: 50%;

  &:hover {
    opacity: 100%;
  }
`
