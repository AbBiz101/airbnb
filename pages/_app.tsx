import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';

const progress = new ProgressBar({
	size: 4,
	color: '#FE595E',
	className: 'z-50',
	delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeError', progress.finish);
Router.events.on('routeChangeComplete', progress.finish);

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
