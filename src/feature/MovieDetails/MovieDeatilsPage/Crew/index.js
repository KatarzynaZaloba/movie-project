import { Wrapper, List, Tile, Poster, ActorName, ActorRole, StyledLink } from "../Cast/styled";
import noPicture from '../../../../common/Images/noPicture.svg';
import { toPerson } from "../../../../core/routes";

const Crew = ({ crew }) => {

    return (
        <Wrapper>
            {crew.map(({ profile_path, name, department, id }) => (
                <List key={id}>
                    <StyledLink to={toPerson({ personId: id })}>
                        <Tile>
                            <Poster
                                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                                alt={name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = noPicture;
                                }}
                            />
                            <ActorName>{name}</ActorName>
                            <ActorRole>{department}</ActorRole>
                        </Tile>
                    </StyledLink>
                </List>
            ))}
        </Wrapper>
    );
};

export default Crew;