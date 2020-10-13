import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { Loader } from '../components/Loader';
import { Link } from 'react-router-dom';
import { listProductDetail, updateProduct } from '../actions/productActions';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';
import Axios from 'axios';

const ProductEditScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const productId = match.params.id;
  const [price, setPrice] = useState(0);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [brand, setBraand] = useState('');
  const [description, setDescription] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [category, setCategory] = useState('');
  const [uploading, setUploading] = useState(false);

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, selectedProduct: product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    success: successUpdate,
    error: errorUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push('/admin/productlist');
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetail(productId));
      } else {
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setImage(product.image);
        setBraand(product.brand);
        setCountInStock(product.countInStock);
        setCategory(product.category);
      }
    }
  }, [dispatch, history, productId, product, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        brand,
        description,
        category,
        image,
        countInStock,
      })
    );
  };
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const { data } = await Axios.post('/api/upload', formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
      console.log(error);
    }
  };
  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter Name'
                onChange={(e) => setName(e.target.value)}
                value={name}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter Price'
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Image url'
                onChange={(e) => setImage(e.target.value)}
                value={image}
              ></Form.Control>
              <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              >
                {uploading && <Loader />}
              </Form.File>
            </Form.Group>
            <Form.Group controlId='brand'>
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter brand'
                onChange={(e) => setBraand(e.target.value)}
                value={brand}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category'
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='countinstock'>
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter Counter In Stock'
                onChange={(e) => setCountInStock(e.target.value)}
                value={countInStock}
              ></Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ProductEditScreen;
