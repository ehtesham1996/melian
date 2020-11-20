import { Form, Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import styled, { css } from "styled-components";

interface IImageLogo {
	bgi: string;
}

const ImageLogo = ({ bgi, ...props }: IImageLogo) => <div {...props} />;

const ImageStyled = styled(ImageLogo)`
	${({ bgi }) => css`
		background-image: url(${bgi});
	`}
	flex: 1;
	display: flex;
	background-size: cover;
	background-position: center;
`;

const LayoutStyled = styled(Layout)`
	height: 100vh;
	background: white;
`;

const ContentStyled = styled(Content)`
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	max-height: 100vh;
	height: 100vh;
	overflow: hidden;
`;

const FormStyled = styled(Form)`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
`;

export { ImageStyled, LayoutStyled, ContentStyled, FormStyled };
