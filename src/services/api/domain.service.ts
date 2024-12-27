import { DomainResponse } from "@model/domain";
import { all } from "./api-definitions";
import { ENTITIES } from "@constants/api.constants";

export const domainService = {
    all: all(ENTITIES.domain)<DomainResponse>,
}
