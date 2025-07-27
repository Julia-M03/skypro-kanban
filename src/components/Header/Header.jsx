import { useState } from "react";
import { ButtonExit, ButtonNewCard, Container, HeaderBlock, HeaderNav, HeaderSet, HeaderUser, Logo, SetMail, SetName, SetTheme, SHeader } from "./Header.styled";
import { useNavigate } from "react-router-dom";


export function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("userInfo"));

  return (

    <SHeader>
      <Container>
        <HeaderBlock>

          <Logo><a href="" target="_self"><img src="images/logo.png" alt="logo"></img></a></Logo>

          <HeaderNav>
            <ButtonNewCard onClick={() => navigate("cards/create")}>Создать новую задачу</ButtonNewCard>
            <HeaderUser as="a" href="#" onClick={() => setIsOpen(!isOpen)}>{user.name}</HeaderUser>
            {
              isOpen ? <HeaderSet id="user-set-target">
                <SetName>{user.name}</SetName>
                <SetMail>{user.login}</SetMail>
                <SetTheme>
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox"></input>
                </SetTheme>
                <ButtonExit onClick={() => navigate("/exit")}>Выйти</ButtonExit>
              </HeaderSet> : null
            }
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </SHeader>
  )
}
