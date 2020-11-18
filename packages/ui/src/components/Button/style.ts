/* eslint-disable indent */
import { Button as ButtonA } from "antd";
import styled, { css } from "styled-components";
import { ButtonProps } from "./types";

const ButtonStyled = styled(ButtonA)<ButtonProps>`
	&,
	:focus,
	:hover {
		${({ type }) =>
			!type &&
			css`
				border: 1.5px solid var(--melian-color-purple);
			`}

		color: ${({ color }) => color || "var(--melian-color-purple)"};
		border-radius: 8px;

		${({ $backgroundColor }) =>
			$backgroundColor &&
			css`
				background-color: ${$backgroundColor};
			`}

		${({ size }) =>
			size === "large" &&
			css`
				min-width: 118px;
				height: 48px;
			`}
	}
`;

export { ButtonStyled };
