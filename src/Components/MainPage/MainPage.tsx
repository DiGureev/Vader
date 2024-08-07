import { useState } from 'react';
import useDebounced from './useDebounced';

import Error    from '../PageComponents/Error';
import Text     from '../PageComponents/Text';
import Loading  from '../PageComponents/Loading';
import Films    from '../PageComponents/Films';
import SearchBar from '../SearchBar/SearchBar';

import { Item } from '../classes';
  
const MainPage = () => {
    const [error, setError]     = useState<string>('');
    const [display, setDisplay] = useState<string>('none');
    const [click, setClick]     = useState<boolean>(false);

    const [input, setInput]     = useState<string>('');
    const [character, setChar]  = useState<Item | null>(null);
    const [home, setHome]       = useState<string>('');
    const [films, setFilms]     = useState<string[]>([]);

    useDebounced({input,setError,setChar,setDisplay,setHome});

    const onClick = async () => {

        // Change button to loading...
        click ? setClick(false) : setClick(true);

        if (character) {
            try {
                await character.getFilmes();
                setFilms(character.film_titles); 
            } catch (error) {
                console.error('Error fetching films:', error);
                setError('Error fetching films.');
            }
        }
    };


    return (
        <div className="main-page">
            <SearchBar onChange={(e) => setInput(e.target.value)}/>
            <div className='main-container'>
                {error && <Error error={error}/>}
                {character ? (!click ? 
                        <div onClick={onClick} className={`card ${click ? 'flipped' : ''}`}>
                                <Text text={character.name} title='Name'/>
                                <Text text={character.birth_year} title='Date of birth'/>
                                <Text text={character.gender} title='Gender'/>
                                <Text text={home} title='Homeworld'/>
                        </div> : <Films films={character.film_titles} onClick={onClick} click={click}/>
                ) : <Loading display={display} /> }
            </div>
        </div>
    );
}

export default MainPage;
