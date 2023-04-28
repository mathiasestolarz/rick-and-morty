import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import RandomCharacter from "../RandomCharacter/RandomCharacter";

export default function Nav(props) {
	return (
		<div>
			<SearchBar onSearch={props.onSearch} searchInputError={props.searchInputError}/>
			<RandomCharacter onSearch={props.onSearch}/>
			<NavLink to='/home'>Home</NavLink>
			<NavLink to='/about'>About</NavLink>
		</div>
	);
}
