import React, { PropsWithChildren, ReactElement } from "react";

interface Props {}

function Button({ children }: PropsWithChildren<Props>): ReactElement {
	return <button>Button component {children}</button>;
}

export default Button;
export { Button };
