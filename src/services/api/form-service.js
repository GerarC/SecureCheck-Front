import { defaultHeaders, method, securecheckServiceBuilder, } from "./service-utils";

const endpoint = 'forms'

const service = securecheckServiceBuilder;

const formService = {
	getByCompany: (company) => service(`${endpoint}?companyId=${company}`, method.get, defaultHeaders()),
}

export default formService;
