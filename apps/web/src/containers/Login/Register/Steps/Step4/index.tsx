import { Box, Typography, TypographyTitle } from "@melian/ui";
import React, { Fragment, ReactElement, useEffect, useState } from "react";
import { Button, Avatar } from "antd";
import { ColumnsType } from "antd/lib/table";
import { StatusIndicator, TableStyled } from "./style";
import { UserOutlined } from "@ant-design/icons";
import user, { Interface } from "services/user";

const columns: ColumnsType<any> = [
	{
		title: "",
		dataIndex: "name",
		key: "name",
		ellipsis: true,
		className: "invisible",
		render: function RenderComponent(value, record, index) {
			return record.profile_photo ? (
				<Avatar src={record.profile_photo} />
			) : (
				<Avatar icon={<UserOutlined />} />
			);
		},
	},
	{
		title: "Name",
		dataIndex: "first_name",
		key: "first_name",
		render: function RenderComponent(value, record, index) {
			return (
				<Fragment>
					<Box>
						<StatusIndicator $color="red" />
						<Typography>
							{record.first_name} {record.last_name}
						</Typography>
					</Box>
				</Fragment>
			);
		},
	},
	{
		title: "E-mail",
		dataIndex: "email",
		key: "email",
		ellipsis: true,
	},
	{
		title: "Telephone",
		dataIndex: "telephone",
		key: "telephone",
		render: (value, record, index) =>
			`(${record.area_code}) ${record.phone}`,
		ellipsis: true,
	},
];
const receivedColumns: ColumnsType<any> = [
	...columns,
	{
		title: "",
		dataIndex: "actions",
		key: "actions",
		className: "invisible",
		render: function RenderComponent(value, record, index) {
			return (
				<Fragment>
					<Button>Accept</Button>
					<Button>Refuse</Button>
				</Fragment>
			);
		},
		ellipsis: true,
	},
];

const sentColumns: ColumnsType<any> = [
	...columns,
	{
		title: "",
		dataIndex: "actions",
		key: "actions",
		className: "invisible",
		render: function RenderComponent(value, record, index) {
			return (
				<Fragment>
					<Button>delete</Button>
				</Fragment>
			);
		},
		ellipsis: true,
	},
];

function Step4(): ReactElement {
	const [dataSource, setDataSource] = useState<Interface[]>([]);
	useEffect(() => {
		user.read().then(({ data }) => {
			setDataSource(data.map((us) => ({ ...us, key: us.email })));
		});
	}, []);
	return (
		<div>
			<Box>
				<TypographyTitle>Received invitations</TypographyTitle>

				<Box marginTop="30px">
					<TableStyled
						columns={receivedColumns}
						dataSource={dataSource}
						pagination={false}
					/>
				</Box>
			</Box>

			<Box marginTop="122px">
				<TypographyTitle>Invitations SENT</TypographyTitle>
				<Box marginTop="30px">
					<TableStyled
						columns={sentColumns}
						dataSource={dataSource}
						pagination={false}
					/>
				</Box>
			</Box>
		</div>
	);
}

export default Step4;
