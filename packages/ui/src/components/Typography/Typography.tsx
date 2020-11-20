import React, { PropsWithChildren, ReactElement } from "react";
import { TypographyStyled } from "./style";
import { TypographyProps } from "./types";

function Typography({
	$color,
	...props
}: PropsWithChildren<TypographyProps>): ReactElement {
	return (
		<TypographyStyled
			as="span"
			{...props}
			$color={$color?.startsWith("--") ? `var(${$color})` : $color}
		/>
	);
}

export default Typography;
