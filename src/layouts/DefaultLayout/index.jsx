import React, { useEffect } from 'react';
import { Route, Switch, useRouteMatch, Redirect, useLocation } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import AllProduct from '../../pages/AllProduct';
import CategoryProduct from '../../pages/CategoryProduct';
import Detail from '../../pages/Detail';
import FeaturedProduct from '../../pages/FeaturedProduct';
import Home from '../../pages/Home';
import RecentlyViewedProduct from '../../pages/RecentlyViewedProduct';

function DefaultLayout() {
    const match = useRouteMatch();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (
        <>
            <Header />
            <Switch>
                <Route exact path={match.url} component={Home} />
                <Route path={`${match.url}products/page=:pageId`} component={AllProduct} />
                <Redirect exact from={`${match.url}products`} to={`${match.url}products/page=1`} />

                <Route path={`${match.url}recently-viewed-products/page=:pageId`} component={RecentlyViewedProduct} />
                <Redirect exact from={`${match.url}recently-viewed-products`} to={`${match.url}recently-viewed-products/page=1`} />

                <Route path={`${match.url}product/:categoryId/page=:pageId`} component={CategoryProduct} />
                <Redirect exact from={`${match.url}product/:categoryId`} to={`${match.url}product/:categoryId/page=1`} />

                <Route path={`${match.url}featured-products/page=:pageId`} component={FeaturedProduct} />
                <Redirect exact from={`${match.url}featured-products`} to={`${match.url}featured-products/page=1`} />

                <Route path={`${match.url}detail/:slug.:id`} component={Detail} />
            </Switch>
            <Footer />
        </>
    );
}

export default DefaultLayout;