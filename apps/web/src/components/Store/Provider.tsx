import React, {
	useReducer,
	useCallback,
	FC,
	PropsWithChildren,
	useMemo,
	useRef,
} from "react";
import { Provider as ContextProvider } from "./context";
import reducer, * as actions from "./reducer";
import _get from "lodash/get";
import _set from "lodash/set";
import useStore from "./useStore";

interface Props {
	initialState?: object;
	avoidBigState?: boolean;
}

const Provider: FC<Props> = ({
	children,
	avoidBigState,
	initialState = {},
}: PropsWithChildren<Props>) => {
	const refState = useRef<any>({});
	const { state: inheritState } = useStore();

	const [state, dispatch] = useReducer(reducer, {
		...initialState,
		...actions.initialState,
	});

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const bigState = useMemo(
		() => ({ ...state, ...(avoidBigState ? {} : inheritState) }),
		[avoidBigState, inheritState, state]
	);

	const set = useCallback(
		(key: string, value: any) => dispatch(actions.setState(key, value)),
		[]
	);
	const get = useCallback((key: string) => _get(bigState, key), [bigState]);

	const clear = useCallback(() => dispatch(actions.clearState()), []);

	const handleSetRef = (key: string, value: any) => {
		_set(
			refState.current,
			key,
			value instanceof Function
				? value(_get(refState.current, key))
				: value
		);
	};

	const handleGetRef = (key: string) => _get(refState.current, key);

	return (
		<ContextProvider
			value={{
				refState: refState?.current,
				state: bigState,
				setRef: handleSetRef,
				getRef: handleGetRef,
				set,
				get,
				clear,
			}}
		>
			{children}
		</ContextProvider>
	);
};

export { Provider as default, Provider };
