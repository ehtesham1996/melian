import React, { Fragment, ReactElement } from "react";
import { Option, Select, TypographyTitle } from "@melian/ui";
import { Col, Row } from "antd";
import { FieldWithItem } from "components/Field";

function ContactInfo(): ReactElement {
	return (
		<Fragment>
			<TypographyTitle>Contact info</TypographyTitle>
			<Row>
				<Col span={12}>
					<FieldWithItem
						label="Country"
						name="country"
						specialRules={["required"]}
						wrapperCol={{ span: 20 }}
					>
						<Select>
							<Option value="brazil">Brazil</Option>
						</Select>
					</FieldWithItem>
				</Col>
			</Row>
			<Row>
				<Col span={4}>
					<FieldWithItem label="Area code" name="area_code" />
				</Col>
				<Col span={20}>
					<FieldWithItem label="Phone" name="phone" />
				</Col>
			</Row>
			<FieldWithItem
				label="E-mail"
				name="email"
				specialRules={["required", "email"]}
			/>
			<Row>
				<Col span={7}>
					<FieldWithItem
						label="Password"
						name="password"
						extra="Your password must have at least 8 characters including numbers and letters."
						specialRules={["required"]}
					/>
				</Col>
				<Col span={7}>
					<FieldWithItem
						label="Confirm Password"
						name="confirm_password"
						specialRules={["required"]}
						rules={[
							({ getFieldValue }) => ({
								validator(rule, value) {
									if (
										!value ||
										getFieldValue("password") === value
									) {
										return Promise.resolve();
									}
									return Promise.reject(
										"The two passwords that you entered do not match!"
									);
								},
							}),
						]}
					/>
				</Col>
			</Row>
		</Fragment>
	);
}

export default ContactInfo;
