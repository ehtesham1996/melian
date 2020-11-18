import {
	LayoutProps,
	SpaceProps,
	BorderProps,
	FlexboxProps,
	TypographyProps,
	PositionProps,
} from "styled-system";

export interface BoxProps
	extends LayoutProps,
		SpaceProps,
		BorderProps,
		FlexboxProps,
		TypographyProps,
		PositionProps {
	className?: string;
}
