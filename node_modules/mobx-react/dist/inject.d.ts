import { IReactComponent } from "./types/IReactComponent";
import { IWrappedComponent } from "./types/IWrappedComponent";
import { IStoresToProps } from "./types/IStoresToProps";
export declare function inject(...stores: Array<string>): <T extends IReactComponent<any>>(target: T) => T & (T extends IReactComponent<infer P> ? IWrappedComponent<P> : never);
export declare function inject<S, P, I, C>(fn: IStoresToProps<S, P, I, C>): <T extends IReactComponent>(target: T) => T & IWrappedComponent<P>;
