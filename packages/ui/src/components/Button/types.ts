import {
	BaseButtonProps as ButtonPropsA,
	NativeButtonProps,
} from "antd/es/button/button";

export interface ButtonProps extends NativeButtonProps, ButtonPropsA {
	className?: ButtonPropsA["className"];
	size?: ButtonPropsA["size"];
	type?: ButtonPropsA["type"];
	icon?: ButtonPropsA["icon"];
	onClick?: NativeButtonProps["onClick"];
	$backgroundColor?: string;
}
