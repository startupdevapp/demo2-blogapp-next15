import { LucideIcon } from 'lucide-react';

interface CustomIconProps {
	color?: string;
	height?: number;
	width?: number;
	size?: number;
	Icon: LucideIcon;
	clickHandler?: () => void;
}

const CustomIcon = ({
	color,
	height,
	width,
	size,
	Icon,
	clickHandler,
}: CustomIconProps) => {
	return (
		<Icon
			color={color}
			height={height}
			width={width}
			size={size}
			onClick={clickHandler}
		/>
	);
};

export default CustomIcon;
