import React from "react";
import { EntryInput } from "./styles";
import { FormInputProps } from "./types";

const FormInput = ({
	className,
	value,
	onChange,
	placeholder,
}: FormInputProps) => {
	return (
		<EntryInput
			{...{
				className,
				value,
				onChange,
				placeholder,
			}}
		/>
	);
};

export default FormInput;
