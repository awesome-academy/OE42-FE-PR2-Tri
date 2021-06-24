import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide';
import * as actions from './../../actions';
import Container from '@material-ui/core/Container';
import MultipleCarousel from '../../components/MultipleCarousel';
import './Home.scss';

function Home() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const hotTrendProducts = useSelector(state => state.homeData.hotTrendData);
    const menProducts = useSelector(state => state.homeData.menClothesData);
    const womenProducts = useSelector(state => state.homeData.womenClothesData);
    const kidsProducts = useSelector(state => state.homeData.kidsClothesData);
    const handbagAndShoesProducts = useSelector(state => state.homeData.handbagAndShoesData);

    useEffect(() => {
        dispatch(actions.actSetHotTrendData(products));
        dispatch(actions.actSetMenClothesData(products));
        dispatch(actions.actSetWomenClothesData(products));
        dispatch(actions.actSetKidsClothesData(products));
        dispatch(actions.actSetHandbagAndShoesData(products));
    }, [products]);

    return (
        <main className="main">
            <Slide />
            <Container>
                <section className="section__hot-product">
                    <MultipleCarousel label="hot trend product" products={hotTrendProducts} />
                </section>
            </Container>
        </main>
    );
}

export default Home;