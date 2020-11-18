import React, { forwardRef } from "react";
import { InputStyled } from "./style";
import { TextFieldProps } from "./types";

/**
 * TextField Component description
 */
const TextField = forwardRef((props: TextFieldProps, ref) => (
	// <input {...props} ref={ref} />
	<InputStyled size="large" {...props} ref={ref} />
));

TextField.displayName = "TextField";

export default TextField;
export { TextField };
