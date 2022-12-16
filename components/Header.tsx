import Image from 'next/image';
import {
	MenuIcon,
	SearchIcon,
	GlobeAltIcon,
	UserCircleIcon,
	UsersIcon,
} from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
type Props = {};

export default function Header({}: Props) {
	const [userInput, setUserInput] = useState('');
	const [guestInput, setGuestInput] = useState<any | number>(1);
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const router = useRouter();

	const selectionRange = {
		key: 'selection',
		startDate: startDate,
		endDate: endDate,
	};

	const resetInput = () => {
		setUserInput('');
	};

	const handleSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				location: userInput,
				startDate: startDate.toISOString(),
				endDate: endDate.toISOString(),
				guestInput,
			},
		});
	};

	const handleSelection = (ranges: any) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	useEffect(() => {
		
	}, [userInput]);
	return (
		<header className="sticky items-center grid grid-cols-3 p-5 md:px-10 top-0 z-50 bg-white shadow-md ">
			<div className="relative items-center hidden md:inline-flex h-10  mx-0 my-auto">
				<Image
					onClick={() => router.push('/')}
					className="hidden md:inline-flex cursor-pointer"
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
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
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

			{userInput && (
				<div className="flex flex-col col-span-3 mx-auto mt-5">
					<DateRangePicker
						ranges={[selectionRange]}
						minDate={new Date()}
						rangeColors={['#FD5B61']}
						onChange={handleSelection}
					/>
					<div className="flex items-center border-b mb-4">
						<h2 className="text-2xl flex-grow font-semibold">
							Number of Guests
						</h2>
						<UsersIcon className="h-5 " />
						<input
							className="w-12 pl-2 text-lg outline-none text-red-400"
							type="number"
							min={1}
							value={guestInput}
							onChange={(e) => setGuestInput(e.target.value)}
						/>
					</div>
					<div className="flex">
						<button onClick={resetInput} className="flex-grow text-gray-500">
							Cancel
						</button>
						<button onClick={handleSearch} className="flex-grow text-red-500">
							Search
						</button>
					</div>
				</div>
			)}
		</header>
	);
}
