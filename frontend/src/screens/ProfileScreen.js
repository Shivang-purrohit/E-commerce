import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, FormGroup, FormLabel, FormControl  } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
 
import { login } from '../actions/userActions'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { getUserDetails } from '../actions/userActions'




const ProfileScreen = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)


    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const navi = useNavigate()
    
    
    useEffect(() => {
        if(!userInfo) {
        navi('/login')  
        }
        else{
           if (!user?.name) {
            dispatch(getUserDetails('profile'))
           } else {
            setName(user?.name)
            setEmail(user?.email)
            // error here TypeError: Cannot read properties of undefined (reading 'name')
           }
        }
    }, [dispatch, userInfo, user ])
          
    

    const submitHandler = (e) => {
        e.preventDefault()

        if(password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            
     // DISPATCH
        }

    }

  return <Row>
    <Col md={3}>
    
    <h1>User Profile</h1>
    {message && <Message variant='danger'>{message}</Message> }
    {error && <Message variant='danger'>{error}</Message> }
    {loading && <Loader />}
    <Form onSubmit={ submitHandler }>

    <FormGroup controlId='name'>
            <FormLabel>Name</FormLabel>
            <FormControl
             type='name'
             placeholder='Enter Name'
             value={name}
             onChange={(e) => setName(e.target.value)}></FormControl>

        </FormGroup>


        <FormGroup controlId='email'>
            <FormLabel>Email Address</FormLabel>
            <FormControl
             type='email'
             placeholder='Enter Email'
             value={email}
             onChange={(e) => setEmail(e.target.value)}></FormControl>

        </FormGroup>
          
        <FormGroup controlId='password'>
            <FormLabel>Password</FormLabel>
            <FormControl
             type='password'
             placeholder='Enter Password'
             value={password}
             onChange={(e) => setPassword(e.target.value)}></FormControl>

        </FormGroup>

        <FormGroup controlId='confirmpassword'>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl
             type='password'
             placeholder='Confirm Password'
             value={confirmPassword}
             onChange={(e) => setConfirmPassword(e.target.value)}></FormControl>

        </FormGroup>

        <Button type='submit' variant='primary'>
           Update
        </Button>
     
      </Form>

    </Col>
  
    <Col md={9}>
       <h2>My Orders</h2>
    </Col>
    
  </Row>
      
 
 
  
}

export default ProfileScreen
