document.addEventListener('DOMContentLoaded', () => {
const userTimeInput = document.getElementById('userInput');
const userButton = document.getElementById('userButton');    
const secDig = document.getElementById('secDig');    
const textDig = secDig.appendChild('p');   
console.log(textDig) 
 


//userButton.addEventListener('click', ()=> alert(userTimeInput.value))
//set interval, until it gets to 0

//when the input(seconds) is added and button is clicked, the timer starts decrementing from the time
userButton.addEventListener('click', ()=> 

{
    //setTimeout(()=>alert('relax!'), userTimeInput.value*1000)
   function decrement (timeLeft = userTimeInput.value){
     setTimeout(()=>{
        if(timeLeft === 0){
            alert('relax');
        } else {
            textDig.innerText= timeLeft-1
            return decrement(timeLeft);
        }
    },1000)
}
});


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


})