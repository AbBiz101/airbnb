import Image from 'next/image';
import React from 'react';

type Props = { img: string; title: string };

export default function LiveAnywhereSection({ img, title }: Props) {
	return (
		<div className="cursor-pointer hover:scale-105 transform translate duration-300 ease-out">
			<div className="relative h-80 w-80">
				<Image src={img} fill sizes="200px" className="rounded-xl" alt={title} />
			</div>
			<h3 className="text-2xl text-bold">{title}</h3>
		</div>
	);
}
