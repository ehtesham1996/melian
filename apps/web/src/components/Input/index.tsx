import React, { Fragment } from "react";
import { TextField } from "@melian/ui";
import { TextFieldProps } from "@melian/ui/src/components/TextField";
import { Controller } from "react-hook-form";

interface InputControlledProps extends Pick<TextFieldProps, "onChange"> {
	name: string;
	label: string;
	rules: any;
	errors: any;
	control: any;
	defaultValue?: any;
}

const InputControlled = ({
	control,
	name,
	label,
	rules,
	errors,
	onChange,
	...props
}: InputControlledProps) => (
	<Fragment>
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={(props2) => (
				<TextField
					{...props2}
					{...props}
					onChange={(value) => {
						onChange && onChange(value);
						props2.onChange(value);
					}}
					placeholder={label + (rules.required && "*")}
				/>
			)}
			{...props}
		/>
		{errors ? errors.message || `${label} error` : ""}
	</Fragment>
);

export { InputControlled };
