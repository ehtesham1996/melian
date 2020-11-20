/* eslint-disable indent */
import { Button } from "@melian/ui";
import { ButtonProps } from "antd/lib/button";
import styled, { css } from "styled-components";

const ButtonStyled = styled(Button)<
	ButtonProps & { $borderColor: string; $color?: string }
>`
	&&,
	&&:hover,
	&&:focus,
	&&:active {
		${({ $color }) =>
			$color &&
			css`
				color: ${$color};
			`}
		border-left: 5px solid ${({ $borderColor }) => $borderColor};
		border-radius: 0;

		/* border-left: 10px solid;
		border-image-source: var(--melian-color-gradient-03);
		border-image-slice: 1;
		border: 5px solid;
		border-image-source: linear-gradient(270deg, #ffda61 0%, #23d8c4 100%); */
	}
`;

export { ButtonStyled };
