const { default: axios } = require('axios')
const express = require('express')
const app = express()
const PORT = 3000

// API 1
app.get('/', async (req, res) => {
    console.log("This is API 1")
    const response = await axios.get(`http://api2:4000/api2`);
    res.send(`API2 Proxy Response: ${response.data}`); 
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
