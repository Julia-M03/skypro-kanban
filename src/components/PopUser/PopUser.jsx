import { useNavigate } from "react-router-dom";
import { ExitBlock, ExitContainer, ExitFormGroup, ExitNo, ExitTtl, ExitYes } from "./PopUser.styled";

export function PopUser({ setIsAuth }) {
const navigate = useNavigate();

function handleLogout(e) {
      e.preventDefault();
      setIsAuth(false);
      navigate("/sign-in");
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