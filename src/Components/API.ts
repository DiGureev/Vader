import axios from "axios";
import { Character, CharacterData, Homeworld} from "./types";

export const fetch10Chars = async (input: string): Promise<CharacterData | string> => {
    try {
        let url = `https://swapi.dev/api/people/`;
        const response = await axios.get(url);
        const data: { results: Character[] } = response.data;

        // Get the character whose name matches the user input
        const char = data.results.find((obj) => obj.name.toLowerCase().includes(input.toLowerCase()));

        if (!char) {
            return "There are no characters with this name";
        }
        if (char.homeworld) {
            const responseHomeworld = await axios.get(char.homeworld);
            const homeworld: Homeworld = responseHomeworld.data;
            const homeName: string = homeworld.name;
            
            return { char, homeName };
        } else {
            return "Character does not have a homeworld.";
        }
    } catch (e) {
        console.error(e);
        return "Failed to retrieve data";
    }
};