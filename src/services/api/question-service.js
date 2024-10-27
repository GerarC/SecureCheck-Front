import { defaultHeaders, method, securecheckServiceBuilder } from "./service-utils";

const endpoint = 'questions'

const service = securecheckServiceBuilder;

const questionService = {
	create: (question) => service(`${endpoint}`, method.post, defaultHeaders(), question),
	update: (id, question) => service(`${endpoint}/${id}`, method.update, defaultHeaders(), question),
	delete: (id) => service(`${endpoint}/${id}`, method.delete, defaultHeaders()),
}

export default questionService;
