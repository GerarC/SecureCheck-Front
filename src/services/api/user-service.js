import { defaultHeaders, method, securecheckServiceBuilder, } from "./service-utils";

const endpoint = 'users'

const service = securecheckServiceBuilder;

const userService = {
	companies: (id) => service(`${endpoint}/${id}/companies`, method.get, defaultHeaders()),
}

export default userService;