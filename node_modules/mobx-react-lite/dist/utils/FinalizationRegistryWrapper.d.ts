declare class FinalizationRegistryType<T> {
    constructor(cleanup: (cleanupToken: T) => void);
    register(object: object, cleanupToken: T, unregisterToken?: object): void;
    unregister(unregisterToken: object): void;
}
declare const FinalizationRegistryLocal: typeof FinalizationRegistryType | undefined;
export { FinalizationRegistryLocal as FinalizationRegistry };
