import React, { Fragment } from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { Provider as Store, useStore } from "../index";

describe("<Store /> testing suite", () => {
	test("should render", () => {
		const Wrapped = () => <div>test</div>;
		const Enhanced = () => (
			<Store>
				<Wrapped />
			</Store>
		);

		const { getByText } = render(<Enhanced />);

		expect(getByText("test")).toBeInTheDocument();
	});
	test("should set a value and get it back", () => {
		const Wrapped = () => {
			const { state, set, get } = useStore();
			return (
				<Fragment>
					<button onClick={() => set("test", "helloworld")}>
						click me
					</button>
					<div>{state.test}</div>
					<div>{get("test")}</div>
				</Fragment>
			);
		};
		const Enhanced = () => (
			<Store avoidBigState>
				<Wrapped />
			</Store>
		);

		const { getByText, getAllByText } = render(<Enhanced />);
		act(() => {
			fireEvent.click(getByText(/click me/));
		});
		expect(getAllByText(/helloworld/).length).toBe(2);
	});
	// test("should be able to clear state", () => {
	// 	const Wrapped = () => {
	// 		const { set, state, clear } = useStore("index");
	// 		return (
	// 			<div>
	// 				<button onClick={() => set("index", "tested")}>
	// 					set value
	// 				</button>
	// 				<button onClick={clear}>clear value</button>
	// 				<div>{state}</div>
	// 			</div>
	// 		);
	// 	};
	// 	const Enhanced = () => (
	// 		<Store>
	// 			<Wrapped />
	// 		</Store>
	// 	);

	// 	const { container, getByText } = render(<Enhanced />);

	// 	act(() => {
	// 		fireEvent.click(getByText(/set value/));
	// 	});
	// 	expect(getByText(/tested/)).toBeInTheDocument();

	// 	act(() => {
	// 		fireEvent.click(getByText(/clear value/));
	// 	});

	// 	const divTested = queryAllByText(container, /tested/);
	// 	expect(divTested).toHaveLength(0);
	// });
});
