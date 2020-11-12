import React, { forwardRef, ReactElement } from "react";
import { InputProps } from "antd/lib/input/Input";
import { InputStyled } from "./style";

export interface TextFieldProps
	extends Omit<
		React.InputHTMLAttributes<HTMLInputElement>,
		"size" | "prefix" | "type"
	> {
	addonAfter?: InputProps["addonAfter"];
	addonBefore?: InputProps["addonBefore"];
	allowClear?: InputProps["allowClear"];
	bordered?: InputProps["bordered"];
	defaultValue?: InputProps["defaultValue"];
	disabled?: InputProps["disabled"];
	id?: InputProps["id"];
	maxLength?: InputProps["maxLength"];
	prefix?: InputProps["prefix"];
	size?: InputProps["size"];
	suffix?: InputProps["suffix"];
	type?: InputProps["type"];
	value?: InputProps["value"];
	onChange?: InputProps["onChange"];
	onPressEnter?: InputProps["onPressEnter"];
	love?: boolean;
	placeholder?: InputProps["placeholder"];
	name?: InputProps["name"];
	width?: string | number;
}
// T1
// interface TextFieldProps
// 	extends Pick<
// 		InputProps,
// 		| "addonAfter"
// 		| "addonBefore"
// 		| "allowClear"
// 		| "bordered"
// 		| "defaultValue"
// 		| "disabled"
// 		| "id"
// 		| "maxLength"
// 		| "prefix"
// 		| "size"
// 		| "suffix"
// 		| "type"
// 		| "value"
// 		| "onChange"
// 		| "onPressEnter"
// 	> {
// 	love?: boolean;
// }

// T2
// type TextFieldProps = {
// 	love?: boolean;
// } & Pick<
// 	InputProps,
// 	| "addonAfter"
// 	| "addonBefore"
// 	| "allowClear"
// 	| "bordered"
// 	| "defaultValue"
// 	| "disabled"
// 	| "id"
// 	| "maxLength"
// 	| "prefix"
// 	| "size"
// 	| "suffix"
// 	| "type"
// 	| "value"
// 	| "onChange"
// 	| "onPressEnter"
// >;
/**
 * TextField Component description
 */
const TextField = forwardRef((props: TextFieldProps, ref) => (
	<InputStyled {...props} ref={ref} />
));

TextField.displayName = "TextField";

export default TextField;
export { TextField };
