import React, { useState, useEffect } from 'react';
import { Wrapper, PeopleList, Item, Tile, Poster, Title } from "./styled";
import { Pagination } from "../../../../common/Pagination";
import { Link } from 'react-router-dom';

const PopularPeopleList = () => {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPopularPeople = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/person/popular?api_key=d3f19b5007aaab7cb579f83b9a664dec&language=en-US&page=${currentPage}`
        );
        const data = await response.json();
        setPeople(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPopularPeople();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Wrapper>
      <PeopleList>
        {people.map((person) => (
          <Link to={`/person/${person.id}`}>
          <Item key={person.id}>
            <Tile>
                <Poster
                  src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                  alt={person.name}
                />
                <Title>{person.name}</Title>
            </Tile>
          </Item>
          </Link>
        ))}
      </PeopleList>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Wrapper>
  );
};

export default PopularPeopleList;