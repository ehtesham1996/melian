import React from "react";
import { render } from "@testing-library/react";
import Router from "..";
import { BrowserRouter } from "react-router-dom";

describe("<Router />", () => {
	test("render", () => {
		const TestComponent = () => <div>hello world</div>;
		const Route = () => (
			<BrowserRouter>
				<Router component={TestComponent} />
			</BrowserRouter>
		);

		const { getByText } = render(<Route />);

		expect(getByText(/hello world/)).toBeInTheDocument();
	});
});
