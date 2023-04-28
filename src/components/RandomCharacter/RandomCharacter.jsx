import styles from './RandomCharacter.module.css';

export default function RandomCharacter(props) {
	const MAX_CHARACTER_AMOUNT = 826;
	return (
		<div>
			<button
				className={styles.btnRandom}
				onClick={() => props.onSearch(Math.floor(Math.random() * MAX_CHARACTER_AMOUNT))}
			>
				Add Random
			</button>
		</div>
	);
}
