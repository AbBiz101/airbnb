import React from 'react';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
type Props = {};

export default function search({}: Props) {
	const router = useRouter();
	const { location, startDate, endDate, guestInput } = router.query;
	
	//const formatedStartDate2 = format(new Date(), 'dd MMMM yy');
	//const formatedStartDate = format(new Date(startDate), 'dd MMMM yy');
	//const formatedEndDate = format(new Date(endDate), 'dd MMMM yy');
	//console.log(new Date(), startDate);

	return (
		<div>
			<Header />
			<main>
				<section className="bg-red-200 flex-grow pt-14 px-6">
					{location && (
						<>
							<p className="text-xs">
								200+ Stays {startDate}- {endDate} - for
								{guestInput} of guests.
							</p>
							<h1 className="text-3xl font-semibold mt-2 mb-6">
								Stay in {location}.
							</h1>
						</>
					)}

					<div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
						<p className="button">Cancellation Flexibility</p>
						<p className="button">Type of Place</p>
						<p className="button">Price</p>
						<p className="button">Rooms and Beds</p>
						<p className="button">More filters</p>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
