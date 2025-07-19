const { default: axios } = require('axios')
const express = require('express')
const app = express()
const PORT = 4000

app.get('/api2',(req,res) =>{
    console.log("This is API 2")
    res.send("I'm API 2")

})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
