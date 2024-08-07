import axios from "axios";
import { Film, Character} from "./types";

export class Item {
    public name: string;
    public birth_year: string;
    public gender: string;
    public films: string[]; 
    public film_titles: string[]; 

    constructor(char: Character) {
        this.name = char.name;
        this.birth_year = char.birth_year;
        this.gender = char.gender;
        this.films = char.films; 
        this.film_titles = []; 
    }

    public getFilm = async (url: string): Promise<Film | null> => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error fetching film:', error);
            return null;
        }
    };

    public getFilmes = async (): Promise<void> => {
        try {
            const filmPromises = this.films.map((filmUrl) => this.getFilm(filmUrl));
            const results: (Film | null)[] = await Promise.all(filmPromises);
            this.film_titles = results
                .filter((film): film is Film => film !== null) 
                .map((film) => film.title);
        } catch (error) {
            console.error('Error fetching films:', error);
        }
    };

}