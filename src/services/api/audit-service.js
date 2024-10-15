import { defaultHeaders, method, securecheckServiceBuilder, } from "./service-utils";

const endpoint = 'audits'

const service = securecheckServiceBuilder;

const auditService = {
	createAudit: (company) => service(`${endpoint}`, method.post, defaultHeaders(), company),
}

export default auditService;
