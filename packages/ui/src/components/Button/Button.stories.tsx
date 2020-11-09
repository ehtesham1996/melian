import React from "react";
import Button, { ButtonProps } from "./index";
import mdx from "./Button.docs.mdx";
import { Story } from "@storybook/react";

export default {
	title: "Button",
	parameters: {
		docs: { page: mdx },
	},
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const ButtonEmpty = Template.bind({});
ButtonEmpty.args = {
	label: "Welcome",
};
