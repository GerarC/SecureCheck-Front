import { basicHeader, method, securecheckServiceBuilder, } from "./service-utils";

const endpoint = 'auth'

const service = securecheckServiceBuilder;

const authService = {
	registerAuditor: (auditor) => service(`${endpoint}/register/auditor`, method.post, basicHeader, auditor),
	login: (body) => service(`${endpoint}/login`, method.post, basicHeader, body),
	validateToken: (token) => service(`${endpoint}/token?token=${token}`, method.post, basicHeader),
}

export default authService;