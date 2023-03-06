let express = require('express');
let app = express();

//REVIEW - VIEW ENGINE
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
//REVIEW - SERVIDOR
let port = process.env.PORT || 3000;

//REVIEW - VISTAS
app.get('/', (req,res) => {
    res.render('front/index');
});

app.listen( port , () => {
    console.log(`server listening on port: ${port}`)
})