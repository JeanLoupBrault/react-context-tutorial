import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Header from './Header';
import About from './About';
import Home from './Home';
import ItemDetails from './ItemDetails';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
import Sellers from './Sellers';
import ItemDetailsSeller from './ItemDetailsSeller';

function App() {
    return (
        <BrowserRouter>
            <Wrapper>
                <Header />
                <Main>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/items/:itemId">
                            <ItemDetails />
                        </Route>
                        <Route path="/sellers">
                            <Sellers />
                        </Route>
                        <Route path="/sellers/:sellerId">
                            <ItemDetailsSeller />
                        </Route>
                    </Switch>
                </Main>
            </Wrapper>

            <GlobalStyles />
        </BrowserRouter>
    );
}

const Wrapper = styled.div`
max-width: 800px;
margin: auto;
`;

const Main = styled.main`
padding-top: 32px;
padding-bottom: 32px;
`;

export default App;
