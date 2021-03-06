import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productsAct';
import Product from './../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);

  const { products, error, loading } = productList;

  useEffect(
    () => {
      dispatch(listProducts());
    },
    [dispatch]
  );

  return (
    <div>
      <h1>Latest Products</h1>
      {loading
        ? <Loader />
        : error
          ? <Message variant="danger">
              {error}
            </Message>
          : <Row>
              {products.map(product =>
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <h3>
                    <Product product={product} />
                  </h3>
                </Col>
              )}
            </Row>}
    </div>
  );
};

export default HomeScreen;
