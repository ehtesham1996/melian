const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const verifyPhone = (values: any) => {
	const input = Object.values(values).join("");

	return new Promise((resolve, reject) => {
		sleep(2000).then(() => {
			if (input === "123456") {
				resolve();
			} else {
				reject();
			}
		});
	});
};

export { verifyPhone };
