/* eslint-disable indent */
import styled, { css } from "styled-components";
import { Select } from "antd";

const SelectStyled = styled(Select)`
	&&&& {
		.ant-select-selection-search-input {
			height: 100%;
		}
		.ant-select-selector {
			width: 100%;
			height: 100%;
			position: absolute;

			border: 1px solid var(--melian-input-border-color);
			background: var(--melian-input-background-color);
			border-radius: 4px;
		}
		${({ size }) =>
			size === "large" &&
			css`
				&:not(.ant-select-multiple) .ant-select-selection-item {
					line-height: 58px;
				}
				display: block;
				min-height: 58px;
			`}
		&.ant-select-multiple {
			.ant-select-selection-item {
				border-radius: 4px;
				background: var(--melian-color-purple);
				color: white;
			}
			.ant-select-selection-item-remove {
				color: white;
			}
		}
	}
	border-radius: 4px;
`;

export { SelectStyled };
