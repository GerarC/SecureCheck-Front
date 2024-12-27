import {
    LOCAL_STORAGE_DELETING_ERROR,
    LOCAL_STORAGE_GETTING_ERROR,
    LOCAL_STORAGE_SAVING_ERROR,
} from "@constants/local-storage.constants"

export class LocalStorageService<T> {
    private storageKey: string

    constructor(storageKey: string) {
        this.storageKey = storageKey
    }

    /**
     * Save an item to localStorage
     * @param item - The item to be saved
     */
    setItem(item: T): void {
        try {
            const serializedItem = JSON.stringify(item)
            localStorage.setItem(this.storageKey, serializedItem)
        } catch (error) {
            throw new Error(LOCAL_STORAGE_SAVING_ERROR)
        }
    }

    /**
     * Retrieve an item from localStorage
     * @returns The retrieved item, or null if not found
     */
    getItem(): T | null {
        try {
            const serializedItem = localStorage.getItem(this.storageKey)
            return serializedItem ? (JSON.parse(serializedItem) as T) : null
        } catch (error) {
            throw new Error(LOCAL_STORAGE_GETTING_ERROR)
        }
    }

    /**
     * Remove the item from localStorage
     */
    removeItem(): void {
        try {
            localStorage.removeItem(this.storageKey)
        } catch (error) {
            throw new Error(LOCAL_STORAGE_DELETING_ERROR)
        }
    }

    /**
     * Check if the item exists in localStorage
     * @returns A boolean indicating whether the item exists
     */
    exists(): boolean {
        return localStorage.getItem(this.storageKey) !== null
    }
}
