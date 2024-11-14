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
	patchAudit: (auditId, audit) =>
		service(`${endpoint}/${auditId}`, method.patch, defaultHeaders(), audit),
	setAsFinished: (auditId) =>
		service(
			`${endpoint}/${auditId}/state/finished`,
			method.patch,
			defaultHeaders(),
		),
	getAuditReport: (auditId) =>
		service(`${endpoint}/${auditId}/report`, method.get, defaultHeaders()),
};

export default auditService;
