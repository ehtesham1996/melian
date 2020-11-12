import React, { ReactElement, useEffect, useRef } from "react";
import { Col, Image, Row } from "antd";
import { Box, Button } from "@melian/ui";
import Photo from "assets/svg/photo.svg";
import { InputControlled } from "components/Input";
import { useForm } from "react-hook-form";
import useFileUpload from "hooks/useFileUpload";
import { phone } from "common/utils/normalize/phone";
import { StepProps } from "./types";

function Step1({ state, onSubmit }: StepProps): ReactElement {
	const { handleUpload, files } = useFileUpload();
	const inputUpload = useRef<HTMLInputElement>(null);
	const {
		handleSubmit,
		control,
		setValue,
		watch,
		register,
		errors,
	} = useForm({
		defaultValues: {
			...state,
		},
	});

	console.log({ state });

	const photoImg = watch("profile_photo");

	useEffect(() => {
		register({ name: "profile_photo" });
		setValue("profile_photo", Photo);
	}, [register, setValue]);

	useEffect(() => {
		if (files?.length) {
			setValue("profile_photo", files[0].image64);
		}
	}, [files, setValue]);

	const password = useRef({});
	password.current = watch("password", "");

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box marginTop={10}>
				<Box marginTop={10}>
					<Row gutter={48}>
						<Col span={12}>
							<Row align="middle">
								<Col span={12}>
									<Image
										src={photoImg}
										width={116}
										height={120}
									/>
								</Col>
								<Col span={12}>
									<input
										type="file"
										accept="image/*"
										onChange={handleUpload}
										style={{ display: "none" }}
										ref={inputUpload}
									/>
									<Button
										onClick={() =>
											inputUpload.current?.click()
										}
									>
										send picture
									</Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</Box>
				<Box marginTop={30}>
					<Row gutter={48}>
						<Col span={12}>
							<InputControlled
								control={control}
								name="first_name"
								label="First Name"
								rules={{ required: true }}
								defaultValue=""
								errors={errors.first_name}
							/>
						</Col>
						<Col span={12}>
							<InputControlled
								control={control}
								label="Last Name"
								name="last_name"
								rules={{ required: true }}
								defaultValue=""
								errors={errors.last_name}
							/>
						</Col>
					</Row>
				</Box>
				<Box marginTop={10}>
					<Row gutter={48}>
						<Col span={12}>
							<Row gutter={11}>
								<Col span={4}>
									<InputControlled
										control={control}
										label={"code"}
										name="code"
										rules={{ required: true }}
										defaultValue=""
										errors={errors.code}
									/>
								</Col>
								<Col span={20}>
									<InputControlled
										control={control}
										label={"mobile number"}
										name="mobile_number"
										rules={{
											required: true,
										}}
										defaultValue=""
										errors={errors.mobile_number}
										onChange={(event: any) => {
											const { value } = event.target;
											event.target.value = phone(value);
										}}
									/>
								</Col>
							</Row>
						</Col>
					</Row>
				</Box>
				<Box marginTop={10}>
					<Row gutter={48}>
						<Col span={12}>
							<InputControlled
								control={control}
								label={"e-mail"}
								name="email"
								rules={{
									required: true,
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: "invalid email address",
									},
								}}
								defaultValue=""
								errors={errors.email}
							/>
						</Col>
					</Row>
				</Box>
				<Box marginTop={10}>
					<Row gutter={48}>
						<Col span={12}>
							<InputControlled
								control={control}
								label={"gender"}
								name="gender"
								rules={{ required: true }}
								defaultValue=""
								errors={errors.gender}
							/>
						</Col>
					</Row>
				</Box>
				<Box marginTop={10}>
					<Row gutter={48}>
						<Col span={12}>
							<InputControlled
								control={control}
								label={"birthday date"}
								name="birthday_date"
								rules={{
									required: true,
									pattern: {
										value: /((0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/[12]\d{3})/,
										message: "invalid birth date",
									},
								}}
								defaultValue=""
								errors={errors.birthday_date}
							/>
						</Col>
					</Row>
				</Box>
				<Box marginTop={10}>
					<Row gutter={48}>
						<Col span={12}>
							<InputControlled
								control={control}
								label={"password"}
								name="password"
								rules={{ required: true }}
								defaultValue=""
								errors={errors.password}
							/>
						</Col>
						<Col span={12}>
							<InputControlled
								control={control}
								label={"confirm password"}
								name="confirm_password"
								rules={{
									required: true,
									validate: (value: any) =>
										value === password.current ||
										"The passwords do not match",
								}}
								defaultValue=""
								errors={errors.confirm_password}
							/>
						</Col>
					</Row>
				</Box>
			</Box>
			<button type="submit">send</button>
		</form>
	);
}

export default Step1;
