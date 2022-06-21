const element = document.getElementById('timer')
const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')

function startTimer(duration, display) {
  let timer = duration
  let minutes, seconds;

  setInterval(function() {
    minutes = parseInt(timer / 60)
    seconds = parseInt(timer % 60);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = ''
    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000)
}

startButton.addEventListener('click',() => {
  startTimer(25 * 60, element);
})
  
stopButton.addEventListener('click',() => {
  clearInterval(element);
})


  
