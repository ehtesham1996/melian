export interface ActionType {
	type: string;
}

const createReducer = (actions: any) => (state: object, action: ActionType) => {
	const reducer = actions[action.type];
	return reducer ? reducer(state, action) : { ...state };
};

export default createReducer;
