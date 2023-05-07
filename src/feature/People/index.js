import React from 'react';
import { Header, Wrapper } from './styled';
import PeopleListPage from './PeopleList/List';

const PeopleList = () => {
    return (
        <Wrapper>
            <Header>Popular people</Header>
            <PeopleListPage />
        </Wrapper>
    );
};

export default PeopleList;