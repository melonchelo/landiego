const express = require('express')
const app = express()
app.use("/views", express.static(__dirname + "/views"));
app.set("view engine","ejs")

// Example protected and unprotected routes
app.get('/', (req, res) => res.render('index'))
app.get('/failed', (req, res) => res.send('You Failed to log in!'))

// Auth Routes
app.get('/logout', (req, res) => {
    res.redirect('/');
})
/*hola guille*/
app.listen(4000, () => console.log(`Example app listening on port ${4000}!`))