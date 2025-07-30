import type { ReactElement } from 'react';

interface ButtonInterface {
	title: string;
	size: 'lg' | 'md' | 'sm';
	startIcon?: ReactElement;
	endIcon?: ReactElement;
}

const sizeStyles = {
	lg: 'px-8 py-4 text-lg',
	md: 'px-4 py-2 text-md',
	sm: 'px-2 py-1 text-sm',
};

export function Button(props: ButtonInterface) {
	return (
		<button
			className={`${
				sizeStyles[props.size]
			} bg-red-300 flex justify-center items-center gap-2`}>
			{props.startIcon}
			{props.title}
			{props.endIcon}
		</button>
	);
}
