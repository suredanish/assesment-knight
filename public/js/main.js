const boxes = document.querySelectorAll(".box")
console.log(boxes);
boxes.forEach( box => {
    box.onclick = async (e) => {
        console.log(e.target.getAttribute("pos"))
        const result = await fetch(`http://localhost:3000/find`, {
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin', 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({id: e.target.getAttribute("pos")})
        })

        const data = await result.json();

        document.getElementById(e.target.id).style.backgroundColor = "red";
        let pos = data.pos.map( e => `box-${e}`)
        pos = new Set(pos)
        boxes.forEach(box => {
            if(pos.has(box.id) )
            box.style.backgroundColor = "tomato";
        })
    }
})