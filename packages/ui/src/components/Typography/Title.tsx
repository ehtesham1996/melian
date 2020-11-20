import React, { ReactElement } from "react";
import { TitleProps } from "./types";
import Typography from "./Typography";

function Title({ level, ...props }: TitleProps): ReactElement {
	return (
		<Typography
			as={level && `h${level}`}
			$gradient
			$color="--melian-color-gradient-03"
			$variant="subtitle"
			{...props}
		/>
	);
}

export default Title;
export { Title };
