import React from "react";
import Component from "./Title";
import { Story } from "@storybook/react";

export default {
	title: "Typography/Title",
	component: Component,
};

const Template: Story<typeof Component> = (args: any) => (
	<Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
	children: "Hello world",
};
