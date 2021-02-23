import * as React from 'react';
import { Option, ItemRenderer, OnOptionClicked } from '../utils/types';
export interface OptionItemProps {
    option: Option;
    optionClass?: string;
    onOptionClicked: OnOptionClicked;
    itemRenderer?: ItemRenderer;
    index: number;
    selected: boolean;
    focused: boolean;
}
declare const _default: React.MemoExoticComponent<(props: OptionItemProps) => JSX.Element>;
export default _default;
