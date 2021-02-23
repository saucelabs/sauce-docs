import { ObservableObjectAdministration } from "../internal";
export declare type Annotation = {
    annotationType_: string;
    make_(adm: ObservableObjectAdministration, key: PropertyKey): void;
    extend_(adm: ObservableObjectAdministration, key: PropertyKey, descriptor: PropertyDescriptor, proxyTrap: boolean): boolean | null;
    options_?: any;
};
export declare type AnnotationMapEntry = Annotation | true | false;
export declare type AnnotationsMap<T, AdditionalFields extends PropertyKey> = {
    [P in Exclude<keyof T, "toString">]?: AnnotationMapEntry;
} & Record<AdditionalFields, AnnotationMapEntry>;
/**
 * Infers the best fitting annotation from property descriptor or false if the field shoudn't be annotated
 * - getter(+setter) -> computed
 * - setter w/o getter -> false (ignore)
 * - flow -> false (ignore)
 * - generator -> flow
 * - action -> false (ignore)
 * - function -> action (optionally bound)
 * - other -> defaultAnnotation
 */
export declare function inferAnnotationFromDescriptor(desc: PropertyDescriptor, defaultAnnotation: Annotation, autoBind: boolean): Annotation | false;
export declare function isAnnotation(thing: any): boolean;
export declare function isAnnotationMapEntry(thing: any): boolean;
