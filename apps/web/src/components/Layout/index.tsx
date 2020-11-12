import React, { PropsWithChildren, ReactElement } from "react";
import { Layout as LayoutA, Menu } from "antd";
import { relative } from "path";
const { Header, Content, Footer, Sider } = LayoutA;

interface Props {}

function Layout({
	children,
	...props
}: PropsWithChildren<Props>): ReactElement {
	return (
		<LayoutA style={{ minHeight: "100vh" }} {...props}>
			{/* <Sider
				breakpoint="lg"
				collapsedWidth="0"
				onBreakpoint={(broken) => {
					console.log(broken);
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}
			>
				<div className="logo" />
				<Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
					<Menu.Item key="1" icon={<UserOutlined />}>
						nav 1
					</Menu.Item>
					<Menu.Item key="2" icon={<VideoCameraOutlined />}>
						nav 2
					</Menu.Item>
					<Menu.Item key="3" icon={<UploadOutlined />}>
						nav 3
					</Menu.Item>
					<Menu.Item key="4" icon={<UserOutlined />}>
						nav 4
					</Menu.Item>
				</Menu>
			</Sider> */}
			<LayoutA>
				<Header />
				<Content style={{ margin: "24px 16px 0" }}>
					<div
						style={{
							// padding: 24,
							minHeight: 360,
							position: "relative",
							background: "#fff",
							alignItems: "center",
							justifyContent: "center",
							display: "flex",
						}}
					>
						{children}
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</LayoutA>
		</LayoutA>
	);
}

export default Layout;
