import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

const defaultHeaders = () => {
    const token = localStorage.getItem("token")
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    }
}

const service = axios.create({ baseURL: API_URL, headers: defaultHeaders() })

// Basic Crud
export const all =
    (entity: string) =>
    async <Response>() =>
        service.get<Array<Response>>(entity)

export const searchBy =
    (entity: string) =>
    async <Response>(query: string) =>
        service.get<Array<Response>>(`${entity}?${query}`)

export const find =
    (entity: string) =>
    async <Response>(id: number | string) =>
        service.get<Response>(`${entity}/${id}`)

export const save =
    (entity: string) =>
    async <Request, Response>(body: Request) =>
        service.post<Response>(entity, body)

export const update =
    (entity: string) =>
    async <Request, Response>(id: number | string, body: Request) =>
        service.put<Response>(`${entity}/${id}`, body)

export const remove =
    (entity: string) =>
    async <Response>(id: number | string) =>
        service.delete<Response>(`${entity}/${id}`)
