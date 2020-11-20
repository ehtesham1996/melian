import React, { CSSProperties } from "react";
// import { SelectProps as SelectPropsA } from "antd/lib/select/index";
import { SelectStyled } from "./style";
import { Select as SelectA } from "antd";
const { Option } = SelectA;

interface SelectProps {
	children: any;
	mode?: "multiple" | "tags";
	labelInValue?: boolean;
	placeholder?: string;
	style?: CSSProperties;
}
/**
 * TextField Component description
 */
const Select = (props: SelectProps) => <SelectStyled size="large" {...props} />;

Select.displayName = "Select";
// @ts-ignore
Select.Option = Option;

export default Select;
export { Select, Option };
