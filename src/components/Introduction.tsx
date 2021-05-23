import styles from '../stylesheets/components/Introduction.module.css';

export default function Introduction() {
	return (
		<section id="introduction">
			<p className={ styles.greeting }>Hi, my name is</p>

			<h1 className={ styles.bigHeading }>Joel Oliveira.</h1>
			<h2 className={ styles.mediumHeading }>I build things for the web.</h2>

			<p className={ styles.description }>Optio consequatur inventore ut sunt reiciendis vel esse cum mollitia quisquam doloribus itaque, et id <a href="https://google.com/">rerum</a> ab eum impedit laborum nihil laboriosam ut sunt! Magni nostrum aliquam dicta. Architecto?</p>

			<a href="mailto:joeldorosarioo@gmail.com" className="button callToAction">Get In Touch</a>
		</section>
	)
}
