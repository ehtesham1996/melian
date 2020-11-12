import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";

function Login(): ReactElement {
	const { push } = useHistory();

	return (
		<div>
			<h3>Hello from login</h3>
			<button onClick={() => push("/register")}>register</button>
		</div>
	);
}

export default Login;
