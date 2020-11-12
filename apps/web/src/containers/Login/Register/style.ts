import { Image, Row } from "antd";
import styled from "styled-components";

const ContainerStyled = styled.div`
	flex: 1;
	flex-direction: row;
	display: flex;
	align-items: stretch;
	justify-content: center;
	/* min-height: 900px; */
	/* position: absolute;
	height: 100%;
	width: 100%; */
	max-width: 1440px;
`;

const SidebarStyled = styled.div`
	width: 30%;
	background: grey;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 15px;
`;

const ContentStyled = styled.div`
	flex: 1;
	background: blue;
	padding-left: 115px;
	padding-right: 268px;
	padding-top: 71px;
`;

const ImageStyled = styled(Image)`
	overflow: hidden;
`;

// const HeaderStyled = styled.div``;
//
export { ContainerStyled, SidebarStyled, ContentStyled, ImageStyled };
