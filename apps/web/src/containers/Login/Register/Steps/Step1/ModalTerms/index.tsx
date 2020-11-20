/* eslint-disable indent */
import { Box, Document, Button } from "@melian/ui";
import { Checkbox, Col, Modal, Row } from "antd";
import { useStore } from "components/Store";
import React, {
	ReactElement,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import { ButtonStyled } from "./style";

interface Props {
	visible: boolean;
	setVisible: (s: boolean) => void;
}

function ModalTerms({ visible, setVisible }: Props): ReactElement {
	const scrollRef = useRef<any>();
	const [selected, setSelected] = useState(0);
	const [reachedEnd, setReachedEnd] = useState(false);
	const [agree, setAgree] = useState<number[]>([]);
	const { set } = useStore("register");

	const checkReachEnd = useCallback(
		(event: any) => {
			const element = event.target;
			if (
				element.scrollHeight - element.scrollTop <=
				element.clientHeight + 10
			) {
				setReachedEnd(true);
			} else {
				if (reachedEnd) {
					setReachedEnd(false);
				}
			}
		},
		[reachedEnd]
	);

	useEffect(() => {
		setReachedEnd(false);
	}, [selected]);

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current
				.getScrollElement()
				.removeEventListener("scroll", checkReachEnd);
			scrollRef.current
				.getScrollElement()
				.addEventListener("scroll", checkReachEnd);
		}
	}, [checkReachEnd, visible]);

	const docs = [
		{
			id: "abc0123",
			title: "Confidentiality",
			content: Array.from(Array(10).keys()).map((index) => (
				<p key={index}>T01 some contents...</p>
			)),
		},
		{
			id: "zxc0123",
			title: "Terms & Conditions",
			content: Array.from(Array(100).keys()).map((index) => (
				<p key={index}>T02 some contents...</p>
			)),
		},
	];

	const shouldGoNext = agree.length === docs.length && reachedEnd;

	const goNextOrFinish = () => {
		if (shouldGoNext) {
			setVisible(false);
			set("values.accept", true);
		} else if (docs[selected + 1]) {
			setSelected((i) => i + 1);
		}
	};
	return (
		<Modal
			centered
			visible={visible}
			afterClose={() => {
				setSelected(0);
				setAgree([]);
				setReachedEnd(false);
			}}
			onCancel={() => setVisible(false)}
			width={1000}
			closable={false}
			footer={null}
		>
			<Row>
				<Col span={8}>
					<div
						style={{
							padding: 20,
							display: "flex",
							flexDirection: "column",
						}}
					>
						{docs.map(({ title }, index) => {
							const selectedItem = selected === index;

							return (
								<Box margin={1} key={index}>
									<ButtonStyled
										onClick={() => setSelected(index)}
										type="link"
										$borderColor={
											selectedItem
												? "var(--melian-color-indigo)"
												: "var(--melian-color-gray-06)"
										}
										$color={
											selectedItem
												? "var(--melian-color-indigo)"
												: "var(--melian-color-gray-06)"
										}
									>
										{title}
									</ButtonStyled>
								</Box>
							);
						})}
					</div>
				</Col>
				<Col span={16}>
					<Document
						scrollRef={scrollRef}
						title={docs[selected].title}
						footer={
							<Box
								marginTop="40px"
								display="flex"
								justifyContent="space-between"
							>
								<Checkbox
									disabled={!reachedEnd}
									checked={agree.includes(selected)}
									onChange={(event: any) => {
										setAgree((i) =>
											event.target.checked
												? i.concat(selected)
												: i.filter(
														(x) => x !== selected
												  )
										);
									}}
								>
									I agree
								</Checkbox>

								<Button
									$backgroundColor="transparent"
									onClick={goNextOrFinish}
									disabled={
										!reachedEnd || !agree.includes(selected)
									}
								>
									{docs[selected + 1] ? "Next Step" : "Done"}
								</Button>
							</Box>
						}
					>
						{docs[selected].content}
					</Document>
				</Col>
			</Row>
		</Modal>
	);
}

export default ModalTerms;
