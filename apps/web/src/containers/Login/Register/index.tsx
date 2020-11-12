import React, { Fragment, ReactElement, useState } from "react";
import Layout from "components/Layout";
import Logo from "assets/svg/logo.svg";
import Holder from "assets/svg/holder.svg";
import { useForm, Controller } from "react-hook-form";
import { Box } from "@melian/ui";
import {
	ContainerStyled,
	ContentStyled,
	SidebarStyled,
	ImageStyled,
} from "./style";
import { Typography } from "antd";
import steps from "./Steps";
import { useStore } from "components/Store";

const { Title, Text } = Typography;

function Register(): ReactElement {
	const { state, set } = useStore("register");
	const [step, setSteps] = useState(1);
	const {
		sidebar,
		step: { id, title, form: Form },
	} = steps[step];

	const goNext = () => {
		setSteps((i) => {
			const s = i + 1;
			return s >= steps.length ? steps.length : s;
		});
	};

	const goPrev = () => {
		setSteps((i) => {
			const s = i - 1;
			return s <= 0 ? 0 : s;
		});
	};

	const saveState = (data: any) => {
		set(data);
		goNext();
	};

	return (
		<Layout>
			<ContainerStyled>
				<Fragment key={id}>
					<SidebarStyled>
						<Box marginTop={71}>
							<ImageStyled
								width={200}
								height={200}
								src="error"
								fallback={Logo}
							/>
						</Box>
						<Box marginTop={52}>
							<ImageStyled
								width={245}
								height={256}
								src={sidebar.image}
								fallback={Holder}
							/>
						</Box>
						<Box marginTop={50}>
							<Title level={3}>{sidebar.title}</Title>
							<Text>{sidebar.subtitle}</Text>
						</Box>
					</SidebarStyled>
					<ContentStyled>
						<Title level={4}>{title}</Title>
						<Box marginTop={60}>
							<Form
								state={state}
								onSubmit={(data: any) => saveState(data)}
								onPrev={goPrev}
							/>
						</Box>
					</ContentStyled>
				</Fragment>
			</ContainerStyled>
		</Layout>
	);
}

export default Register;
