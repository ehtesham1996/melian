import React from "react";
import Component from "./index";
import { Story } from "@storybook/react";

export default {
	title: "Box",
	component: Component,
};

const Template: Story<typeof Component> = (args: any) => (
	<Component {...args} />
);

export const Empty = Template.bind({});
Empty.args = {
	children: "hello world",
	border: "1px solid red",
	padding: 30,
};
