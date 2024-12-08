import React from 'react';

interface StatisticsCardProps {
	title: string;
	value: number;
	color?: string;
	secondaryColor?: string;
}

const StatisticsCard = ({
	title,
	value,
	color,
	secondaryColor,
}: StatisticsCardProps) => {
	return (
		<div
			className={` relative h-[200px] ${color} rounded-3xl items-center justify-center flex shadow-slate-400 shadow-lg px-1`}
		>
			<h1 className="text-3xl font-bold text-white text-center">{title}</h1>
			<div
				className={`absolute bottom-0 h-[50px] w-[150px] text-center rounded-t-2xl flex items-center justify-center bg-white ${secondaryColor} p-8 text-4xl font-bold`}
			>
				{value}
			</div>
		</div>
	);
};

export default StatisticsCard;
