import { PopNewCardCategories, PopNewCardCategoriesText, PopNewCardCategoriesTheme, PopNewCardCategoriesThemes, PopNewCardCategoriesThemeText } from "./TopicButtons.styled";

export function TopicButtons() {
  return (
    <PopNewCardCategories>
      <PopNewCardCategoriesText>Категория</PopNewCardCategoriesText>
      <PopNewCardCategoriesThemes>
        <PopNewCardCategoriesTheme>
          <PopNewCardCategoriesThemeText>
            Web Design
          </PopNewCardCategoriesThemeText>
        </PopNewCardCategoriesTheme>
        <PopNewCardCategoriesTheme>
          <PopNewCardCategoriesThemeText>
            Research
          </PopNewCardCategoriesThemeText>
        </PopNewCardCategoriesTheme>
        <PopNewCardCategoriesTheme>
          <PopNewCardCategoriesThemeText>
            Copywriting
          </PopNewCardCategoriesThemeText>
        </PopNewCardCategoriesTheme>
      </PopNewCardCategoriesThemes>
    </PopNewCardCategories>
  );
};

            {/* {isEditing && (<div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className={"categories__theme _orange " + (editCard.topic === "Web Design" ? "_active-category" : "")}>
                  <p className="_orange">Web Design</p>
                </div>
                <div className={"categories__theme _green " + (editCard.topic === "Research" ? "_active-category" : "")}>
                  <p className="_green">Research</p>
                </div>
                <div className={"categories__theme _purple " + (editCard.topic === "Copywriting" ? "_active-category" : "")}>
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>)} */}
