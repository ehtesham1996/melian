import React, { PropsWithChildren, ReactElement } from "react";
import { ButtonStyled } from "./style";
import { ButtonProps } from "./types";

/**
 * This is the Button component
 */
function Button(props: PropsWithChildren<ButtonProps>): ReactElement {
	return <ButtonStyled size="large" {...props} />;
}

export default Button;
