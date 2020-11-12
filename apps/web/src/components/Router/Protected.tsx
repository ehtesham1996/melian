import React, { useEffect } from "react";
import { RouteType } from "./types";
import Public from "./Public";
import { useStore } from "../Store";

const Protected = ({ loginURL = "/login", ...props }: RouteType) => {
	const { state: hasLogin } = useStore("auth.hasLogin");
	const u = new URL(window.location.href);

	const continueParam = `?continue=${encodeURIComponent(u.href)}`;
	const accessTokenURL = u.searchParams.get("access_token");
	const refreshTokenURL = u.searchParams.get("refresh_token");

	useEffect(() => {
		if (!hasLogin) {
			window.location.assign(`${loginURL}${continueParam}`);
		}
	}, [accessTokenURL, continueParam, hasLogin, loginURL, refreshTokenURL]);

	return hasLogin ? <Public {...props} /> : null;
};

export { Protected as default, Protected };
