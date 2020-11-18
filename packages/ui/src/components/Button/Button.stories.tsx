import React from "react";
import { Button, ButtonBack, ButtonSubmit } from "./index";
import { Story } from "@storybook/react";

export default {
	title: "Button",
	component: Button,
	argTypes: {
		$backgroundColor: { control: "color" },
	},
};

const Template: Story<typeof Button> = (args) => <Button {...args} />;
const Template2: Story<typeof Button> = (args) => <ButtonBack {...args} />;
const Template3: Story<typeof Button> = (args) => <ButtonSubmit {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: "hello world",
};

export const Back = Template2.bind({});
Back.args = {};

export const Submit = Template3.bind({});
Submit.args = {};
