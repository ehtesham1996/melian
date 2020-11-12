import createReducer from "common/utils/createReducer";
import _set from "lodash/set";
import _get from "lodash/get";

const initialState = {
	SCD: {
		Palette: {
			Components: [
				{
					type: "Input",
					size: 30,
				},
			],
		},
	},
	APS: {},
};

interface ActionType {
	payload?: any;
	type: string;
}

export const SET_STATE = "SET_STATE";
export const CLEAR_STATE = "CLEAR_STATE";

const setState = (key: string, value: any) => ({
	type: SET_STATE,
	payload: {
		key,
		value,
	},
});

const clearState = () => ({
	type: CLEAR_STATE,
});

const reducers = {
	[SET_STATE]: (state: object, action: ActionType) => {
		const { key, value } = action.payload;
		const newState = { ...state };

		_set(
			newState,
			key,
			value instanceof Function ? value(_get(state, key)) : value
		);

		return {
			...newState,
		};
	},
	[CLEAR_STATE]: () => ({
		...initialState,
	}),
};

export { initialState, setState, clearState };

export default createReducer(reducers);
