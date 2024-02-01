document.addEventListener('DOMContentLoaded', () => {
const userTimeInput = document.getElementById('userInput');
const userButton = document.getElementById('userButton');    
const Dig = document.getElementById('Dig');    
//const textDig = secDig.innerText = '0';   
//console.log(textDig) 
 
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then((data) => {
    //creating a random number generator that chooses a random quote
    let random = Math.floor(Math.random() * 16) + 1;
    //const randomProp = obj => Object.keys(obj)[(Math.random() * Object.keys(obj).length) | 0];
    //append a div with the inner text being the individual objects
    //const receivedMessage = document.createElement('div');
          //receivedMessage.setAttribute('class','messageBubble');
          //console.log(data[1].text);

          // const innerMessage = document.createElement('div');
          // innerMessage.setAttribute('class','messageData');
          //const author = document.createElement('p');
          //console.log(randomProp(data))
          //author.innerText = `${data[1].author} - ${data[1].text}`;

          // const quote = document.createElement('p');
          // quote.innerText = `${data[1].text}`;

          //messageContainer.appendChild(receivedMessage);

          //receivedMessage.appendChild(innerMessage);
          // innerMessage.appendChild(author);
          // innerMessage.appendChild(quote);

    //when the input(seconds) is added and button is clicked, the timer starts decrementing from the time
    userButton.addEventListener('click', ()=> {
        let currTimeLeft = userTimeInput.value;
       function decrement (timeLeft){
         setTimeout(()=>{
            if(timeLeft === 0){
                confirm(`${data[random].author} - ${data[random].text}`);
                console.log(`${data[random].author} - ${data[random].text}`)
            } else {
                Dig.innerText = `${timeLeft-1}`;
                return decrement(timeLeft-1);
            }
        },1000)
        
    }
    decrement(currTimeLeft);

    userTimeInput.value = '';
    });
  });
})






// let dogurl = "https://dog.ceo/api/breeds/list/all"

// // add the motivational quote later!
// async function load_pic() {
    
//   const url = dogurl

//   const options = {
//       method: "GET"
//   }

//   let response = await fetch(url, options)

//   if (response.status === 200) {
      
//       const imageBlob = await response.blob()
//       const imageObjectURL = URL.createObjectURL(imageBlob);

//       const image = document.createElement('img')
//       image.src = imageObjectURL

//       const container = document.getElementById("your-container")
//       container.append(image)
//   }
//   else {
//       console.log("HTTP-Error: " + response.status)
//   }
// }
