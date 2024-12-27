export interface LoginRequest {
    email: string
    password: string
}

export interface LoginResponse {
    token: string
}

export interface RegisterResponse {
    message: string
}

export interface AuthenticatedUser {
    id: string
    role: string
    token: string
}
