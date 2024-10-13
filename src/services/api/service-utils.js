const api_url = import.meta.env.VITE_API_URL || "http://localhost:8099/securecheck/v1/"

export const method = {
	get: "GET",
	post: "POST",
	delete: "DELETE",
	update: "PUT",
};

export const basicHeader = { "Content-Type": "application/json" }

export const defaultHeaders = () => {
	const token = localStorage.getItem("token");
	return {
		"Content-Type": "application/json",
		Authorization: "Bearer " + token,
	};
};

const buildMetadata = (method, headers, body) => {
	const metadata = {
		method: method,
	};
	if (headers) metadata.headers = headers;
	if (body && headers["Content-Type"] === "application/json")
		metadata.body = JSON.stringify(body);
	else metadata.body = body;
	console.log(metadata)
	return metadata;
};

// Service

export const securecheckServiceBuilder = (end_point, method, headers, body) =>
	fetch(`${api_url}/${end_point}`, buildMetadata(method, headers, body));