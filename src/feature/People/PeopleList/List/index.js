import React, { useState, useEffect } from 'react';
import { Wrapper, PeopleList, Item, Tile, Poster, Title, StyledNavLink } from './styled';
import { Header } from "../List/styled"
import { Pagination } from "../../../../common/Pagination";
import noPicture from '../../../../common/Images/noPicture.svg';
import ErrorBox from '../../../../common/ErrorBox';
import LoadingSearchResults from "../../../../common/States/Loading/LoadingSearchResult";
import LoadingSpinnerOnly from "../../../../common/States/Loading/LoadingSpinnerOnly";
import { useHistory, useLocation } from "react-router-dom";
import { pageQueryParamName, searchQueryParamName } from '../../../../core/QueryBox/queryParamName';


const PeopleListPage = () => {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [filterLoading, setFilterLoading] = useState(false);
  const [numResults, setNumResults] = useState(0);
  const history = useHistory();
  const location = useLocation();

  let headerText = "Popular People";
  if (location.search.includes("?search=")) {
    const searchQuery = location.search.slice(8);
    headerText = loading ? `Search results for "${searchQuery}"` : `Search results for "${searchQuery}" (${numResults})`;

  }



  const searchQuery = new URLSearchParams(location.search).get(searchQueryParamName);

  const pageQuery = new URLSearchParams(location.search).get(pageQueryParamName);

  useEffect(() => {
    const fetchPopularPeople = async () => {
      try {

        const pageQuery = new URLSearchParams(location.search).get(pageQueryParamName);

        let endpoint = `https://api.themoviedb.org/3/person/popular?api_key=d3f19b5007aaab7cb579f83b9a664dec&language=en-US&page=${pageQuery}`;
        if (location.search.includes("?search=")) {
          const searchQuery = location.search.slice(8);
          endpoint = `https://api.themoviedb.org/3/search/person?api_key=d3f19b5007aaab7cb579f83b9a664dec&language=en-US&query=${searchQuery}&page=${pageQuery}`;
          setFilterLoading(true);
        }
        const response = await fetch(endpoint);
        const data = await response.json();
        setTimeout(() => {
          setPeople(data.results);
          setTotalPages(data.total_pages);
          setLoading(false);
          setFilterLoading(false);
          setNumResults(data.results.length);
          (pageQuery) ? setCurrentPage(pageQuery) : setCurrentPage(1);
        }, 2000);
      } catch (error) {
        console.error(error);
        setHasError(true);
      }
    };
    fetchPopularPeople();
  }, [currentPage, location.search, pageQuery]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setLoading(true);
    if (searchQuery) {
      history.push(`/people?${searchQueryParamName}=${searchQuery}&page=${pageNumber}`);
    } else {
      history.push(`/people?page=${pageNumber}`);
    }
  };

  if (hasError) {
    return <ErrorBox />;
  }

  return (
    <Wrapper>
      <Header>{headerText}</Header>
      {filterLoading ? (
        <LoadingSearchResults />
      ) : (
        <>
          {loading ? (
            <LoadingSpinnerOnly />
          ) : (
            <PopularPeopleList people={people} />
          )}
        </>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        loading={loading}
      />
    </Wrapper>
  );
};



const PopularPeopleList = ({ people }) => {
  return (
    <Wrapper>
      <PeopleList>
        {people.map((person) => (
          <Item key={person.id}>
            <StyledNavLink to={`/person/${person.id}`}>
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
            </StyledNavLink>
          </Item>
        ))}
      </PeopleList>
    </Wrapper>
  );
};

export default PeopleListPage;