import React from "react";
import { render } from "@testing-library/react";
import Protected from "../Protected";
import { useStore } from "../../Store";

jest.mock("react-router-dom", () => ({
	useLocation: () => ({
		pathname: "",
	}),
	Redirect: function Renderer() {
		return <div>redirected</div>;
	},
	Route: function Renderer({ render }: any) {
		return <div>{render}</div>;
	},
}));

jest.mock("../../Store");

describe("<Protected />", () => {
	// TODO: Testar esse caso posteriormente e aumentar o coverage (package.json)
	// test("should be redirected to login page", () => {
	// 	useStore.mockImplementation(() => ({
	// 		state: false
	// 	}));
	// 	const Component = () => (
	// 		<Protected render={() => <div>hello world</div>} />
	// 	);
	// 	const { debug, getByText } = render(<Component />);
	// 	debug();
	// 	expect(getByText(/redirected/)).toBeInTheDocument();
	// });
	// test("should not be redirected to login page", () => {
	// 	(useStore as jest.Mock).mockImplementation(() => ({
	// 		state: true,
	// 	}));
	// 	const { getByText } = render(
	// 		<Protected render={<div>hello world</div>} />
	// 	);
	// 	expect(getByText(/hello world/)).toBeInTheDocument();
	// });
});
