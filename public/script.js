const baseURL= 'https://pokeapi.co/api/v2/'



const input = document.querySelector('.submit', fetchResults);
let height

input.addEventListener('click', fetchResults);


function fetchResults(e) {
    e.preventDefault()
    let url = (baseURL + 'pokemon/' +  document.getElementById("name").value )
    console.log(url)
    fetch(url)
    .then(function (result) {
        console.log(result)
        return result.json();
    })
    .then(function (json) {
        
        console.log(json);
       
        let heightList= document.getElementsByClassName('height');
        heightList.innerText= json['weight'];
        var newHeight= heightList;
        height= newHeight/10+ 'm';
        console.log( heightList)
    // weight.innerText= json['weight']
    // var newWeight = weight.innerText
    // document.getElementById('heightId').innerHTML= newWeight/10+ 'm'
    // console.log(weight)
    })
    

    
    //heightList.innerText= jsonData['height'];
    //let height = document.getElementById("height").value
    let weight = document.getElementById("weight").value
    //img = official-artwork
    console.log(name, height, weight)
    
    document.getElementById('name').innerHTML = name;
    document.getElementById('height').innerHTML = height;
    document.getElementById('weight').innerHTML = weight;

};


// let displayQuote = json => {
//     console.log(json) //prints data from quote

//     let quote = document.createAttribute('h1');
//     quote.className = 'quote';
//     quote.innerText = `"${json[0]}"`
//     quote.style = 'font-family: pinewood; color: #3a2718';

//     let quoteBy = document.createElement('p')
//     quoteBy.id = 'quoteBy';
//     quoteBy.innerText = 'Ron Swanson'
//     quoteBy.style = 'font-size: 3rem; font family: billionDreams; color: #3a2718'
//     if (json[0].length >= 50 && json[0].length <= 150){
//         quote.style.fontSize = '5rem';
//      } else if (json[0] < 50){
//         quote.style.fontSize = '7rem';
//         }
//         else{
//             quote.style.fontSize = '3.5rem';
//         }

//     let button = document.createElement('button');
//     button.innerText = 'Another Please';
//     button.className = 'reset';
//     button.style = 'margin: 0; margin-top: 4em;'
    
//     quoteContainer.appendChild(quote);
//     quoteContainer.appendChild(quoteBy);
//     quoteContainer.appendChild(button);

//     button.addEventListener('click', () => {
//         quoteContainer.removeChild(quote);
//         quoteContainer.removeChild(button);
//         quoteContainer.removeChild(quoteBy)
//         fetchQuote()
//     }
//     )
// }

