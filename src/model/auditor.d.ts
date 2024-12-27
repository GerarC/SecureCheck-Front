export interface AuditorRequest {
    name: string
    lastname: string
    identityDocument: string
    birthDate: Date
    phone: string
    email: string
    password: string
}

export interface AuditorResponse {
	id: string
	name: string
	lastname: string
}
