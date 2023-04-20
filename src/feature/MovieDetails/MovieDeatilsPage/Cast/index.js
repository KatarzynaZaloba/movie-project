import { data } from "./data";

import { Wrapper, List, Tile, Poster, ActorName, ActorRole } from "./styled";


const Cast = () => {

    const cast = data.people

    return (
        <Wrapper>
            {cast.map((people) =>
                <List key={people}>
                    <Tile >
                        <Poster src={people.poster} alt={people.name} />
                        <ActorName>{people.name}</ActorName>
                        <ActorRole>{people.role}</ActorRole>
                    </Tile>
                </List>
            )}
        </Wrapper>
    );
}
export default Cast;