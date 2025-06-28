import { Link, useNavigate } from "react-router-dom";
import { AWrapper, ModalBlock, ModalEnter, ModalFormGroup, ModalFormLogin, ModalInput, ModalTtl, SigninContainer, SigninModal } from "./AuthForm.styled";

const AuthForm = ({ isSignUp, setIsAuth }) => {
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        setIsAuth(true);
        navigate("/");
    }

    return (
        <AWrapper>
            <SigninContainer>
                <SigninModal>
                    <ModalBlock>
                        <ModalTtl>{isSignUp ? "Регистрация" : "Вход"}</ModalTtl>
                        <ModalFormLogin id="formLogIn" action="#">
                            {isSignUp && (
                                <ModalInput
                                    id="first-name"
                                    type="text"
                                    placeholder="Имя"
                                    name="first-name"
                                />
                            )}
                            <ModalInput
                                id="formlogin"
                                type="text"
                                placeholder="Эл. почта"
                                name="login"
                            />
                            <ModalInput
                                id="formpassword"
                                type="password"
                                placeholder="Пароль"
                                name="password"
                            />

                            <ModalEnter
                                onClick={handleLogin}
                                type="secondary"
                                // fullWidth={true}
                                >{isSignUp ? "Зарегистрироваться" : "Войти"}</ModalEnter>
                            
                            {!isSignUp && (
                                <ModalFormGroup>
                                    <p>Нужно зарегистрироваться?</p>
                                    <Link to="/sign-up">Регистрируйтесь здесь</Link>
                                </ModalFormGroup>
                            )}
                            {isSignUp && (
                                <ModalFormGroup>
                                    <p>Уже есть аккаунт?  <Link to="/sign-in">Войдите здесь</Link></p>
                                </ModalFormGroup>
                            )}
                        </ModalFormLogin>
                    </ModalBlock>
                </SigninModal>
            </SigninContainer>
        </AWrapper>
    )
}

export default AuthForm;