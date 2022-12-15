import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import LargeCard from '../components/LargeCard';
import ExploreSection from '../components/ExploreSection';
import LiveAnywhereSection from '../components/LiveAnywhereSection';

type LargeCard = {
	img: string;
	title: string;
	description: string;
	buttonText: string;
};
type ExploreSection = {
	img: string;
	location: string;
	distance: string;
};
type LiveAnywhereSection = {
	img: string;
	title: string;
};
type Props = {
	exploreData: ExploreSection[];
	liveAnywhereData: LiveAnywhereSection[];
	largeCardData: LargeCard;
};

export default function Home({
	exploreData,
	liveAnywhereData,
	largeCardData,
}: Props) {
	return (
		<div className="">
			<Head>
				<title>airbnb</title>
				<link rel="icon" href="/airbnb.png" />
			</Head>
			<Header />
			<Banner />
			<main className="max-w-7xl px-8 sm:px-16 mx-auto">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{exploreData?.map((item, i) => (
							<ExploreSection
								key={i}
								img={item.img}
								location={item.location}
								distance={item.distance}
							/>
						))}
					</div>
				</section>
				<section>
					<h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
					<div className="flex space-x-3 overflow-x-auto overflow-y-hidden scrollbar-hide p-3 -ml-3">
						{liveAnywhereData?.map((item, i) => (
							<LiveAnywhereSection key={i} img={item.img} title={item.title} />
						))}
					</div>
				</section>
				<LargeCard
					img={largeCardData.img}
					title={largeCardData.title}
					buttonText={largeCardData.buttonText}
					description={largeCardData.description}
				/>
			</main>
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	const largeCardData = {
		img: '/banner_2.jpg',
		title: 'The Greatest Outdoors',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, similique!',
		buttonText: 'Get Inspired',
	};
	const exploreData = [
		{
			img: '/img_1.jpg',
			location: 'Paris',
			distance: '3km',
		},
		{
			img: '/img_2.jpg',
			location: 'London',
			distance: '6km',
		},
		{
			img: '/img_3.jpg',
			location: 'Rome',
			distance: '2.5km',
		},
		{
			img: '/img_4.jpg',
			location: 'Dubai',
			distance: '4.5km',
		},
		{
			img: '/img_1.jpg',
			location: 'Paris',
			distance: '3km',
		},
		{
			img: '/img_2.jpg',
			location: 'London',
			distance: '6km',
		},
		{
			img: '/img_3.jpg',
			location: 'Rome',
			distance: '2.5km',
		},
		{
			img: '/img_4.jpg',
			location: 'Dubai',
			distance: '4.5km',
		},
	];
	const liveAnywhereData = [
		{
			img: '/img_1.jpg',
			title: 'Title of the place',
		},
		{
			img: '/img_2.jpg',
			title: 'Title of the place',
		},
		{
			img: '/img_3.jpg',
			title: 'Title of the place',
		},
		{
			img: '/img_4.jpg',
			title: 'Title of the place',
		},
		{
			img: '/img_1.jpg',
			title: 'Title of the place',
		},
		{
			img: '/img_2.jpg',
			title: 'Title of the place6km',
		},
		{
			img: '/img_3.jpg',
			title: 'Title of the place',
		},
		{
			img: '/img_4.jpg',
			title: 'Title of the place',
		},
	];
	// const exploreData = await fetch('https://links.papareact.com/pyp')
	// 	.then((res) => res.json())
	// 	.then((data) => console.log(data));
	return {
		props: {
			exploreData,
			liveAnywhereData,
			largeCardData,
		},
	};
}
