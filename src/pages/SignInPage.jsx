import AuthForm from "../components/AuthForm/AuthForm"


// страница входа
const SignInPage = ({ setIsAuth }) => {
    return <AuthForm setIsAuth={setIsAuth} isSignUp={false} />
}

export default SignInPage
