import { useState } from "react";
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
	const [id, setId] = useState('');

	function handleInputChange(event) {
		setId(event.target.value);
	}

	return (
		<div>
			<input type='search' onChange={handleInputChange} value={id}/>
			<button onClick={() => props.onSearch(id)}>Agregar</button>
			{props.searchInputError && <span className={styles.errorText}>{props.searchInputError}</span>}
		</div>
	);
}
