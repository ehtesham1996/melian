import React from "react";
import { InputStyled } from "./style";
import { TextFieldProps } from "./types";

/**
 * TextField Component description
 */
const TextField = (props: TextFieldProps) => (
	<InputStyled size="large" {...props} />
);

TextField.displayName = "TextField";

export default TextField;
export { TextField };
