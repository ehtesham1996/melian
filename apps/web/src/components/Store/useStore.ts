/* eslint-disable indent */
import { useCallback, useContext } from "react";
import TheContext from "./context";
import _get from "lodash/get";
import _merge from "lodash/merge";

interface ContextType {
	get?: any;
	set?: any;
	update?: any;
	state?: object;
	setRef?: (key: string, value: any) => void;
}

const useStore = (selector?: string): any => {
	const context: ContextType = useContext(TheContext);
	let newState = { ...context };

	const set = useCallback(
		(selector2: any, value: any) =>
			selector
				? context.set(
						`${selector}${value ? `.${selector2}` : ""}`,
						value || selector2
				  )
				: context.set,
		[context, selector]
	);

	const get = useCallback(
		(selector2: string) =>
			selector ? context.get(`${selector}.${selector2}`) : context.get,
		[context, selector]
	);

	const update = useCallback(
		(selector2: any, value: any) =>
			selector
				? context.update(
						`${selector}.${selector2}`,
						value instanceof Function
							? value(_merge(get(selector2), value))
							: _merge(get(selector2), value)
				  )
				: context.update,
		[context, selector]
	);

	if (selector) {
		newState = {
			...context,
			set,
			get,
			update,
			state: _get(context.state, selector, {}),
		};
	}

	return newState;
};

export default useStore;
