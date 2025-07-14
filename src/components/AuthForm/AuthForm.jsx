import { Link, useNavigate } from "react-router-dom";
import { AWrapper, ErrorInput, ModalBlock, ModalEnter, ModalFormGroup, ModalFormLogin, ModalInput, ModalTtl, SigninContainer, SigninModal } from "./AuthForm.styled";
import { useContext, useState } from "react";
import { signIn, signUp } from "../../services/auth";
import { AuthContext } from "../../context/AuthContext";

const AuthForm = ({ isSignUp }) => {
    const navigate = useNavigate();
    const { updateUserInfo } = useContext(AuthContext); 
    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     setIsAuth(true);
    //     navigate("/");
    // }
    // состояние полей
    const [formData, setFormData] = useState({
        name: "",
        login: "",
        password: "",
    });

    // состояние ошибок
    const [errors, setErrors] = useState({
        name: false,
        login: false,
        password: false,
    });

    // состояние текста ошибки, чтобы показать её пользователю
    const [error, setError] = useState("");

    // функция валидации
    const validateForm = () => {
        const newErrors = { name: false, login: false, password: false };
        let isValid = true;

        if (isSignUp && !formData.name.trim()) {
            newErrors.name = true;
            setError("Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме.");
            isValid = false;
        }

        if (!formData.login.trim()) {
            newErrors.login = true;
            setError("Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.");
            isValid = false;
        }

        if (!formData.password.trim()) {
            newErrors.password = true;
            setError("Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.");
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // функция, которая отслеживает в полях изменения 
    // и меняет состояние компонента
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({ ...errors, [name]: false });
        setError("");
    };

    // функция отправки формы
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            // если у нас форма не прошла валидацию, то дальше не продолжаем
            return;
        }
        try {
            // чтобы не писать две разных функции, выберем нужный запрос через 
            // тернарный оператор
            const data = !isSignUp
                ? await signIn({ login: formData.login, password: formData.password })
                : await signUp(formData);

            if (data) {
                updateUserInfo(data);
                // setIsAuth(true);
                // localStorage.setItem("userInfo", JSON.stringify(data));
                navigate("/");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <AWrapper>
            <SigninContainer>
                <SigninModal>
                    <ModalBlock>
                        <ModalTtl>{isSignUp ? "Регистрация" : "Вход"}</ModalTtl>
                        <ModalFormLogin id="formLogIn" action="#" onSubmit={handleSubmit}>
                            {isSignUp && (
                                <ModalInput
                                    $error={errors.name}
                                    id="first-name"
                                    type="text"
                                    placeholder="Имя"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            )}
                            <ModalInput
                                $error={errors.login}
                                id="formlogin"
                                type="text"
                                placeholder="Эл. почта"
                                name="login"
                                value={formData.login}
                                onChange={handleChange}
                            />
                            <ModalInput
                                $error={errors.password}
                                id="formpassword"
                                type="password"
                                placeholder="Пароль"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {error && <ErrorInput>{error}</ErrorInput>}

                            <ModalEnter
                                $error={errors.name || errors.login || errors.password}
                                onClick={handleSubmit}
                                type="secondary"
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