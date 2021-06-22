import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function DefaultLayout() {
    const match = useRouteMatch();

    return (
        <>
            <Header />
            <Footer />
        </>
    );
}

export default DefaultLayout;