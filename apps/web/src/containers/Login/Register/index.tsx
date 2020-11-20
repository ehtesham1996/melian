/* eslint-disable no-console */
import React, { ReactElement, useEffect, useState } from "react";
import { Col, Form, Row } from "antd";
import { Box, BoxWithScroll, ButtonBack, ButtonSubmit } from "@melian/ui";
import { ContentStyled, ImageStyled, LayoutStyled } from "./style";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import Step1 from "./Steps/Step1";
import withStore, { useStore } from "components/Store";
import uploadImg from "assets/svg/upload.svg";
import { goNextUntilEnd } from "common/utils";
import Step2 from "./Steps/Step2";
import { FormStyled } from "./style";
import ModalTerms from "./Steps/Step1/ModalTerms";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import user, { Interface } from "services/user";
import { verifyPhone } from "./util";
import { useHistory } from "react-router-dom";

const bgi =
	"https://s3-alpha-sig.figma.com/img/c2ca/1968/026915c1ba96a909d6f5a85613ffbe32?Expires=1606089600&Signature=RlIsUno6m8inVrLUvN0p60Fwh9DWGZ-ZSsEBalMXwUf0gRYGKfA5Ja5zRMhpjCdC4inf6QV13X0QierjBXZPkp8mGun8zfZdslYpPAhCnE5WYmQLZs4hSned5VMFnX1I~ScKErLMAWXLNf-6gkgqS-upk5INqF0T6GNZFgHg2LfTG8WgjCDerKmk9DyxXM1ZESagTQI7YU-XhNuVHYsUKgFuarV~VLQt9QjOsQgO~KHtJzr5H3xKXncGs72RtVOr2nFS0uwiXAPgR616nNlAC5UGXMHsJ7Uvxbf~001oXPctuNDvJkoo-ZobdndO-jFxt0U47bDyBIn2GxnrGEv9OQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

function Register(): ReactElement {
	const [selected, setSelected] = useState(0);
	const [form] = Form.useForm();
	const { set, state } = useStore("register");
	const steps = [Step1, Step2, Step3, Step4];

	useEffect(() => {
		set("form", form);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const Step = steps[selected];
	const [visible, setVisible] = useState(false);

	const isLast = steps.length - 1 === selected;

	const acceptModal = state.values?.accept;
	const goNext = () => setSelected((i) => goNextUntilEnd(steps, i + 1));

	const handleSaveRegister = (payload: Interface) => {
		if (!acceptModal) {
			setVisible(true);
			return;
		}

		user.create(payload).then(() => goNext());
	};

	const { push } = useHistory();

	const handleSubmit = (values: any) => {
		if (selected === 0) {
			handleSaveRegister({
				...state.values,
				...values,
			});
			return;
		}
		if (selected === 1) {
			set("phoneError", false);

			verifyPhone(values)
				.then(() => goNext())
				.catch(() => {
					set("phoneError", true);
				});
		}
		if (isLast) {
			console.log({ ...state.values, values });
		}
	};

	return (
		<LayoutStyled>
			{/* <Header /> */}
			<LayoutStyled>
				{/* <Sider /> */}
				<ContentStyled>
					<Row
						style={{
							display: "flex",
							flex: 1,
						}}
					>
						<Col
							span={9}
							flex={1}
							style={{
								display: "flex",
							}}
						>
							<ImageStyled bgi={bgi} />
						</Col>
						<Col
							span={15}
							flex={1}
							style={{
								display: "flex",
								flexDirection: "column",
							}}
						>
							<Box
								display="flex"
								justifyContent="space-between"
								padding="33px"
							>
								<ButtonBack
									onClick={() => {
										if (selected === 0) {
											push("/");
										} else {
											setSelected((i) => {
												const s = i - 1;
												return s <= 0 ? 0 : s;
											});
										}
									}}
								/>
								<Logo
									style={{
										width: 120,
										height: 30,
									}}
								/>
							</Box>

							<FormStyled
								onFinish={handleSubmit}
								initialValues={{
									profile_photo: uploadImg,
									...state.values,
								}}
								form={form}
								name="basic"
								layout="vertical"
								labelCol={{ span: 22 }}
								wrapperCol={{ span: 22 }}
							>
								<BoxWithScroll
									maxHeight={650}
									overflowY="auto"
									scrollProps={{
										autoHide: false,
									}}
									margin="0 0 0 131px"
									display="flex"
									justifyContent="center"
									flexDirection="column"
								>
									<Step />
								</BoxWithScroll>
								<ModalTerms
									visible={visible}
									setVisible={setVisible}
								/>

								<Box alignSelf="flex-end" padding="46px 44px">
									<ButtonSubmit htmlType="submit" />
								</Box>
							</FormStyled>
						</Col>
					</Row>
				</ContentStyled>
			</LayoutStyled>
			{/* <Footer /> */}
		</LayoutStyled>
	);
}

export default withStore({
	initialState: {
		register: {},
	},
})(Register);
