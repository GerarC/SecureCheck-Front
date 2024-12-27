export interface DomainResponse {
	id?: number
	index: number
	name: string
	description: string
	controls?: Array<Control>
}
