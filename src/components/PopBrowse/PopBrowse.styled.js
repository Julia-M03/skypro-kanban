import styled from "styled-components";
import { Hover01, Hover03 } from "../../global.styled.js";


export const PopBrouwse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
  &:target {
    display: block;
  }
  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrouwseContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  z-index: 7;
  position: absolute;
  top: 0;
  left: 0;

  &.active {
    display: flex;
  }

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrouwseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
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

export const PopBrouwseContent = styled.div`
  display: block;
  text-align: left;
  opacity: 1;
  margin-bottom: 20px;
`;

export const PopBrouwseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrouwseTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  display: block;

  background-color: ${({ $color }) => {
    switch ($color) {
      case "orange":
        return "#ffe4c2";
      case "green":
        return "#b4fdd1";
      case "purple":
        return "#e9d4ff";
      case "gray":
        return "#94a6be";
    }
  }};

  color: ${({ $color }) => {
    switch ($color) {
      case "orange":
        return "#ff6d00";
      case "green":
        return "#06b16e";
      case "purple":
        return "#9a48f1";
      case "gray":
        return "#ffffff";
    }
  }};

  opacity: ${({ $active }) => ($active ? 1 : 0.4)};

  @media screen and (max-width: 495px) {
    display: none;
  }
`;

export const CategoriesThemeText = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;

  background-color: ${({ $color }) => {
    switch ($color) {
      case "orange":
        return "#ffe4c2";
      case "green":
        return "#b4fdd1";
      case "purple":
        return "#e9d4ff";
      case "gray":
        return "#94a6be";
    }
  }};

  color: ${({ $color }) => {
    switch ($color) {
      case "orange":
        return "#ff6d00";
      case "green":
        return "#06b16e";
      case "purple":
        return "#9a48f1";
      case "gray":
        return "#ffffff";
    }
  }};
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const StatusPsubTtlP = styled.div`
  padding-bottom: 14px;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  color: #000;
`;

export const StatusThemeLabel_1 = styled.div`
  display: inline-block;
  height: 30px;
  padding: 5px 14px 5px 14px;
  border-radius: 24px;
  margin-right: 2px;
  color: #FFFFFF;
  background-color: #94A6BE;
`;

export const StatusThemesDiv = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: flex-start;
    gap: 7px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;

    letter-spacing: 0em;
    text-align: center;
    width: auto;
    overflow: auto;
`;

export const OpenedCardTheme = styled.input`
  display: none;
`;

export const StatusThemeLabel = styled.label.attrs((props) => props)`
  display: inline-block;
  height: 30px;
  padding: 5px 14px 5px 14px;
  border: solid 1px #94A6BE;
  border-radius: 24px;
  cursor: pointer;
  margin-right: 2px;
  color: ${(props) => props.$isActive ? "#FFFFFF" : "#94A6BE" } ;
  background-color: ${(props) => props.$isActive ? "#94A6BE" : "#FFFFFF" } ;

  &:hover {
    opacity: 100%;
    border: solid 1px;
    box-shadow: inset 0 0 4px ${(props) => props.$isActive ? "4px #88a5cb" : "2px #b9cce6"};
  }
  white-space: nowrap;
`;


export const PopBrouwseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseTitle = styled.label`
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormBrowseArea = styled.textarea.attrs((props) => props)`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background-color: ${(props) => props.$isEditing ? "transparent" : "#eaeef6" } ;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const PopBrowseButtonBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    margin-right: 8px;
  }
  @media screen and (max-width: 495px) {
    width: 100%;
    button {
      height: 40px;
      width: 100%;
      margin-right: 0px;
    }
  }
`;

export const ButtonGroup = styled.div`
  button {
    margin-right: 8px;
  }
  @media screen and (max-width: 495px) {
    width: 100%;
    button {
      margin-right: 0px;
    }
  }
`;

export const ButtonChengeDelete = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  a {
    color: #565eef;
  }
  ${Hover03}
`;


export const ButtonClose = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  a {
    color: #ffffff;
  }
  ${Hover01}
`;