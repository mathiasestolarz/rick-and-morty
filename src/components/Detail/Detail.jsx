import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
	let { id } = useParams();
	let [character, setCharacter] = useState({});

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/${id}`)
			.then(response => response.json())
			.then(characterData => {
				if (characterData.name) {
					setCharacter(characterData);
				} else {
					window.alert('No hay personajes con ese ID');
				}
			});
		return () => {
			setCharacter({});
		}
	}, [id]);

	return (
		<div>
			<ul>
				{Object.keys(character).length && character.name && <li>NAME | {character.name}</li>}
				{Object.keys(character).length && character.status && <li>STATUS | {character.status}</li>}
				{Object.keys(character).length && character.species && <li>SPECIES | {character.species}</li>}
				{Object.keys(character).length && character.gender && <li>GENDER | {character.gender}</li>}
				{Object.keys(character).length && character.origin.name && <li>ORIGIN | {character.origin.name}</li>}
			</ul>
			<img src={character.image} alt={character.name} />
		</div>
	);
}
