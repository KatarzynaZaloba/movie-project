import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Wrapper, List, Tile, Poster, ActorName, ActorRole, NoPoster } from "../Cast/styled";
import { selectCrew } from "../../movieDetailsSlice";
import posterImg from '../image/poster.svg';
import { toPerson } from "../../../../core/routes";

const Crew = ({ movieId }) => {
    const crew = useSelector((state) => selectCrew(state, movieId));

    return (
        <Wrapper>
            {crew.map(({ profile_path, name, crew_id, department, id }) => (
                <List key={crew_id}>
                    <Link to={toPerson({ personId: id })}>
                        <Tile>
                            {profile_path ? (
                                <Poster src={`https://image.tmdb.org/t/p/w185${profile_path}`} alt={name} />
                            ) : (
                                <NoPoster src={posterImg} alt="No poster available" />
                            )}
                            <ActorName>{name}</ActorName>
                            <ActorRole>{department}</ActorRole>
                        </Tile>
                    </Link>
                </List>
            ))}
        </Wrapper>
    );
};

export default Crew;