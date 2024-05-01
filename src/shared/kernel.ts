import type { Either } from "@sweet-monads/either"
import type { AxiosResponse } from "axios"
import { NetworkError } from "./errors"

export type Option<T> = {
    value: T
    label: string
}

export type ApiResponse<T> = AxiosResponse<T>

export type ApiResult<T> = Either<NetworkError, ApiResponse<T>>