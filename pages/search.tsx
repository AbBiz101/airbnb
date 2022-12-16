import React from 'react';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InfoCard from '../components/InfoCard';
type Props = {};

export default function search({}: Props) {
	const router = useRouter();
	const { location, startDate, endDate, guestInput } = router.query;
	const searchResults = [
		{
			img: '/img_1.jpg',
			star: 4.5,
			total: 'location',
			price: 'location',
			title: 'location',
			location: 'location',
			description: 'location',
		},
		{
			img: '/img_1.jpg',
			star: 4.5,
			total: 'location',
			price: 'location',
			title: 'location',
			location: 'location',
			description: 'location',
		},
		{
			img: '/img_1.jpg',
			star: 4.5,
			total: 'location',
			price: 'location',
			title: 'location',
			location: 'location',
			description: 'location',
		},
	];
	const formatStartDate =
		startDate && format(new Date(startDate.toString()), 'dd MMMM yy');
	const formatEndDate =
		endDate && format(new Date(endDate.toString()), 'dd MMMM yy');

	const placeholder = `${location} | ${formatStartDate} - ${formatEndDate} | ${guestInput}`;
	return (
		<div>
			<Header placeholder={placeholder} />
			<main>
				<section className="flex-grow pt-14 px-6">
					{location && (
						<>
							<p className="text-xs">
								200+ Stays from {formatStartDate} to {formatEndDate} for
								{guestInput} guests.
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

					<div className="flex flex-col">
						{searchResults?.map(
							(
								{ img, star, total, price, title, location, description },
								i,
							) => (
								<InfoCard
									key={i}
									img={img}
									star={star}
									title={title}
									price={price}
									total={total}
									location={location}
									description={description}
								/>
							),
						)}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

// export async function getServerSideProps() {
// 	const searchResults = [{}];
// 	return { prop: { searchResults } };
// }
