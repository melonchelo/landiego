const express = require('express')
const app = express()
app.use("/views", express.static(__dirname + "/views"));
app.set("view engine","ejs")

// Example protected and unprotected routes
app.get('/', (req, res) => res.render('index'))
/*server host*/
app.listen(4000, () => console.log(`inicie chrome en localhost:${4000}!`))