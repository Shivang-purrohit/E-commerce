const express = require('express')
const products = require('./data/products')
const useParams = require('useParams')
const app = express()
const id = useParams()

app.get('/', (req, res) => {
    res.send('API is running')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    
  
const product = products.filter((item) => item._id === id)[0] 
    res.json(product)
})

app.listen(5000, console.log('server running on'))