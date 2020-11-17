import styled from "styled-components";
import { Typography } from "antd";

const TypographyStyled = styled(Typography.Title)``;

const TitleStyled = styled(TypographyStyled)`
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
