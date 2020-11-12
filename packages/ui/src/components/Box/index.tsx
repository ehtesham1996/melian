import React, { PropsWithChildren, ReactElement } from "react";
import { BoxStyled } from "./style";
import { LayoutProps, SpaceProps, BorderProps } from "styled-system";

interface Props extends LayoutProps, SpaceProps, BorderProps {}

function Box(props: PropsWithChildren<Props>): ReactElement {
	return <BoxStyled {...props} />;
}

export default Box;
export { Box };
