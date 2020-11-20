import React from "react";
import Component from "./index";
import { Story } from "@storybook/react";

export default {
	title: "Typography",
	component: Component,
};

const Template: Story<typeof Component> = (args) => <Component {...args} />;

export const Typography = Template.bind({});
Typography.args = {
	children: "Hello world",
};

export const TypographyH1 = Template.bind({});
TypographyH1.args = {
	as: "h1",
	children: "Hello world",
};
