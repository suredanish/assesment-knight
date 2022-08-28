const Layout  = require("es6views").Layout

let board = [...Array(8*8).keys()].map( i => {

    return `<div class="box" id= "box-${i}"></div> `
}).join("");
 
class Index extends Layout {

    
    parse() {
        let markup = `
        <head>
            <title>Page</title>
        </head>
        <body>`
        

        markup += `
        <div> Hello </div>
        <style>
        .game-board{ 
            display: grid;
            grid-template-columns: ${"50px ".repeat(8)}; 
            grid-template-rows: ${"50px ".repeat(8)};
            justify-content: center;
           }
        .box {
            background-color: #d9d9d9;
            border: 2px solid black;
        }
        
        </style>
        <div class = "game-board">

        ${
            [...Array(8*8).keys()].map( i => {
                Math.floor(i/8) % 2 ? (i % 2 ? "#d9d9d9":'black' ): (i % 2 ?'black' : "#d9d9d9" )
                return `<div class="box" style = "background-color: ${Math.floor(i/8) % 2 ? (i % 2 ? "#d9d9d9":'black' ): (i % 2 ?'black' : "#d9d9d9" )};" id= "box-${i}" pos = "${i}"></div> `
            }).join("")
        }
        </div>

        `
        markup += `<script type="module" src="../public/js/main.js"></script> </body>`


        
        this._markup = markup;
    }

}
 
module.exports = Index