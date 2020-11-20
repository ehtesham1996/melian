import React, { Fragment, ReactElement } from "react";
import { Box } from "@melian/ui";
import ContactInfo from "./ContactInfo";
import PersonalInfo from "./PersonalInfo";

function Step1(): ReactElement {
	return (
		<Fragment>
			<Box>
				<PersonalInfo />
			</Box>
			<Box marginTop="30px">
				<ContactInfo />
			</Box>
		</Fragment>
	);
}

export default Step1;
export { Step1 };
