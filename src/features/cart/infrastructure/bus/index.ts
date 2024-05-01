import { createEventHook } from "@/shared/hooks";

const {
    useOnEvent: useOnCartSuccess,
    useTriggerEvent: useTriggerCartSuccess,
} = createEventHook();

export const cartBus = {
    useOnCartSuccess,
    useTriggerCartSuccess,
};
