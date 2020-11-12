import React, { PropsWithChildren, ReactElement } from "react";
import { Button as ButtonA } from "antd";
import { ButtonProps as ButtonPropsA } from "antd/lib/button/button";

/**
 * This is the Button component
 */
function Button(props: PropsWithChildren<ButtonPropsA>): ReactElement {
	return <ButtonA {...props} />;
}

export default Button;
export { Button };
