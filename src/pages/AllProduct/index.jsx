import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Aside from '../../components/Aside';
import ContentHeader from '../../components/ContentHeader';
import ListItem from '../../components/ListItem';
import LoadingProduct from '../../components/LoadingProduct';
import Paginate from '../../components/Paginate';
import Sort from '../../components/Sort';
import sortBy from '../../utils/sortBy';
import * as actions from './../../actions';

function AllProduct() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const history = useHistory();
    const { pageId } = useParams();

    const loading = useSelector(state => state.loading);
    const products = useSelector(state => state.products);
    const filterProducts = useSelector(state => state.filterProduct.filterProductData);
    const limit = useSelector(state => state.paginate.limit);
    const page = useSelector(state => state.paginate.page);

    const totalPage = Math.ceil(filterProducts.length / limit);
    const indexOfLastList = page * limit;
    const indexOfFirstList = indexOfLastList - limit;
    const currentList = filterProducts.slice(indexOfFirstList, indexOfLastList);

    useEffect(() => {
        document.title = `${t('all product')}`;
        dispatch(actions.actChangePage(parseInt(pageId)));

        return () => {
            dispatch(actions.actChangePage(1));
        }
    }, []);

    useEffect(() => {
        dispatch(actions.actShowLoading());
        const loadingProduct = setTimeout(() => {
            dispatch(actions.actChangeFilterProductData(products));
            dispatch(actions.actHideLoading());
        }, 1500);

        return () => {
            clearTimeout(loadingProduct);
        }

    }, [products])

    useEffect(() => {
        history.push(`/products/page=${page}`);
    }, [page])

    const handleChangeSort = (event) => {
        const sortId = parseInt(event.target.value);
        const newListProduct = sortBy(sortId, filterProducts, t);
        dispatch(actions.actSortProduct(newListProduct, sortId));
    }

    const handleChangePage = (event, value) => {
        dispatch(actions.actChangePage(value));
    }

    return (
        <main className="main">
            <Container>
                <ContentHeader label="all product" />
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} md={3}>
                        <Aside />
                    </Grid>
                    <Grid item xs={12} sm={8} md={9}>
                        <Sort handleChangeSort={handleChangeSort} />
                        {loading && <LoadingProduct />}
                        {!loading && <ListItem products={currentList} />}
                        {!loading && <Paginate totalPage={totalPage} handleChangePage={handleChangePage} page={page} />}
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
}

export default AllProduct;