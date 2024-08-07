import { useEffect } from 'react';
import { fetch10Chars } from '../API';
import { Item } from '../classes';

interface DebouncedProps {
    input: string;
    setError: (error: string) => void;
    setChar: (char: Item | null) => void;
    setDisplay: (display: string) => void;
    setHome: (home: string) => void;
}

const useDebounced = ({input,setError,setChar,setDisplay,setHome}: DebouncedProps) => {

    useEffect(() => {
        // Clear errors
        setError('');

        // Handle debounce
        const timeout = setTimeout(() => {
            if (input === '') {
                setChar(null);
                setDisplay('none');
            } else {
                setDisplay(''); 
                fetchChar(input).catch(err => {
                    setError('Failed to fetch characters');
                });
            }
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [input]);

    const fetchChar = async (input: string): Promise<void> => {
        try {
            const res = await fetch10Chars(input);
    
            if (typeof res !== 'string') {
                const char = new Item(res.char);
                setChar(char);
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
};

export default useDebounced;