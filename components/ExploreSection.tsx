import Image from 'next/image';
import React from 'react';
type Props = {
	img: string;
	location: string;
	distance: string;
};

export default function ExploreSection({ img, location, distance }: Props) {
	return (
		<div className="flex items-center m-2 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 translate transform duration-200 ease-out">
			<div className="relative h-16 w-16">
				<Image src={img} fill className="rounded-lg" alt={location} />
			</div>
			<div>
				<h2>{location}</h2>
				<h3 className="text-gray-500">{distance}</h3>
			</div>
		</div>
	);
}
