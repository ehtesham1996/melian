// import { TypographyProps as TypographyPropsA } from "antd/lib/typography";
// import ExportTypography from "antd/lib/typography/Typography"
import { TitleProps } from "antd/lib/typography/Title";
import React, { ReactElement } from "react";
import { TitleStyled } from "./style";

interface TypographyProps {
	children: TitleProps["children"];
	level?: TitleProps["level"];
}

function Title(props: TypographyProps): ReactElement {
	return <TitleStyled {...props} />;
}

export default Title;
export { Title };
