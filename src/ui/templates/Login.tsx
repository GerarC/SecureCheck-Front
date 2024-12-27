import { ROUTE_ABSOLUTE_REGISTER_PATH } from "@constants/router.constants"
import LoginCard from "@organisms/LoginCard"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()

    function onLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
    }
    function onSignUp() {
        navigate(ROUTE_ABSOLUTE_REGISTER_PATH)
    }
    function onForgotPassword() { }

    return (
        <div className="h-screen w-screen lg:bg-light-brand lg:dark:bg-dark-brand lg:px-16 lg:py-16 xl:px-32 xl:py-16 2xl:px-56 2xl:py-32">
            <LoginCard
                onLogin={onLogin}
                onSignUp={onSignUp}
                onForgotPassword={onForgotPassword}
            />
        </div>
    )
}
