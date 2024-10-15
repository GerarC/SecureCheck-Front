import { defaultHeaders, method, securecheckServiceBuilder, } from "./service-utils";

const endpoint = 'companies'

const service = securecheckServiceBuilder;

const companyService = {
	create: (company) => service(`${endpoint}`, method.post, defaultHeaders(), company),
	delete: (id) => service(`${endpoint}/${id}`, method.delete, defaultHeaders()),
	get: (id) => service(`${endpoint}/${id}`, method.get, defaultHeaders()),
	questions: (id) => service(`${endpoint}/${id}/questions`, method.get, defaultHeaders()),
}

export default companyService;