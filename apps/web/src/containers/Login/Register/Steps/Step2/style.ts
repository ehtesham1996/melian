import { Box, TextField } from "@melian/ui";
import styled from "styled-components";

const BoxStyled = styled(Box).attrs({
	flexDirection: "row",
	display: "flex",
	justifyContent: "space-around",
	marginTop: "40px",
	justifySelf: "center",
	alignSelf: "center",
})`
	& > * {
		margin: 0 8px;
	}
`;

const TextFieldStyled = styled(TextField).attrs({
	maxLength: 1 as number,
})`
	text-align: center;
`;

export { BoxStyled, TextFieldStyled };
