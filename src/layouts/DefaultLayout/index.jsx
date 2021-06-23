import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Home from '../../pages/Home';

function DefaultLayout() {
    const match = useRouteMatch();

    return (
        <>
            <Header />
            <Switch>
                <Route exact path={match.url} component={Home} />
            </Switch>
            <Footer />
        </>
    );
}

export default DefaultLayout;