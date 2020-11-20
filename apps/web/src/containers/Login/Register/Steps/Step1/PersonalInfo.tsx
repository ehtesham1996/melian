import React, { Fragment, ReactElement, useEffect, useRef } from "react";
import {
	Box,
	Button,
	DatePicker,
	Option,
	Select,
	Typography,
	TypographyTitle,
} from "@melian/ui";
import { Col, Image, Row } from "antd";
import useFileUpload from "hooks/useFileUpload";
import { useStore } from "components/Store";
import uploadImg from "assets/svg/upload.svg";
import { FieldWithItem } from "components/Field";

function PersonalInfo(): ReactElement {
	const { handleUpload, files } = useFileUpload();
	const inputUpload = useRef<HTMLInputElement>(null);
	const { set, state } = useStore("register");

	useEffect(() => {
		if (files?.length) {
			set("values.profile_photo", files[0].image64);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [files]);

	return (
		<Fragment>
			<TypographyTitle>Personal Information</TypographyTitle>
			<Box marginTop="33px">
				<Box display="flex">
					<input
						type="file"
						accept="image/*"
						onChange={handleUpload}
						style={{ display: "none" }}
						ref={inputUpload}
					/>
					<Box
						borderRadius={100}
						overflow="hidden"
						width={122}
						height={122}
					>
						<Image
							preview={false}
							src={state?.values?.profile_photo ?? uploadImg}
							width={122}
							height={122}
							onClick={() => inputUpload.current?.click()}
						/>
					</Box>
					<Box
						marginTop={2}
						marginLeft="34px"
						display="flex"
						flexDirection="column"
					>
						<Typography>Upload your picture</Typography>
						<Box marginTop={2}>
							<Typography $color="--melian-color-gray-05">
								Send a 122x122 pixel or more
							</Typography>
						</Box>
						<Box marginTop="20px">
							<Button
								onClick={() => inputUpload.current?.click()}
							>
								Upload
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box marginTop="38px">
				<Row>
					<Col span={6}>
						<FieldWithItem
							label="Name"
							name="first_name"
							specialRules={["required"]}
						/>
					</Col>
					<Col span={6}>
						<FieldWithItem
							label="Last name"
							name="last_name"
							specialRules={["required"]}
						/>
					</Col>
				</Row>
				<Row>
					<Col span={5}>
						<FieldWithItem
							label="Gender"
							name="gender"
							specialRules={["required"]}
						>
							<Select>
								<Option value="demo">Demo</Option>
							</Select>
						</FieldWithItem>
					</Col>
					<Col span={7}>
						<FieldWithItem
							label="Birthday date"
							name="birthday_date"
							specialRules={["required"]}
						>
							<DatePicker />
						</FieldWithItem>
					</Col>
				</Row>
			</Box>
		</Fragment>
	);
}

export default PersonalInfo;
