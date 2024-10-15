import {
	LOCAL_STORAGE_CLEARING_ERROR_MESSAGE,
	LOCAL_STORAGE_READING_ERROR_MESSAGE,
	LOCAL_STORAGE_REMOVING_ERROR_MESSAGE,
	LOCAL_STORAGE_SAVING_ERROR_MESSAGE
} from "../utils/constants/local-storage-constants";

const localStorageService = {
	setItem: (key, value) => {
		try {
			if (value !== undefined && value !== null) {
				const jsonValue = JSON.stringify(value);
				localStorage.setItem(key, jsonValue);
			}
		} catch (error) {
			console.error(LOCAL_STORAGE_SAVING_ERROR_MESSAGE, error);
		}
	},

	getItem: (key) => {
		try {
			const value = localStorage.getItem(key);
			const jsonValue = JSON.parse(value);
			return  jsonValue;
		} catch (error) {
			console.error(LOCAL_STORAGE_READING_ERROR_MESSAGE, error);
			return null;
		}
	},

	removeItem: (key) => {
		try {
			localStorage.removeItem(key);
		} catch (error) {
			console.error(LOCAL_STORAGE_REMOVING_ERROR_MESSAGE, error);
		}
	},

	clear: () => {
		try {
			localStorage.clear();
		} catch (error) {
			console.error(LOCAL_STORAGE_CLEARING_ERROR_MESSAGE, error);
		}
	}
};

export default localStorageService;