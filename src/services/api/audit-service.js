import {
    defaultHeaders,
    method,
    securecheckServiceBuilder,
} from "./service-utils";

const endpoint = "audits";

const service = securecheckServiceBuilder;

const auditService = {
    createAudit: (company) =>
        service(`${endpoint}`, method.post, defaultHeaders(), company),
    delete: (auditId) =>
        service(`${endpoint}/${auditId}`, method.delete, defaultHeaders()),
    updateComment: (auditId, comment) =>
        service(`${endpoint}/${auditId}`, method.patch, defaultHeaders(), {
            comment,
        }),
    setAsFinished: (auditId) =>
        service(
            `${endpoint}/${auditId}/state/finished`,
            method.patch,
            defaultHeaders(),
        ),
};

export default auditService;
