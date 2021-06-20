const express = require('express')
const userController = require('.controllers/userController')
const app = express()
app.use(express.json())
app.use("/user",userController)

app.get('/user', (req, res) => {
    res.send("Hello API")
})

app.get('/product/:id', (req, res) => {
    let productId = req.params.id
    console.log("productId:" + productId)
    res.send("Hello  API")
})



app.listen(3000, () => console.log("Server started !"))
