import React from "react";
// import { SelectProps as SelectPropsA } from "antd/lib/select/index";
import { SelectStyled } from "./style";
import { Select as SelectA } from "antd";
const { Option } = SelectA;

interface SelectProps {
	children: any;
	// children: SelectPropsA["Option"][] | SelectPropsA["Option"];
	// Option?: SelectPropsA["Option"];
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
