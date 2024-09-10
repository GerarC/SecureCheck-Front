import { ControlResponse, DomainResponse } from "../model/response"
import { all, searchBy, find, save, update, remove } from "./apiDefinitions"

const entities = {
    domain: "domains",
    control: "controls",
}

export const domainService = {
    all: all(entities.domain)<DomainResponse>,
}

export const controlService = {
    all: all(entities.control)<ControlResponse>,
}
