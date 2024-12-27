import TextInput from "@atoms/TextInput"
import emailIcon from "@assets/icons/email-icon.svg"
import passwordIcon from "@assets/icons/password-icon.svg"
import Button from "@atoms/Button"

interface LoginFormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    onSignUp: () => void
    onForgotPassword: () => void
}

export default function LoginForm({ onSubmit, onSignUp, onForgotPassword }: LoginFormProps) {
    return (
        <form
            onSubmit={onSubmit}
            className="h-fit w-full py-6 m-auto flex-grow px-6 flex flex-col gap-6 mt-8 lg:mt-4 xl:mt-6 lg:px-8 xl:px-12 2xl:mt-16"
        >
            <TextInput
                id="email-login-input"
                label="Email"
                placeholder="email@email.com"
                mode="email"
                icon={<img src={emailIcon} />}
            />
            <TextInput
                variant="password"
                id="password-login-input"
                label="Password"
                placeholder="password"
                icon={<img src={passwordIcon} />}
            />
            <Button id="forgot-password-button" color="danger" variant="text" size="s" onClick={onForgotPassword}>
                Forgot password?
            </Button>
            <div className="flex gap-6">
                <Button id="log-in-button" type="submit">
                    Log In
                </Button>
                <Button id="sign-up-button" variant="outline" onClick={onSignUp}>
                    Sign Up
                </Button>
            </div>
        </form>
    )
}
