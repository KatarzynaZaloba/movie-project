import React, { useState, useEffect } from 'react';
import { Wrapper, PeopleList, Item, Tile, Poster, Title } from "./styled";

const PopularPeopleList = () => {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPopularPeople = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/person/popular?api_key=d3f19b5007aaab7cb579f83b9a664dec&language=en-US&page=${page}`
        );
        const data = await response.json();
        setPeople(prevPeople => [...prevPeople, ...data.results]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPopularPeople();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Wrapper>
      <PeopleList>
        {people.map((person) => (
          <Item key={person.id}>
            <Tile>
              <Poster
                src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                alt={person.name}
              />
              <Title>{person.name}</Title>
            </Tile>
          </Item>
        ))}
      </PeopleList>
      {people.length > 0 && people.length % 20 === 0 && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </Wrapper>
  );
};

export default PopularPeopleList;