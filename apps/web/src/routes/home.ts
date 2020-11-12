import { RouteType } from "components/Router/types";
import { lazy } from "react";

const HomeScreen = lazy(() => import("containers/Home"));
const LoginScreen = lazy(() => import("containers/Login"));
const RegisterScreen = lazy(() => import("containers/Login/Register"));

const home: RouteType[] = [
	{
		path: "/",
		exact: true,
		isProtected: true,
		component: HomeScreen,
	},
	{
		path: "/login",
		exact: true,
		component: LoginScreen,
	},
	{
		path: "/register",
		exact: true,
		component: RegisterScreen,
	},
];

export default home;
