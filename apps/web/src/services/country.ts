import axiosInstance from "common/utils/axios";

export interface Interface {
	name: string;
	value: string;
}

const user = {
	read: (): Promise<Interface[]> =>
		axiosInstance
			.get("https://restcountries.eu/rest/v2/all")
			.then(({ data }) =>
				data.map(({ name }: Partial<Interface>) => ({
					name,
					value: name,
				}))
			),
};

export default user;
