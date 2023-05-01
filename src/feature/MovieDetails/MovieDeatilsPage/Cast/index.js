import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Wrapper, List, Tile, Poster, ActorName, ActorRole, NoPoster } from "./styled";
import { selectCast } from "../../movieDetailsSlice";
import { imgBaseUrl } from "../../../../core/APIBox/apiSource";
import noPosterImg from '../image/noPoster.png';
//import { toPerson } from "../../../../feature/PersonDetails"; 
//jak będę znała nazwę komponentu który przygotowuje Kasia dodam odpowiednią nazwę

const Cast = () => {
    const cast = useSelector(selectCast);

    return (
        <Wrapper>
            {cast.map(({ poster_path, name, cast_id, character, id }) => (
                <List key={cast_id}>
                    <Tile>
                        <Link /*</Tile>to={toPerson({ personId: id })}*/>
                            {poster_path ? (
                                <Poster src={`${imgBaseUrl}/original/${poster_path}`} alt={name} />
                            ) : (
                                <NoPoster src={noPosterImg} alt="No poster available" />
                            )}
                            <ActorName>{name}</ActorName>
                            <ActorRole>{character}</ActorRole>
                        </Link>
                    </Tile>
                </List>
            ))}
        </Wrapper>
    );
}

export default Cast;