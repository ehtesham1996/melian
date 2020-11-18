import React from "react";
import Button from "./Button";
import { LeftOutlined } from "@ant-design/icons";
import { ButtonProps } from "./types";

interface Props extends ButtonProps {}

const Back = (props: Props) => (
	<Button type="link" icon={<LeftOutlined />} {...props}>
		{props.children || "Back"}
	</Button>
);

export default Back;
