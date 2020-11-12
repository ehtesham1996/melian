import React from "react";
import Button from "./index";
import { Story } from "@storybook/react";

export default {
	title: "Button",
	component: Button,
};

const Template: Story<typeof Button> = (args) => <Button {...args} />;

export const ButtonEmpty = Template.bind({});
ButtonEmpty.args = {
	children: "hello world",
};
