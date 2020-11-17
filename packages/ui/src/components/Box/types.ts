import {
	LayoutProps,
	SpaceProps,
	BorderProps,
	FlexboxProps,
} from "styled-system";

export interface BoxProps
	extends LayoutProps,
		SpaceProps,
		BorderProps,
		FlexboxProps {
	className?: string;
}
