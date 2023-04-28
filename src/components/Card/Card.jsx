import { NavLink } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import styles from './Card.module.css';
import { useState } from 'react';

export default function Card(props) {
	const [isFav, setIsFav] = useState(false);

	function mapDispatchToProps(dispatch) {
		return {
			addFav: () => dispatch(addFav({
				id: props.id,
				name: props.name,
				status: props.status,
				species: props.species,
				gender: props.gender,
				origin: props.origin,
				image: props.image
			})),
			removeFav: () => dispatch(removeFav(props.id))
		}
	}

	function handleFavorite() {
		
	}

	return (
		<div className={styles.cardContainer}>
			<div className={styles.closeButton} onClick={() => props.onClose(props.id)}>
				<span />
				<span />
			</div>
			<img className={styles.characterImg} src={props.image} alt={props.name} />
			<ul className={styles.characterDescriptionList}>
				<NavLink to={`/detail/${props.id}`}>
					<li className={styles.characterDescriptionItem}>
						<span>Name: </span>
						<span>{props.name}</span>
					</li>
				</NavLink>
				<li className={styles.characterDescriptionItem}>
					<span>Status: </span>
					<span>{props.status}</span>
				</li>
				<li className={styles.characterDescriptionItem}>
					<span>Species: </span>
					<span>{props.species}</span>
				</li>
				<li className={styles.characterDescriptionItem}>
					<span>Gender: </span>
					<span>{props.gender}</span>
				</li>
				<li className={styles.characterDescriptionItem}>
					<span>Origin: </span>
					<span>{props.origin.name}</span>
				</li>
			</ul>
		</div>
	);
}
