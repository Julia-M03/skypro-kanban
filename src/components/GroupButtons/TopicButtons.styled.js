import styled from "styled-components";

export const PopNewCardCategories = styled.div`
  margin-bottom: 20px;
`;

export const PopNewCardCategoriesText = styled.p`
  margin-bottom: 14px;
  color: black;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const PopNewCardCategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
`;

export const PopNewCardCategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  cursor: pointer;
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
`;

export const PopNewCardCategoriesThemeText = styled.p`
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
