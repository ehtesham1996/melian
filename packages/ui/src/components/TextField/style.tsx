import styled, { css } from "styled-components";
import { Input } from "antd";

const InputStyled = styled(Input)`
	border-radius: 4px;
	${({ size }) =>
		size === "large" &&
		css`
			min-height: 58px;
		`}
	border: 1px solid var(--melian-input-border-color);
	background: var(--melian-input-background-color);
`;

export { InputStyled };
