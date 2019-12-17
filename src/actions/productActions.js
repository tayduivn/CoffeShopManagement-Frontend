import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  PRODUCTS_LOADING,
} from './types'
import axios from 'axios'


export const getProducts = (show = 5, page = 1, query) => dispatch => {
  let newQuery = ''
  if (query === '') newQuery = 'undefined'
  else newQuery = query
  axios
    .get(
      `${process.env.REACT_APP_BACKEND_HOST}/api/product/${show}/${page}/${newQuery}`
    )

    .then(response =>
      //console.log(response.data)
      dispatch({ type: GET_PRODUCTS, payload: response.data })
    )
    .catch(er => console.log(er.response))
}

export const deleteProduct = id => dispatch => {
  axios
    .delete(`${process.env.REACT_APP_BACKEND_HOST}/api/product/${id}`)
    .then(response => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: response.data,
      })
    })
}

export const addProduct = newProduct => dispatch => {
  axios
    .post(`${process.env.REACT_APP_BACKEND_HOST}/api/product/`, newProduct)
    .then(response => {
      dispatch({
        type: ADD_PRODUCT,
        payload: newProduct,
      })
    })
}

export const setProductsLoading = () => {
  return {
    type: PRODUCTS_LOADING,
  }
}
