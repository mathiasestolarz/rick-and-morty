import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import './App.css';

function App() {
	const [characters, setCharacters] = useState([]);
	const [searchInputError, setSearchInputError] = useState('');
	const [access, setAccess] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const EMAIL = 'mail@example.com';
	const PASSWORD = 'password123';

	useEffect(() => {
		!access && navigate('/');
	}, [access]);

	async function onSearch(id) {
		if (id === '') {
			return setSearchInputError('¡El ID no es válido!');
		}

		const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
		const characterData = await response.json();

		if (characters.length && characters.some(character => character.id === characterData.id)) {
			return setSearchInputError('¡No es posible agregar personajes ya existentes!');
		}

		if (characterData.name) {
			setCharacters((oldChars) => [...oldChars, characterData]);
			return setSearchInputError('');
		}

		setSearchInputError('¡No hay personajes con este ID!');
	}

	function onClose(id) {
		const filteredCharacters = characters.filter(character => character.id !== parseInt(id, 10));
		setCharacters(filteredCharacters);
	}

	function login(userData) {
		if (userData.password === PASSWORD && userData.email === EMAIL) {
			setAccess(true);
			navigate('/home');
		}
	}

	return (
		<div className='App'>
			<div className='searchAndDisplay'>
				{location.pathname !== '/' && <Nav onSearch={onSearch} searchInputError={searchInputError} />}
				<Routes>
					<Route path="/" element={<Form login={login}/>} />
					<Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
					<Route path="/about" element={<About />} />
					<Route path="/detail/:id" element={<Detail />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
