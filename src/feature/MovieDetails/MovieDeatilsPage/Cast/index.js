import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Wrapper, List, Tile, Poster, ActorName, ActorRole, NoPoster } from "./styled";
import { selectCast } from "../../movieDetailsSlice";
import posterImg from '../image/poster.svg';
import { toPerson } from "../../../../core/routes";
import { SectionTitle } from "../../styled";

export const Cast = () => {
    const cast = useSelector(selectCast);

    return (
        <>
            <SectionTitle >Cast</SectionTitle>
            {cast && cast.length > 0 && (
                <Wrapper>
                    {cast.map(({ profile_path, id, name, cast_id, character }) => (
                        <List key={cast_id}>

                            <Link to={toPerson({ personId: id })}>
                                {profile_path ? (
                                    <Poster src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
                                ) : (
                                    <NoPoster src={posterImg} alt="No poster available" />
                                )}
                                <ActorName>{name}</ActorName>
                                <ActorRole>{character}</ActorRole>

                            </Link>
                        </List>
                    ))}
                </Wrapper>
            )}
        </>
    );
}

export default Cast;