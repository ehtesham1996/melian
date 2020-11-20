import React, { ReactElement } from "react";
import { Col, Row, Button as ButtonA } from "antd";
import { ReactComponent as Marker } from "assets/svg/marker.svg";
import { MoreOutlined } from "@ant-design/icons";
import { WorkplaceBlock } from "./style";
import { Typography } from "components/Typography";
import Box from "components/Box";
import { AddressBlockProps } from "./types";

function AddressBlock({
	name,
	address_line,
	city,
	zip_code,
	country,
	onDelete,
}: AddressBlockProps): ReactElement {
	return (
		<WorkplaceBlock style={{ position: "relative" }}>
			<ButtonA
				type="text"
				shape="circle"
				icon={<MoreOutlined />}
				style={{
					position: "absolute",
					right: "12px",
					top: "10px",
					zIndex: 999,
				}}
				onDoubleClick={onDelete}
			/>
			<Row>
				<Col span={3}>
					<Marker style={{ width: 24, height: 24 }} />
				</Col>
				<Col span={21}>
					<Box width="250px">
						<Typography
							$color="--melian-color-light-green"
							$variant="subtitle"
							$wordWrap
							as="p"
						>
							{name}
						</Typography>
						<Typography $variant="body">
							{address_line}, {city} {zip_code} {country}
						</Typography>
					</Box>
				</Col>
			</Row>
		</WorkplaceBlock>
	);
}

export default AddressBlock;
export { AddressBlock };
