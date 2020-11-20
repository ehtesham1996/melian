import { TitleProps as TitlePropsA } from "antd/lib/typography/Title";
import { TypographyProps as TypographyPropsA } from "antd/lib/typography/Typography";
import fonts from "assets/style/fonts.json";

export interface TypographyProps {
	as?: any;
	$color?: string;
	$gradient?: boolean;
	$wordWrap?: boolean;
	$variant?: keyof typeof fonts;
	children?: TypographyPropsA["children"];
}

export interface TitleProps extends TypographyProps {
	level?: TitlePropsA["level"];
}
