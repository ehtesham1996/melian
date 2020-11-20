import { LabeledValue } from "antd/lib/select";
import { CSSProperties } from "react";

export interface SelectProps {
	children?: any;
	mode?: "multiple" | "tags";
	labelInValue?: boolean;
	placeholder?: string;
	style?: CSSProperties;
	options?: LabeledValue[];
	filterOption?: (input: any, option: any) => boolean;
	showSearch?: boolean;
}
