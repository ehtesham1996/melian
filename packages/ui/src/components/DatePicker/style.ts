import styled, { css } from "styled-components";
import { DatePicker } from "antd";

const DatePickerStyled = styled(DatePicker)`
	/* */
	.ant-picker-suffix {
		font-size: 30px;
	}
	border-radius: 4px;
	${({ size }) =>
		size === "large" &&
		css`
			min-height: 58px;
		`}
	border: 1px solid var(--melian-input-border-color);
	background: var(--melian-input-background-color);
	width: 100%;
`;

export { DatePickerStyled };
