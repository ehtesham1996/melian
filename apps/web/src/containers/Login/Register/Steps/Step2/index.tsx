import { Box, Typography } from "@melian/ui";
import { TextFieldProps } from "@melian/ui/src/components/TextField/types";
import { Form } from "antd";
import { useStore } from "components/Store";
import React, { ReactElement } from "react";
import { BoxStyled, TextFieldStyled } from "./style";

const fields = Array.from(Array(6).keys()).map((i) => ({
	name: `number_${i}`,
}));

const TextFieldNext = ({ name, ...props }: Partial<TextFieldProps>) => (
	<Form.Item name={name} noStyle>
		<TextFieldStyled
			onChange={(event: any) => {
				event.target.nextElementSibling?.focus();
			}}
			{...props}
		/>
	</Form.Item>
);

function Step2(): ReactElement {
	const { state } = useStore("register");

	return (
		<Box
			display="flex"
			justifyContent="center"
			flexDirection="column"
			textAlign="center"
			width="440px"
			marginTop="172px"
			marginLeft="152px"
		>
			<Typography $color="--melian-color-gray-02" $variant="h2" as="h2">
				Please enter your verification code
			</Typography>
			<Box marginTop="40px">
				<Typography>
					To provide our users top data security, we´ve sent you a
					validation token to the following mobile phone +55 31
					98622-7882.
				</Typography>
			</Box>
			<BoxStyled>
				{fields.map((field) => (
					<TextFieldNext key={field.name} {...field} />
				))}
			</BoxStyled>
			{state?.phoneError && (
				<Box marginTop="10px">
					<Typography $color="red">
						There was an error validating phone
					</Typography>
				</Box>
			)}
			<Box marginTop="40px">
				<Typography>Change Mobile Phone Number</Typography>
			</Box>
			<Box marginTop="77px">
				<Typography>
					Didn&apos;t receive it? Resend verification code.
				</Typography>
			</Box>
			<Box marginTop="33px">
				<Typography>
					If you&apos;re having trouble to validate, please contact
					here.
				</Typography>
			</Box>
		</Box>
	);
}

export default Step2;
