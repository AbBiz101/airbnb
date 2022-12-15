import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Props = {};

export default function search({}: Props) {
	return (
		<div>
			<Header />
			<main>
				<section className="bg-red-200 flex-grow pt-14 px-6">
					<p className="text-xs">Lorem ipsum dolor sit amet.</p>
					<h1 className="text-3xl font-semibold mt-2 mb-6">
						Lorem ipsum dolor.
					</h1>

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
