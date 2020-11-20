import { Form } from "antd";
import React, { PropsWithChildren, ReactElement } from "react";
import { TextField as TF } from "@melian/ui";
import { FormItemProps, Rule } from "antd/lib/form";

interface Props {
	name: string;
	label: string;
	rules?: Rule[];
	specialRules?: any;
	wrapperCol?: FormItemProps["wrapperCol"];
	extra?: FormItemProps["extra"];
}

const translator: any = {
	required: {
		required: true,
	},
	email: {
		pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
		message: "invalid email address",
	},
};

const specialRulesToRules = (myRules: any = []) =>
	myRules.map((rule: any) => translator[rule]);

function FieldWithItem({
	children,
	specialRules,
	rules = [],
	...props
}: PropsWithChildren<Props>): ReactElement {
	if (specialRules) {
		rules = rules.concat(specialRulesToRules(specialRules));
	}

	return (
		<Form.Item {...props} rules={rules}>
			{children || <TF />}
		</Form.Item>
	);
}

export default FieldWithItem;
