import Image from 'next/image';
import React from 'react';

type Props = {
	img: string;
	title: string;
	description: string;
	buttonText: string;
};

export default function LargeCard({
	img,
	title,
	description,
	buttonText,
}: Props) {
	return (
		<section className="relative py-16 cursor-pointer">
			<div className="relative h-96 min-w-[300px]">
				<Image src={img} layout="fill" object-fit="cover" alt={title} />
			</div>

			<div className="absolute top-32 z-10 left-12">
				<h3 className="text-4xl">{title}</h3>
				<p>{description}</p>
				<button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
					{buttonText}
				</button>
			</div>
		</section>
	);
}
