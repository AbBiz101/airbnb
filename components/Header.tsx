import React from 'react';
import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/solid';

type Props = {};

export default function Header({}: Props) {
	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
			<div className="relative flex items-center h-10 cursor-pointer my-auto">
				<Image
					src="/airbnb-logo.png"
					alt="logo"
					width={120}
					height={100}
					object-fit="contain"
					object-position="left"
				/>
			</div>

			<div className="flex items-center border-2 rounded-full">
				<input type="text" placeholder="start your search" className="h-8" />
				<SearchIcon className="h-8 hidden md:inline-flex text-white bg-red-400 rounded-full p-1 cursor-pointer" />
			</div>

			<div></div>
		</header>
	);
}

