const goNextUntilEnd = (stack: any[], pos: number) =>
	pos >= stack.length - 1 ? stack.length - 1 : pos;

export { goNextUntilEnd };
