import React, { useState, useEffect } from 'react';
import { Wrapper, PeopleList, Item, Tile, Poster, Title } from "./styled";
import { Pagination } from "../../../../common/Pagination";
import Loading from "../../../../common/States/Loading";
import noPicture from "../../../../common/Images/noPicture.svg";

const PopularPeopleList = () => {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularPeople = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/person/popular?api_key=d3f19b5007aaab7cb579f83b9a664dec&language=en-US&page=${currentPage}`
        );
        const data = await response.json();
        setTimeout(() => {
          setPeople(data.results);
          setTotalPages(data.total_pages);
          setLoading(false);
        }, 2000);
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
      {loading ? (
        <Loading />
      ) : (
        <PeopleList>
          {people.map((person) => (
            <Item key={person.id}>
              <Tile>
                <Poster
                  src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                  alt={person.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = noPicture;
                  }}
                />

                <Title>{person.name}</Title>
              </Tile>
            </Item>
          ))}
        </PeopleList>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Wrapper>
  );
};

export default PopularPeopleList;