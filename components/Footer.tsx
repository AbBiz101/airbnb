import React from 'react';

type Props = {};

export default function Footer({}: Props) {
	return (
		<div className="grid text-gray-600 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100">
			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">ABOUT</h5>
				<p>How Airbnb works</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Airbnb Plus</p>
				<p>Airbnb Luxe</p>
			</div>
			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">COMMUNITY</h5>
				<p>Host</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Airbnb Plus</p>
				<p>Airbnb Luxe</p>
			</div>
			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">SUPPORT</h5>
				<p>Host</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Airbnb Plus</p>
				<p>Airbnb Luxe</p>
			</div>
			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">COMMUNITY</h5>
				<p>Host</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Airbnb Plus</p>
				<p>Airbnb Luxe</p>
			</div>
		</div>
	);
}
