import { data } from "../Cast/data";
import { Wrapper, Poster, Tile, ActorName, List, ActorRole } from "../Cast/styled"

const Crew = () => {

    const crew = data.people

    return (
        <Wrapper>
            {crew.map((people) =>
                <List key={people}>
                    <Tile>
                        <Poster src={people.poster} alt={people.name} />
                        <ActorName>{people.name}</ActorName>
                        <ActorRole>{people.role}</ActorRole>
                    </Tile>
                </List>
            )}
        </Wrapper>
    );
}
export default Crew;