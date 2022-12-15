import React from 'react';
import Image from 'next/image';
type Props = {};

export default function Banner({}: Props) {
	return (
		<div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] 2xl:h-[750px] ">
			<Image src="/banner_1.jpg" fill alt="" object-fit="cover" />
			<div className="absolute text-center top-1/2 w-full">
				<p className="text-sm sm:text-lg md:text-xl lg:text-2xl ">
					Not sure where to go? perfect.
				</p>
				<button className="text-purple-500 bg-white px-8 py-3 font-bold my-3 hover:shadow-xl shadow-lg rounded-full active:scale-90 duration-150">
					I'm flexible.
				</button>
			</div>
		</div>
	);
}
