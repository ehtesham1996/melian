import styled from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const DocumentStyled = styled.div`
	/* max-height: 300px; */
	/* overflow-y: auto; */
	background: var(--melian-color-gray-07);
	border-radius: 4px;
	/* margin: 10px 0; */
	padding: 25px 20px 25px 55px;
`;

const ScrollbarStyled = styled(SimpleBar)`
	.simplebar-scrollbar::before {
		background-color: #c4c4c4;
	}
`;

export { DocumentStyled, ScrollbarStyled };
