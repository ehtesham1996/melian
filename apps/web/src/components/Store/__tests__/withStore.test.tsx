import React from "react";
import { render } from "@cvortex/houston/src/common/tests/testing-library/react";

import { withStore, useStore } from "..";

describe("<withStore />", () => {
	test("render", () => {
		const Component = () => {
			const { state } = useStore("test");

			return <div>{state}</div>;
		};
		const EnhancedComponent = withStore({
			initialState: {
				test: "ok",
			},
		})(Component);
		const defaultProps = {};

		const { getByText } = render(<EnhancedComponent {...defaultProps} />);

		expect(getByText(/ok/)).toBeInTheDocument();
	});
});
