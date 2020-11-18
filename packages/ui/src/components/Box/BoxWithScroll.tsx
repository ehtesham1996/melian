import React, { PropsWithChildren, ReactElement } from "react";
import Box from "./index";
import SimpleBar from "simplebar-react";
import { BoxProps } from "./types";

interface Props extends BoxProps {
	scrollProps?: any;
	maxHeight: number;
}

function BoxWithScroll({
	maxHeight,
	scrollProps,
	children,
	...props
}: PropsWithChildren<Props>): ReactElement {
	return (
		<SimpleBar style={{ maxHeight }} {...scrollProps}>
			<Box {...props}>{children}</Box>
		</SimpleBar>
	);
}

export default BoxWithScroll;
