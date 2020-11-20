import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { layout, space, border, flexbox, typography } from "styled-system";
import { BoxProps } from "./types";

const BoxElement = ({ children, className }: PropsWithChildren<BoxProps>) => (
	<div className={className}>{children}</div>
);

const BoxStyled = styled(BoxElement)`
	${layout}
	${space}
	${border}
	${flexbox}
	${typography}
`;

export { BoxStyled };
