import Image from 'next/image';
import React from 'react';

type Props = {};

export default function Header({}: Props) {
	return (
		<header className="sticky top-0 ">
			<div className="relative flex items-center h-10 cursor-pointer my-auto">
				<Image
					src="/Airbnb-logo.jpg"
					width={200}
					height={200}
					alt="logo"
					object-fit="contain"
					object-position="left"
				/>
			</div>

			<div></div>

			<div></div>
		</header>
	);
}
