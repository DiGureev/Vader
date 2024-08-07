import React, { useEffect, useState } from 'react';

import Error    from '../PageComponents/Error';
import Text     from '../PageComponents/Text';
import Loading  from '../PageComponents/Loading';
import Films    from '../PageComponents/Films';
import SearchBar from '../SearchBar/SearchBar';

import { Film } from '../types';
import { fetch10Chars, getFilm } from '../API';

  
const MainPage = () => {
    const [error, setError]     = useState<string>('');
    const [display, setDisplay] = useState<string>('none');
    const [click, setClick]     = useState<boolean>(false);

    const [input, setInput]     = useState<string>('');
    const [character, setChar]  = useState<Record<string, any > | null>(null);
    const [home, setHome]       = useState<string>('');
    const [films, setFilms]     = useState<Film[]>([]);

    useEffect(()=>{
        setError('');
        // handling debounce
        const timeout = setTimeout(() => {
        if (input === '') {
            setChar(null);
            setDisplay('none');
        } else {
            setDisplay('');
            fetchChar(input);
        }
        }, 1000); 

        return () => {
            clearTimeout(timeout);
        };
    }, [input])


    const fetchChar = async (input: string): Promise<void> => {
        try {
            const res = await fetch10Chars(input);
    
            if (typeof res !== 'string') {
                setChar(res.char);
                setHome(res.homeName);
            } else {
                setError(res);
                setDisplay('none')
            }
        } catch (e) {
            console.error(e);
            setError("An unexpected error occurred.");
            setDisplay('none')
        }
    };

    const onClick = async () => {

        // Change button to loading...
        click ? setClick(false) : setClick(true);

        // Combine all getFilm functions into Promise.all to handle async requests
        try {
            const films = character && character.films.map((film_url: string) => getFilm(film_url));
            const results: Film[] = await Promise.all(films);    
            setFilms(results);
        } catch (error) {
            console.error('Error fetching films:', error);
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
                        </div> : <Films films={films} onClick={onClick} click={click}/>
                ) : <Loading display={display} /> }
            </div>
        </div>
    );
}

export default MainPage;
