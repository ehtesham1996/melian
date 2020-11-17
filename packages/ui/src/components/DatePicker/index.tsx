import React from "react";
import { DatePickerProps as DatePickerPropsA } from "antd/lib/date-picker/index";
import { DatePickerStyled } from "./style";
// import "moment/locale/pt-br";
import locale from "antd/es/date-picker/locale/en_US";

interface DatePickerProps {
	format?: DatePickerPropsA["format"];
	locale?: DatePickerPropsA["locale"];
}
/**
 * TextField Component description
 */
const DatePicker = (props: DatePickerProps) => (
	<DatePickerStyled
		size="large"
		format="DD MMMM YYYY"
		locale={locale}
		{...props}
	/>
);

DatePicker.displayName = "DatePicker";

export default DatePicker;
export { DatePicker };
