/* eslint-disable indent */
import styled, { css } from "styled-components";
import { Select } from "antd";

const SelectStyled = styled(Select)`
	&&&& {
		.ant-select-selector {
			height: 100%;
			position: absolute;

			border: 1px solid var(--melian-input-border-color);
			background: var(--melian-input-background-color);
			border-radius: 4px;
		}
		${({ size }) =>
			size === "large" &&
			css`
				.ant-select-selection-item {
					line-height: 58px;
				}
				display: block;
				min-height: 58px;
			`}
	}
	border-radius: 4px;
`;

export { SelectStyled };
