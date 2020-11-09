import React, { Fragment, PropsWithChildren, ReactElement } from "react";
import { ReactComponent as Account } from "@melian/ui/src/assets/image/svg/account.svg";

export interface ButtonProps {
	/**
	 * Label for the component
	 */
	label?: string;
}

function Button({
	label,
	children,
}: PropsWithChildren<ButtonProps>): ReactElement {
	return (
		<Fragment>
			<div
				style={{
					height: 20,
					width: 30,
				}}
			>
				<Account />
			</div>
			<button>
				{label} component {children}
			</button>
		</Fragment>
	);
}

export default Button;
export { Button };
