import React, { FC } from "react";
import StoreProvider from "./Provider";

interface Props {}

interface PropsConfig {
	initialState?: any;
	avoidBigState?: boolean;
}

// eslint-disable-next-line react/display-name
const withStore = (config: PropsConfig = {}) => (WrappedComponent: FC) => (
	props: Props
) => (
	<StoreProvider {...config}>
		<WrappedComponent {...props} />
	</StoreProvider>
);

export default withStore;
