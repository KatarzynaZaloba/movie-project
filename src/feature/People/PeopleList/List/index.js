import React, { useState, useEffect } from 'react';
import { Wrapper, PeopleList, Item, Tile, Poster, Title, StyledNavLink } from './styled';
import { Header } from "../List/styled"
import { Pagination } from "../../../../common/Pagination";
import noPicture from '../../../../common/Images/noPicture.svg';
import ErrorBox from '../../../../common/States/ErrorBox';
import LoadingSearchResults from "../../../../common/States/Loading/LoadingSearchResult";
import LoadingSpinnerOnly from "../../../../common/States/Loading/LoadingSpinnerOnly";
import { useHistory, useLocation } from "react-router-dom";
import { pageQueryParamName, searchQueryParamName } from '../../../../core/QueryBox/queryParamName';
import NoResults from '../../../../common/States/NoResults';
import { toPerson } from '../../../../core/routes';


const PeopleListPage = () => {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState()
  const history = useHistory();
  const location = useLocation();

  const searchQuery = new URLSearchParams(location.search).get(searchQueryParamName);
  const pageQuery = new URLSearchParams(location.search).get(pageQueryParamName);

  useEffect(() => {
    const fetchPopularPeople = async () => {
      setLoading(true);
      try {
        const searchQuery = new URLSearchParams(location.search).get(searchQueryParamName);

        const pageQuery = new URLSearchParams(location.search).get(pageQueryParamName);

        let endpoint;
        if (searchQuery) {
          endpoint = `https://api.themoviedb.org/3/search/person?api_key=d3f19b5007aaab7cb579f83b9a664dec&language=en-US&query=${searchQuery}&page=${pageQuery ? pageQuery : currentPage}`;
        } else {
          endpoint = `https://api.themoviedb.org/3/person/popular?api_key=d3f19b5007aaab7cb579f83b9a664dec&language=en-US&page=${pageQuery}`;
        }

        const response = await fetch(endpoint);
        const data = await response.json();
        if (searchQuery) {
          setSearchResults({ query: searchQuery, count: data.total_results });
          if (data.total_results === 0) {
            setPeople([]);
          } else {
            setPeople(data.results)
          }
        } else {
          setSearchResults(null);
          setPeople(data.results)
        }
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(error);
        console.error(error);
      }
      (pageQuery) ? setCurrentPage(pageQuery) : setCurrentPage(1);
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    };
    fetchPopularPeople();
  }, [currentPage, location.search, searchQuery, pageQuery]);

  const renderHeader = () => {
    if (searchResults) {
      return (
        searchResults.count > 0 ? (
          <Header>
            Search results for "{searchResults.query}" ({searchResults.count})
          </Header>
        ) : (
          <NoResults />
        )
      );
    } else {
      return <Header>Popular people</Header>;
    }
  };

  const renderPagination = () => {
    if (searchResults) {
      return (
        searchResults.count > 0 ?
          (<Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          ) : (
            <></>
          )
      )
    } else {
      return (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )
    }
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (searchQuery) {
      history.push(`/people?${searchQueryParamName}=${searchQuery}&page=${pageNumber}`);
    } else {
      history.push(`/people?page=${pageNumber}`);
    }
  };

  return (
    <Wrapper>
      {error && <ErrorBox />}
      {loading && !searchQuery && <LoadingSpinnerOnly />}
      {loading && searchQuery && <LoadingSearchResults />}
      {!loading && (
        <>
          {renderHeader()}
          <PeopleList>
            {people.length > 0 ? (
              people.map((person) => (
                <Item key={person.id}>
                  <StyledNavLink to={toPerson({ personId: person.id })}>
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
              ))
            ) : (
              <></>
            )}
          </PeopleList>
          {renderPagination()}
        </>
      )}
    </Wrapper>
  );
};

export default PeopleListPage;