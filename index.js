const stopButton = document.getElementById('stopButton');
const slowButton = document.getElementById('slowButton');
const goButton = document.getElementById('goButton');

const stopLight = document.getElementById('stopLight');
const slowLight = document.getElementById('slowLight');
const goLight = document.getElementById('goLight');

//// Part1:
stopButton.addEventListener('click',() => {
  stopLight.classList.toggle('stop')
})
slowButton.addEventListener('click',() => {
  slowLight.classList.toggle('slow')
})
goButton.addEventListener('click',() => {
  goLight.classList.toggle('go')
})

// ////// Part2:
// let newArray = [stopButton,slowButton,goButton];

// newArray.forEach((button) => {
//   button.addEventListener('mouseenter', (event) =>{
//     console.log(`Entered ${event.target.innerText} button`);
//   })
//   button.addEventListener('mouseleave', (event) => {
//     console.log(`Left ${event.target.innerText} button`);
//     console.log(event);
//   })
// })

//// Bonus:
const controls = document.getElementById('controls');

controls.addEventListener('click', (event) => {
  /// If event at target equal controls is true;
    if (event.target === controls){
      // console.log(event); // log event at controls id
      return; // return to nothing
    } else if (event.target === stopButton){
      ///  Use class list contain to check if an element contains a class
      if (stopLight.classList.contains('stop')){ 
        console.log(`${stopButton.textContent} bulb on`);
      } else {
        console.log(`${stopButton.textContent} bulb off`);
      }
    } else if (event.target = slowButton){
      if (slowLight.classList.contains('slow')){
        console.log(`${slowButton.textContent} bulb on`);
      } else {
        console.log(`${slowButton.textContent} bulb off`);
      }
    } else if (event.target = goButton){
      if (slowLight.classList.contains('go')){
        console.log(`${goButton.textContent} bulb on`);
      } else {
        console.log(`${goButton.textContent} bulb off`);
      }
    }
    // console.log(event);
})

