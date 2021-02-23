import { Option, OptionGroup, DropdownOption } from './types';
export declare function isOptionGroup(option: Option | OptionGroup): option is OptionGroup;
export declare const arrayReducer: (acc: Option[], val: DropdownOption) => Option[];
export declare const filterDropdownOptions: (options: DropdownOption[], searchTerm: string) => DropdownOption[];
export declare function cx(...args: (string | object | undefined)[]): string;
