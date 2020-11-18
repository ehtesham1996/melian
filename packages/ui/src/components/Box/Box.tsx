import React, { PropsWithChildren, ReactElement } from "react";
import { BoxStyled } from "./style";
import { BoxProps } from "./types";

function Box(props: PropsWithChildren<BoxProps>): ReactElement {
	return <BoxStyled {...props} />;
}

export default Box;
