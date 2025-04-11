import { useState } from "react";
import { ButtonExit, ButtonNewCard, Container, HeaderBlock, HeaderNav, HeaderSet, HeaderUser, Logo, SetMail, SetName, SetTheme, SHeader } from "./Header.styled";


export function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <SHeader>
      <Container>
        <HeaderBlock>

          <Logo><a href="" target="_self"><img src="images/logo.png" alt="logo"></img></a></Logo>

          <div className="header__logo _dark">
            <a href="" target="_self"><img src="images/logo_dark.png" alt="logo"></img></a>
          </div>

          <HeaderNav>
            <ButtonNewCard><a href="#popNewCard">Создать новую задачу</a></ButtonNewCard>
            <HeaderUser as="a" href="#" onClick={() => setIsOpen(!isOpen)} >Ivan Ivanov</HeaderUser>
            {
              isOpen ? <HeaderSet id="user-set-target">
                <SetName>Ivan Ivanov</SetName>
                <SetMail>ivan.ivanov@gmail.com</SetMail>
                <SetTheme>
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox"></input>
                </SetTheme>
                <ButtonExit><a href="#popExit">Выйти</a></ButtonExit>
              </HeaderSet> : null
            }
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </SHeader>
  )
}
