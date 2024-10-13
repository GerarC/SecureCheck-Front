import { useContext } from "react"
import { USE_AUTHENTICATION_ERROR_MESSAGE } from "../utils/constants/hook-constants"
import { AuthenticationContext } from "../context/authentication-context"

export const useAuthentication = () =>{
	const context = useContext(AuthenticationContext)

	if(!context) throw new Error(USE_AUTHENTICATION_ERROR_MESSAGE)

	return context
}