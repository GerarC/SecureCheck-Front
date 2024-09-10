export interface ControlResponse {
	id?: number
	index: number
	name: string
	description: string
	domain?: DomainResponse
}

export interface DomainResponse {
	id?: number
	index: number
	name: string
	description: string
	controls?: Array<Control>
}

export interface AuditorResponse {
	id: string
	name: string
	lastname: string
}