export interface Homeworld {
    name: string;
}
  
export interface Film {
    title: string;
}

export interface Character {
    name: string;
    birth_year: string;
    gender: string;
    films: Film[];
    homeworld: string;
}

export interface CharacterData {
    char: Character;
    homeName: string;
}