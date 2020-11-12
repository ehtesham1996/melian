import React from "react";
import { Provider as StoreProvider, useStore } from "..";
import { render } from "@cvortex/houston/src/common/tests/testing-library/react";

describe("useStore testing suite", () => {
	test("should access useStore property", () => {
		const Child = () => {
			const { state } = useStore("king");
			return <div>{state}</div>;
		};
		const Component = () => (
			<StoreProvider initialState={{ king: "cobra" }}>
				<Child />
			</StoreProvider>
		);

		const { getByText } = render(<Component />);

		expect(getByText(/cobra/)).toBeInTheDocument();
	});
});
