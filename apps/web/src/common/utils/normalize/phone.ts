const phone = (value: string) => {
	const data = value.match(/.{1,5}/)?.join("-") || "";

	return data;
};

export { phone };
