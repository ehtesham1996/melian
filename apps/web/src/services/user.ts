import axiosInstance from "common/utils/axios";

export interface Interface {
	first_name: string;
	last_name: string;
	gender: string;
	birthday_date: string;
	country: string;
	area_code: string;
	phone: string;
	email: string;
	password: string;
	confirm_password?: string;
	profile_photo?: string;
	key?: string;
	accept?: boolean;
}

const user = {
	create: (payload: Interface) => axiosInstance.post("/user", payload),
	read: (params?: any): Promise<{ data: Interface[] }> =>
		axiosInstance.get("/user", { params }),
};

export default user;
