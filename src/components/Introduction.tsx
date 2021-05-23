import styles from '../stylesheets/components/Introduction.module.css';

export default function Introduction() {
	return (
		<section id="introduction">
			<p className={ styles.greeting }>Hi, my name is</p>

			<h1 className={ styles.bigHeading }>Joel Oliveira.</h1>
			<h2 className={ styles.mediumHeading }>I build things for the web.</h2>

			<p className={ styles.description }>Front-end developer specialized in building (and occasionally designing) websites, applications and everything in between.</p>
		</section>
	)
}
