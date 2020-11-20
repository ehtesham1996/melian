import React, { Fragment } from "react";
import { SelectStyled } from "./style";
import { Select as SelectA } from "antd";
import { LabeledValue } from "antd/lib/select";
import { SelectProps } from "./types";
const { Option } = SelectA;

const buildOptions = (list: LabeledValue[]) => (
	<Fragment>
		{list.map(({ label, value }) => (
			<Option key={value} value={value}>
				{label}
			</Option>
		))}
	</Fragment>
);

/**
 * TextField Component description
 */
const Select = ({ options, ...props }: SelectProps) => (
	<SelectStyled size="large" {...props}>
		{props.children || (options && buildOptions(options))}
	</SelectStyled>
);

Select.displayName = "Select";
// @ts-ignore
Select.Option = Option;

export default Select;
export { Select, Option };
