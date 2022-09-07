import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {

    const [keyword, setKeyword] = useState('')
    const navi = useNavigate()

 const submitHandler = (e) => {
    e.preventDefault()
    if(keyword.trim()) {
        navi(`/search/${keyword}`)
    } else {
        navi('/')
    }
 }

  return (
    <Form onSubmit={submitHandler} inline='true'>    
      <FormControl type='text' name='q' onChange={(e) => setKeyword(e.target.value)}
      placeholder='Search Products..'
      className='mr-sm-2 ml-sm-5'></FormControl>
      <Button type='submit' variant='outline-success' className='p-2'>Search</Button>
    </Form>
  )
}

export default SearchBox
