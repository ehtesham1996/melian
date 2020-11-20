import React, { ReactElement } from "react";
import { Col, Row } from "antd";
import { FieldWithItem } from "components/Field";
import {
	AddressBlock,
	Box,
	Select,
	Option,
	Button,
	TypographyTitle,
} from "@melian/ui";
import { useStore } from "components/Store";
import { AddressBlockProps } from "@melian/ui/src/components/AddressBlock/types";

const data = [
	{
		value: 1,
		text: "alpha",
	},
];
function Step3(): ReactElement {
	const { state, set, update } = useStore("register");
	const workplacesField = [
		"name",
		"address_line",
		"zip_code",
		"country",
		"city",
	];

	const addWorkplace = () => {
		const values = state.form.getFieldsValue(workplacesField);
		state.form.resetFields(workplacesField);

		update("values", (actual: any = []) => {
			const workplaces =
				actual?.workplaces?.filter(
					({ name }: Partial<AddressBlockProps>) =>
						name !== values.name
				) ?? [];

			return {
				workplaces: workplaces.concat(values),
			};
		});
	};

	const removeWorkplace = (key: string) => {
		set("values", (actual: any) => ({
			...actual,
			workplaces: actual.workplaces.filter(
				({ name }: Partial<AddressBlockProps>) => key !== name
			),
		}));
	};

	return (
		<div>
			<TypographyTitle>Professional information</TypographyTitle>
			<Box marginTop="30px">
				<Row>
					<Col span={6}>
						<FieldWithItem
							label="Credentials"
							name="credential"
							specialRules={["required"]}
						/>
					</Col>
					<Col span={6}>
						<FieldWithItem
							label="Credential code"
							name="credential_code"
							specialRules={["required"]}
						/>
					</Col>
				</Row>

				<Row>
					<Col span={13}>
						<FieldWithItem
							label="Specialities"
							name="specialities"
							specialRules={["required"]}
						>
							<Select
								mode="multiple"
								labelInValue
								// value={value}
								// notFoundContent={
								// 	fetching ? <Spin size="small" /> : null
								// }
								// onSearch={this.fetchUser}
								// onChange={this.handleChange}
								// filterOption={false}
								placeholder="Select users"
								style={{ width: "100%" }}
							>
								{data.map((d) => (
									<Option key={d.value} value={d.value}>
										{d.text}
									</Option>
								))}
							</Select>
						</FieldWithItem>
					</Col>
				</Row>
			</Box>

			<TypographyTitle>Workplaces</TypographyTitle>
			<Row>
				<Col span={12}>
					<FieldWithItem label="Name" name="name" />
					<FieldWithItem label="Address line" name="address_line" />
					<Row>
						<Col span={8}>
							<FieldWithItem label="ZIP Code" name="zip_code" />
						</Col>
						<Col span={16}>
							<FieldWithItem label="Country" name="country" />
						</Col>
					</Row>
					<FieldWithItem label="City" name="city" />

					<Button
						onClick={() => {
							addWorkplace();
						}}
					>
						Add workplace
					</Button>
				</Col>
				<Col span={12}>
					<TypographyTitle
						$color="--melian-color-gradient-02"
						level={3}
						$variant="h3"
					>
						Your workplaces
					</TypographyTitle>
					{state?.values?.workplaces?.map(
						(address: AddressBlockProps) => (
							<AddressBlock
								key={address.name}
								{...address}
								onDelete={() => {
									removeWorkplace(address.name);
								}}
							/>
						)
					)}
				</Col>
			</Row>
		</div>
	);
}

export default Step3;
