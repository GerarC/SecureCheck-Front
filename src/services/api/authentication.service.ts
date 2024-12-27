import { AuditorRequest } from "@model/auditor"
import { LoginRequest, LoginResponse, RegisterResponse } from "@model/authentication"
import { AUTH_PATH, LOGIN_PATH, REGISTER_AUDITOR_PATH } from "@constants/api.constants"
import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

const service = axios.create({ baseURL: `${API_URL}/${AUTH_PATH}` })

const registerAuditor = async (body: AuditorRequest) =>
    service.post<RegisterResponse>(REGISTER_AUDITOR_PATH, body)

const login = async (body: LoginRequest) =>
    service.post<LoginResponse>(LOGIN_PATH, body)

export const authService = {
    registerAuditor,
    login,
}
