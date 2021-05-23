import React, { useEffect } from 'react';
import Head from 'next/head';

interface LayoutProps {
	title?: string,
	children: React.ReactNode,
}

export default function Layout ({ children, title }: LayoutProps) {
	const handleExternalLinks = () => {
		const arrAnchors = document.querySelectorAll('a');

		if (arrAnchors.length > 0) {
			arrAnchors.forEach(link => {
				if (link.host !== window.location.host) {
					link.setAttribute('rel', 'noopener noreferrer');
					link.setAttribute('target', '_blank');
				}
			});
		}
	};

	useEffect(() => {
		handleExternalLinks();
	}, []);

	return (
		<React.Fragment>
			<Head>
			<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<title>{ title ? `${title} - Joel Oliveira` : 'Joel Oliveira' }</title>

				<meta name="description" content="Front-end developer specialized in building (and occasionally designing) websites, applications and everything in between." />

				<link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />

				<link rel="preload" as="font" crossOrigin="anonymous" href="/fonts/Montserrat/Montserrat-Regular.ttf" />
				<link rel="preload" as="font" crossOrigin="anonymous" href="/fonts/RobotoMono/RobotoMono-VariableFont.ttf" />
			</Head>

			<main id="content">
				{ children }
			</main>
		</React.Fragment>
	);
}
