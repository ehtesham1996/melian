import React, { ReactElement, Suspense } from "react";
import Loading from "components/Loading";
import "@melian/ui/src/assets/style/style.css";
import routes from "routes";
import Router from "components/Router";
import { BrowserRouter, Switch } from "react-router-dom";
import withStore from "components/Store";

const initialState = {
	initialState: {
		auth: { hasLogin: false },
	},
};

function App(): ReactElement {
	return (
		<Suspense fallback={<Loading />}>
			<BrowserRouter>
				<Switch>
					{routes.map((route) => (
						<Router key={route.path} {...route} />
					))}
				</Switch>
			</BrowserRouter>
		</Suspense>
	);
}

export default withStore(initialState)(App);
