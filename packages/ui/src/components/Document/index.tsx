import { Typography } from "antd";
import { Box } from "@melian/ui";
import React, { PropsWithChildren, ReactElement, ReactNode } from "react";
import { ScrollbarStyled, DocumentStyled } from "./style";

interface Props {
	title: string;
	scrollRef?: any;
	maxHeight?: number;
	footer?: ReactNode;
}

function Document({
	children,
	title,
	scrollRef,
	maxHeight = 300,
	footer,
	...props
}: PropsWithChildren<Props>): ReactElement {
	return (
		<DocumentStyled {...props}>
			<Box marginTop="4px">
				<Typography.Text type="secondary">
					Roll to the bottom to agree
				</Typography.Text>
			</Box>
			<Box marginTop="4px">
				<Typography.Title level={4}>{title}</Typography.Title>
			</Box>
			<Box marginTop="54px">
				<ScrollbarStyled style={{ maxHeight }} ref={scrollRef}>
					{children}
				</ScrollbarStyled>
			</Box>
			{footer}
		</DocumentStyled>
	);
}

export default Document;
export { Document };
