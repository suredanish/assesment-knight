const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const path = require('path')

app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extend:true, extended: true}));
const viewEngine = (new require("es6views").viewEngine)(app)
app.set('view engine', 'es6');
app.use(express.static(path.join(__dirname, 'public')));


function findPositions(i,j){
    let ary = [];
    canMove = (i,j) => {return !(i>7 || i<0 || j>7 || j<0)}

    const r = [-2,-2,-1,1,2,2,-1,1]
    const c = [-1,1,2,2,-1,1,-2,-2]


    for( let k =0; k< r.length; k++) {
        let ii = i+r[k], jj = j+c[k];
        if(canMove(ii,jj) ) ary.push(ii*8 + jj); 
    }

    return ary;
}


app.set('views', __dirname + '/views');


app.get("/" ,(req,res) => {

    res.render("index");
})

app.post("/find", async (req,res) => {
    const p = Number(req.body.id);

    const pos = findPositions(Math.floor(p/8), p%8);

    res.send({pos:pos})
})

app.listen(PORT,() =>{console.log(`listning on port ${PORT}`)})