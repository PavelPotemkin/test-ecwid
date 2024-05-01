import axios from "axios";
import { useConfig } from "../config";
import { left, right } from "@sweet-monads/either";
import type { ApiResult } from "@/shared/kernel";
import { NetworkError } from "@/shared/errors";

let apiInstance: ReturnType<typeof axios.create>;
export const useApiInstance = () => {
    const config = useConfig();

    if (!apiInstance) {
        apiInstance = axios.create({
            baseURL: config.baseApiUrl,
            headers: {
                Authorization: `Bearer ${config.apiToken}`,
            }
        });
    }

    return apiInstance;
};

export const useApi = () => {
    const apiInstance = useApiInstance();

    return async <T>(...args: Parameters<typeof apiInstance>): Promise<ApiResult<T>> => {
        try {
            return right(await apiInstance<T>(...args))
        } catch (error) {
            if (error instanceof Error) {
                return left(new NetworkError(error.message))
            } else {
                return left(new NetworkError('Unknown error'))
            }
        }
    }
};
