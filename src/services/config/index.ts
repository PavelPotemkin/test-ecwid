export const useConfig = () => {
    return {
        apiToken: import.meta.env.VITE_API_TOKEN,
        baseApiUrl: import.meta.env.VITE_BASE_API_URL,
    }
}