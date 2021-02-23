import React from "react";
declare type Disposer = () => void;
export declare function disposeOnUnmount(target: React.Component<any, any>, propertyKey: PropertyKey): void;
export declare function disposeOnUnmount<TF extends Disposer | Array<Disposer>>(target: React.Component<any, any>, fn: TF): TF;
export {};
