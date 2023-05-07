import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Wrapper, List, Tile, Poster, ActorName, ActorRole, NoPoster } from "../Cast/styled";
import { selectCrew } from "../../movieDetailsSlice";
import { imgBaseUrl } from "../../../../core/APIBox/apiSource";
import noPosterImg from '../image/noPoster.png';
import { toPerson } from "../../../../core/routes";


const Crew = () => {
    const crew = useSelector(selectCrew);

    return (
        <Wrapper>
            {crew.map(({ poster_path, name, crew_id, department, id }) => (
                <List key={crew_id}>
                    <Link to={toPerson({ personId: id })}>
                        <Tile>
                            {poster_path ? (
                                <Poster src={`${imgBaseUrl}/original/${poster_path}`} alt={name} />
                            ) : (
                                <NoPoster src={noPosterImg} alt="No poster available" />
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