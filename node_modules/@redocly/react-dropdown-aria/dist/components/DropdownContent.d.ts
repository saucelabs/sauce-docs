/// <reference types="react" />
import { DropdownOption, OptionRendererFunction, OnOptionClicked } from '../utils/types';
interface DropdownContentProps {
    selectedOption: string;
    options: DropdownOption[];
    focusedIndex: number;
    onOptionClicked: OnOptionClicked;
    optionItemRenderer?: OptionRendererFunction;
    empty: boolean;
}
declare function DropdownContent({ selectedOption, options, focusedIndex, onOptionClicked, optionItemRenderer, empty, }: DropdownContentProps): JSX.Element;
export default DropdownContent;
