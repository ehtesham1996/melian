import { InputProps } from "antd/lib/input/Input";

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
	displayName?: string;
}
