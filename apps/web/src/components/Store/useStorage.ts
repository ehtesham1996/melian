import { useCallback } from "react";
import _merge from "lodash/merge";
import _get from "lodash/get";

const useStorage = (adapter: Storage = window.localStorage) => {
	const get = useCallback(
		(key: string, selector: string = "") => {
			const data = JSON.parse(adapter.getItem(key) || "{}");
			if (selector) {
				return _get(data, selector);
			}
			return data;
		},
		[adapter]
	);
	const set = useCallback(
		(key: string, value: any) => {
			adapter.setItem(
				key,
				JSON.stringify(
					value instanceof Function ? value(get(key)) : value
				)
			);
		},
		[adapter, get]
	);
	const clear = () => adapter.clear();

	const update = useCallback(
		(key: string, value: any) => {
			set(key, (actual: any) =>
				_merge(
					actual,
					value instanceof Function ? value(get(key)) : value
				)
			);
		},
		[set, get]
	);

	return { set, get, update, clear };
};

export default useStorage;
