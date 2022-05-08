/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILED,
} from "./actionType";
import axios from "axios";

export const fetchProductList = (endpoints) => {
  return async (dispatch) => {
    dispatch(fetchProducts())
    try {
      axios.get(`https://shop-pbl6.herokuapp.com/api/v1/products/${endpoints}`).then(response => {
        // console.log("response ben action",response);
        const products = response.data.data.data;

        dispatch(fetchProductSuccess(products));
      }).catch(err => {
        dispatch(fetchProductFailed(err));
      })
    } catch (error) {
      dispatch(fetchProductFailed(error));
    }
  };
};

const fetchProducts = () => {
  return {
    type: FETCH_PRODUCT,
  };
};

const fetchProductSuccess = (products) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload:{products},
  };
};

const fetchProductFailed = (error) => {
  return {
    type: FETCH_PRODUCT_FAILED,
    payload: {
      error,
    },
  };
};
