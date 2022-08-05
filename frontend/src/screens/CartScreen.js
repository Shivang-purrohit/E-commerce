import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'
import { useParams } from 'react-router-dom'




const CartScreen = ({match, location, histroy}) => {
  const{id} = useParams()

const productId = id

const qty = location.search ? Number(location.search.split('=')[1]) : 1

const dispatch = useDispatch()
const cart = useSelector(state => state.cart)
const { cartItems } = cart

useEffect(() => {
  if (productId) {
    dispatch(addToCart(productId, qty))
  }
}, [dispatch, productId, qty])





return  <h2>Cart</h2>





}



export default CartScreen
