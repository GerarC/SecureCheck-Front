import { LoginResponse, LoginRequest, RegisterResponse } from "../model/login"
import { AuditorRequest } from "../model/request"
import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

const AUTH_PATH = "auth"
const REGISTER_AUDITOR_PATH = "register/auditor"
const LOGIN_PATH = "login"

const service = axios.create({ baseURL: `${API_URL}/${AUTH_PATH}` })

const registerAuditor = async (body: AuditorRequest) =>
    service.post<RegisterResponse>(REGISTER_AUDITOR_PATH, body)

const login = async (body: LoginRequest) =>
    service.post<LoginResponse>(LOGIN_PATH, body)

export const authService = {
    registerAuditor,
    login,
}
