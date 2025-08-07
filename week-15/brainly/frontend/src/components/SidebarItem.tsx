import type { ReactElement } from 'react';

const SidebarItem = ({ text, icon }: { text: string; icon: ReactElement }) => {
	return (
		<div className="flex hover:cursor-pointer text-gray-700 py-2">
			<div className="pr-2">{icon}</div>
			<div>{text}</div>
		</div>
	);
};

export default SidebarItem;
