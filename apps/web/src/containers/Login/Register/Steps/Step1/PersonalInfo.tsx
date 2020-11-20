import React, {
	Fragment,
	ReactElement,
	useEffect,
	useRef,
	useState,
} from "react";
import {
	Box,
	Button,
	DatePicker,
	Select,
	Typography,
	TypographyTitle,
} from "@melian/ui";
import { Col, Image, Row } from "antd";
import useFileUpload from "hooks/useFileUpload";
import { useStore } from "components/Store";
import uploadImg from "assets/svg/upload.svg";
import { FieldWithItem } from "components/Field";
const mb = 1024 * 1024;

const toSize = (size: number) => (size / mb).toFixed(2).replace(".", ",");

const genders = ["Male", "Female", "Undefined"].map((i) => ({
	value: i,
	label: i,
}));

function PersonalInfo(): ReactElement {
	const { handleUpload, files } = useFileUpload();
	const inputUpload = useRef<HTMLInputElement>(null);
	const { set, state } = useStore("register");
	const [fileError, setFileError] = useState(false);

	useEffect(() => {
		if (files?.length) {
			if (files[0].metadata.size > mb * 3) {
				setFileError(true);
			} else {
				set("values.profile_photo", files[0].image64);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [files]);

	const openFileUpload = () => {
		setFileError(false);
		inputUpload.current?.click();
	};

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
							onClick={openFileUpload}
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
							<Button onClick={openFileUpload}>Upload</Button>
						</Box>
						{fileError && files && (
							<Box marginTop={2}>
								<Typography $color="red">
									Error: Max file size exceeded (
									{toSize(files[0].metadata.size)}mb)
								</Typography>
							</Box>
						)}
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
							<Select options={genders} />
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
