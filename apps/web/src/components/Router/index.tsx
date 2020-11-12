import React from "react";
import { RouteType } from "./types";
import Protected from "./Protected";
import Public from "./Public";

const Router = ({ isProtected, loginURL, ...props }: RouteType) =>
	isProtected ? (
		<Protected loginURL={loginURL} {...props} />
	) : (
		<Public {...props} />
	);

export { Router as default, Router };
