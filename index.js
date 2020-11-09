const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded())



reverseString = (req, res, next) => {
    req.headers['content-type'] = 'application/json';
    var body = req.body;
      
    res.json({
        data: body
    });
}

app.get('/', (req, res) => {
//   res.send('Hello World!')
    res.json({data: "hello world"})
})

app.post('/v1', reverseString)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})