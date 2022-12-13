import Head from 'next/head'
import type { NextPage } from 'next'
import Header from '../components/Header'
import Banner from '../components/Banner'

const Home: NextPage = () => {
  return (
		<div className="">
			<Head>
				<title>airbnb</title>
				<link rel="icon" href="/airbnb.png" />
			</Head>

			<Header />
			<Banner />
		</div>
	);
}

export default Home
