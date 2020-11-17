import React from "react";
import Component from "./index";
import { Story } from "@storybook/react";

export default {
	title: "DatePicker",
	component: Component,
};

const Template: Story<typeof Component> = (args: any) => (
	<Component {...args} />
);

export const Empty = Template.bind({});
Empty.args = {};
