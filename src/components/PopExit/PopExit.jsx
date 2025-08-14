import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ExitBlock, ExitContainer, ExitFormGroup, ExitNo, ExitTtl, ExitYes } from "./PopExit.styled";
import { AuthContext } from "../../context/AuthContext";

export function PopExit() {
  const navigate = useNavigate();
  const { updateUserInfo, setIsAuth } = useContext(AuthContext); 

  function handleLogout(e) {
    e.preventDefault();
    setIsAuth(false);
    navigate("/sign-in");
    updateUserInfo(null)
  }

  return (
    <div className="pop-exit" id="popExit">
      <ExitContainer>
        <ExitBlock>
          <ExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </ExitTtl>
          <form className="pop-exit__form" action="#">
            <ExitFormGroup>
              <ExitYes onClick={handleLogout}>Да, выйти</ExitYes>
              <ExitNo onClick={() => navigate("/")}>Нет, остаться</ExitNo>
            </ExitFormGroup>
          </form>
        </ExitBlock>
      </ExitContainer>
    </div>
  )
}