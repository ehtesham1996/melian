import styled, { css } from "styled-components";
import { Typography } from "antd";
import { TypographyProps } from "./types";
import fonts from "assets/style/fonts.json";

const getFont = (key: keyof typeof fonts) => fonts[key];

const TypographyStyled = styled.span<TypographyProps>`
	margin: 0;
	padding: 0;
	${({ $gradient, $color }) =>
		$gradient
			? css`
					background: ${$color};
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
			  `
			: css`
					color: ${$color};
			  `}
	${({ $variant }) => $variant && getFont($variant)}
	${({ $wordWrap }) =>
		$wordWrap &&
		css`
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		`}
`;

const TitleStyled = styled(Typography.Title)`
	&& {
		font-family: Asap;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 18px;
		text-transform: uppercase;
		display: inline;
		background: var(--melian-color-gradient-03);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;

export { TypographyStyled, TitleStyled };
