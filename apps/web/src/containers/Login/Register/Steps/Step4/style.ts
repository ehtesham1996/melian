import { Box } from "@melian/ui";
import { BoxProps } from "@melian/ui/src/components/Box/types";
import { Table } from "antd";
import { TableProps } from "antd/lib/table";
import { Interface } from "services/user";
import styled, { css } from "styled-components";

const TableStyled = styled(Table)<TableProps<Interface>>`
	& .invisible {
		background: white;
		border-bottom: none;
	}
`;

const StatusIndicator = styled(Box).attrs({
	size: 6,
	margin: "8px",
})<BoxProps & { $color?: string }>`
	float: left;
	${({ $color }) =>
		css`
			background: ${$color};
		`}
	border-radius: 33px;
`;

export { TableStyled, StatusIndicator };
