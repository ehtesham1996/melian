import React from "react";
import Component from "./index";
import { Story } from "@storybook/react";

export default {
	title: "Typography",
	component: Component,
};

const Template: Story<typeof Component> = (args) => <Component {...args} />;

export const ComponentEmpty = Template.bind({});
ComponentEmpty.args = {
	size: "small",
};
