import React from "react";
import { TextField } from "./index";
import { Story } from "@storybook/react";

export default {
	title: "TextField",
	component: TextField,
	args: {
		bordered: true,
		// placeholder: "Welcome",
	},
	argTypes: {
		size: {
			control: {
				type: "select",
				options: ["small", "middle", "large"],
			},
		},
	},
};

const Template: Story<typeof TextField> = (args) => <TextField {...args} />;

export const TextFieldEmpty = Template.bind({});
TextFieldEmpty.args = {
	size: "small",
};
