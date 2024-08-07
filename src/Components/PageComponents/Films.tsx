import React from 'react';

interface FilmProps {
    films: string[];
    onClick: () => void;
    click: boolean;
}

const Films: React.FC<FilmProps> = ({films, onClick, click}) =>{
    if (!films.length) {
        return (
            <div onClick={onClick} className={`card ${click ? 'flipped' : ''}`}>
                <p>Loading films...</p>
            </div>
        )
    }
    return (
        <div onClick={onClick} className={`card ${click ? 'flipped' : ''}`}>
            <h3>Films:</h3>
            {films.map((film: string, index: number) => (
                <p key={index}>{film}</p>
            ))}
        </div>
    );
}


export default Films;