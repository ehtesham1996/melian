import Step1 from "./Step1";
import Step2 from "./Step2";

const steps = [
	{
		sidebar: {
			image: "error",
			title: "Talk directly with the treatment team",
			subtitle:
				"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
		},
		step: {
			id: 0,
			title: "Basic information",
			form: Step1,
		},
	},
	{
		sidebar: {
			image: "error",
			title: "Talk directly with the treatment team",
			subtitle:
				"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
		},
		step: {
			id: 0,
			title: "Basic information",
			form: Step2,
		},
	},
];

export default steps;
