import React, { useEffect } from 'react';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetail } from '../actions/productActions';
import { Loader } from '../components/Loader';
import Message from '../components/Message';

export default function ProductScreen({ match }) {
  const dispatch = useDispatch();
  const { selectedProduct, loading, error } = useSelector(
    (state) => state.productDetails
  );

  // const product = products.find((p) => p._id === match.params.id);
  useEffect(() => {
    dispatch(listProductDetail(match.params.id));
  }, [match.params.id, dispatch]);
  return (
    <>
      {selectedProduct && (
        <>
          <Link className='btn btn-light my-3' to='/'>
            Go Back
          </Link>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <Row>
              <Col md={6}>
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fluid
                />
              </Col>
              <Col md={3}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h3>{selectedProduct.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Rating
                      value={selectedProduct.rating}
                      text={`${selectedProduct.numReviews} reviews`}
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Price: ${selectedProduct.price}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Description: ${selectedProduct.description}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup>
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col>
                          <strong>${selectedProduct.price}</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                          {selectedProduct.countInStock > 0
                            ? 'In Stock'
                            : 'Out Of Stock'}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button
                        className='btn-block'
                        type='button'
                        disabled={selectedProduct.countInStock === 0}
                      >
                        Add To Cart
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          )}
        </>
      )}
    </>
  );
}
