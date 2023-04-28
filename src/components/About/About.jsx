import styles from './About.module.css';

export default function About() {
	return (
		<div>
			<img className={styles.aboutImg} src={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'} alt={'Mathias'} />
			<p>Soy Mathias Stolarz y desarrollo aplicaciones web.</p>
		</div>
	);
}
