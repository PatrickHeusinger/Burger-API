const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c2fdecbb82msh6d175b79349fff8p1cddedjsn41e33f0db7cf',
        'X-RapidAPI-Host': 'burgers1.p.rapidapi.com'
    }
};

let info = [];


function fetchAPI() {
    fetch('https://burgers1.p.rapidapi.com/burgers', options)
        .then((response) => response.json())
        .then((data) => {
            info.push(data);
            console.log('INFO:', info);
            for (let i = 0; i < data.length; i++) {

                generateAPI(i);
            }
        })
        .catch((err) => {
            console.log('ERROR', err);
        });
}

function generateAPI(i) {
    let container = document.getElementById('out');
    container.innerHTML += `
<div class="box">
<h1>${info[0][i]['name']}&nbsp&nbsp#${info[0][i]['id']}</h1>
<span><b>${info[0][i]['description']}</b></span><br>
<br>
<span><b>Ingredients :</b></span>
<p>${info[0][i]['ingredients']}</p>
</div>
`;
}