import { useState } from "react";
import { AuthenticationContext } from "../context/authentication-context";
import localStorageService from "../services/local-storage";
import { LOCAL_STORAGE_USER_KEY } from "../utils/constants/local-storage-constants";


const defaultAuthenticationData = {
	token: '',
	role: '',
	email: ''
}


export const AuthenticationProvider = ({ children }) => {
	const [authenticationData, setAuthenticationData] = useState({
		...defaultAuthenticationData
	})

	const login = data => {
		localStorageService.setItem(LOCAL_STORAGE_USER_KEY, data)
		setAuthenticationData(data);
	}

	const logout = () => {
		localStorageService.removeItem(LOCAL_STORAGE_USER_KEY)
		setAuthenticationData(defaultAuthenticationData)
	}

	return (
		<AuthenticationContext.Provider value={{ authenticationData, login, logout }}>
			{children}
		</AuthenticationContext.Provider>
	)
}