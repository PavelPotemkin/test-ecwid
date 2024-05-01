import {
    useAsyncState as vueUseUseAsyncState,
    createEventHook as vueUseCreateEventHook,
} from "@vueuse/core";
import { computed, onMounted, onUnmounted } from "vue";

export const useAsyncState = <T>(promise: (params: T) => Promise<void>, { immediate = false }: { immediate: boolean } = { immediate: false }) => {
    const { isLoading, ...state } = vueUseUseAsyncState(promise, undefined, {
        immediate,
    });

    return {
        ...state,
        pending: isLoading,
        execute: (value: T = undefined as T) => state.execute(0, value),
    };
};

export const useAsyncStateStatus = (states: Array<ReturnType<typeof useAsyncState<any>>>) => {
    return {
        pending: computed(() => states.some((state) => state.pending.value))
    }
}

export const createEventHook = <
    P = undefined,
    C extends Parameters<typeof on>[0] = Parameters<typeof on>[0],
>() => {
    const { off, on, trigger } = vueUseCreateEventHook<P>();

    return {
        useOnEvent: (callback: C) => {
            onMounted(() => {
                on(callback);
            });
            onUnmounted(() => {
                off(callback);
            });
        },

        useTriggerEvent: () =>
            trigger as unknown as P extends undefined
            ? () => void
            : (payload: P) => void,
    };
};
