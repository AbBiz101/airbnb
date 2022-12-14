import React from 'react';
import Image from 'next/image';
import {
	SearchIcon,
	GlobeAltIcon,
	MenuIcon,
	UserCircleIcon,
	UsersIcon,
} from '@heroicons/react/solid';

type Props = {};

export default function Header({}: Props) {
	return (
		<header className="sticky items-center grid grid-cols-3 p-5 md:px-10 top-0 z-50 bg-white shadow-md ">
			<div className="relative items-center hidden md:inline-flex h-10 cursor-pointer mx-0 my-auto">
				<Image
					className="hidden md:inline-flex"
					src="/airbnb-logo.png"
					alt="logo"
					width={120}
					height={100}
					object-fit="contain"
					object-position="left"
				/>
			</div>

			<div className="flex items-center col-start-1 col-span-2 md:col-span-1 md:col-start-2 py-1 md:py-0 border-2 md:shadow-sm rounded-full">
				<input
					type="text"
					className="pl-5 flex-grow text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none"
					placeholder="start your search"
				/>
				<SearchIcon className="h-8 hidden md:inline-flex text-white bg-red-400 rounded-full p-1 cursor-pointer md:m-1" />
			</div>

			<div className="flex items-center space-x-4 justify-end text-gray-500">
				<p className="hidden lg:inline-flex cursor-pointer">Become a host</p>
				<GlobeAltIcon className="h-8 cursor-pointer" />
				<div className="flex items-center border-2 p-1 space-x-2 rounded-full text-gray-500">
					<MenuIcon className="h-7 cursor-pointer" />
					<UserCircleIcon className="h-7 cursor-pointer" />
				</div>
			</div>
		</header>
	);
}
