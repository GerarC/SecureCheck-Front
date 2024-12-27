import LoginForm from "@molecules/LoginForm"
import loginImage from "@assets/images/login-img-blue.jpg"
import secureCheckIcon from "@assets/icons/securecheck.png"
import Title from "@atoms/Title"
import {
    LOGIN_SECURECHECK_SUMMARY,
    LOGIN_WELCOME_MESSAGE,
} from "@constants/ui/organisms.constants"

interface LoginCardProps {
    onLogin: (event: React.FormEvent<HTMLFormElement>) => void
    onSignUp: () => void
    onForgotPassword: () => void
}

export default function LoginCard({
    onLogin,
    onSignUp,
    onForgotPassword,
}: LoginCardProps) {
    return (
        <div
            className="
            relative
            bg-light-background
            h-full
            w-full
            flex
            flex-col
            dark:bg-dark-background 
            lg:rounded-2xl 
            lg:shadow-2xl
            lg:shadow-light-shadow-heavy
            lg:flex-row
            "
        >
            <div
                className="
                    h-1/5 
                    mt-24
                    w-full 
                    overflow-hidden 
                    object-scale-down
                    flex
                    items-center
                    lg:h-full
                    lg:mt-0
                    lg:w-3/5
                    lg:rounded-l-2xl
                "
            >
                <img className="h-full w-full object-cover" src={loginImage} />
            </div>
            <div className="h-full lg:w-2/5 flex flex-col">
                <div
                    className="
                        absolute
                        w-full
                        flex
                        items-center
                        bg-light-brand
                        top-0
                        lg:bg-transparent
                        lg:h-fit
                        lg:relative
                    "
                >
                    <div className="mx-auto flex items-center py-4 text-black lg:dark:text-white px-2 gap-2 w-fit ">
                        <img
                            className="w-16 h-16 aspect-square"
                            src={secureCheckIcon}
                        />
                        <Title size="xl">SecureCheck</Title>
                    </div>
                </div>
                <div className="w-full px-6 mt-16 text-center text-light-text-brand dark:text-dark-text-brand flex flex-col gap-2 lg:mt-8 xl:mt-6 2xl:mt-20 lg:gap-1 xl:gap-2 xl:px-8 text-lg lg:text-base xl:text-lg 2xl:text-xl">
                    <strong className="text-light-text-brand-heavy dark:text-text-dark-text-brand-heavy block">
                        {LOGIN_SECURECHECK_SUMMARY}
                    </strong>
                    <span>{LOGIN_WELCOME_MESSAGE}</span>
                </div>
                <div className="flex-grow"></div>
                <LoginForm
                    onSubmit={onLogin}
                    onSignUp={onSignUp}
                    onForgotPassword={onForgotPassword}
                />
            </div>
        </div>
    )
}
