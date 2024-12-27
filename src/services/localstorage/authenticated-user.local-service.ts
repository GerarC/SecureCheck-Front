import { LOCAL_STORAGE_AUTHENTICATED_USER_KEY } from "@constants/local-storage.constants"
import { AuthenticatedUser } from "@model/authentication"
import { LocalStorageService } from "./local-storage"

export const userLocalService = new LocalStorageService<AuthenticatedUser>(
    LOCAL_STORAGE_AUTHENTICATED_USER_KEY
)
