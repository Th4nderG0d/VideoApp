import { ChangeEvent } from "react";

export type FormInputProps = {
	className: string;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
};
