import { defaultHeaders, method, securecheckServiceBuilder, } from "./service-utils";

const endpoint = 'answers'

const service = securecheckServiceBuilder;

const answerService = {
	updateBatch: (answers) => service(`${endpoint}`, method.patch, defaultHeaders(), answers),
}

export default answerService;
