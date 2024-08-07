import React, { Component } from 'react';
import { Film } from '../types';

interface FilmProps {
    films: Film[];
    onClick: () => void;
    click: boolean;
}


class Films extends Component<FilmProps> {
    render() {
        const { films, onClick, click } = this.props;
        
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
                {films.map((film: Film, index: number) => (
                    <p key={index}>{film.title}</p>
                ))}
            </div>
        );
    }
}

export default Films;