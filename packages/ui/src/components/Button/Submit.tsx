import React, { PropsWithChildren, ReactElement } from "react";
import Button from "./Button";
import { ButtonProps } from "./types";

interface Props extends ButtonProps {}

function Submit({
	children,
	...props
}: PropsWithChildren<Props>): ReactElement {
	return (
		<Button
			$backgroundColor="var(--melian-color-purple)"
			color="white"
			{...props}
		>
			{children || "Next Step"}
		</Button>
	);
}

export default Submit;
