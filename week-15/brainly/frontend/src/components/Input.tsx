interface Input {
	type: string;
	placeholder: string;
	className: string;
	onChange: () => void;
}

const Input = ({ type, placeholder, className, onChange }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={`${className} px-4 py-2 border bg-slate-200 text-black rounded-md m-2`}
			onChange={onChange}
		/>
	);
};

export default Input;
