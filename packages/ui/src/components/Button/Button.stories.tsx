import React from "react";
import Button from "./index";
import mdx from "./Button.docs.mdx";

const config = {
	title: "Button",
	parameters: {
		docs: { page: mdx },
	},
};

export default config;

export const ButtonEmpty = () => <Button />;

export const buttonWithContent = () => <Button>hello</Button>;
