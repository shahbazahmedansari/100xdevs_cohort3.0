import { type ReactElement } from 'react';

interface ButtonProps {
	variant: 'primary' | 'secondary';
	text: string;
	startIcon?: ReactElement;
	onClick?: () => void;
}

const variantClasses = {
	primary: 'bg-purple-200 text-purple-400',
	secondary: 'bg-purple-600 text-white',
};

const defaultStyles =
	'px-4 py-2 rounded-lg font-light flex hover:cursor-pointer';

const Button = ({ variant, text, startIcon, onClick }: ButtonProps) => {
	return (
		<button
			className={variantClasses[variant] + ' ' + defaultStyles}
			onClick={onClick}>
			<div className="pr-2">{startIcon}</div> {text}
		</button>
	);
};

export default Button;
