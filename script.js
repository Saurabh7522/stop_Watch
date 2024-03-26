const showTime = document.getElementById("timer");
const outputData = document.getElementById("getData");
let intervalId;
let [sec, mint, hour, miliSec] = [0, 0, 0, 0];



const stopWatch = () => {

  intervalId = setInterval(() => {
    if (miliSec < 100) {
      miliSec++;
      if (hour > 24) {
        hour = 1;
        mint = 0;
        sec = 0;
        miliSec = 0;
      };
    } else if (miliSec == 100) {
      miliSec = 0;
      sec++;
    } if (sec == 60) {
      sec = 1;
      miliSec = 1;
      mint++;
    } else if (mint == 60) {
      mint = 0;
      sec = 0;
      miliSec = 0;
      hour++;
    };



   showTime.innerHTML = `${String(hour).padStart(2,"0")}: ${String(mint).padStart(2,"0")}: ${String(sec).padStart(2,"0")} :${String(miliSec).padStart(2,"0")}`;
    
  }, 10);
};

const start = () => {
  // bbb();
  stopWatch();
};


const stop = () => {
  clearInterval(intervalId);
};

const resetTimer = () => {
  clearInterval(intervalId);
  sec = 0;
  mint = 0;
  hour = 0;
  miliSec = 0;
  showTime.innerHTML = `${String(hour).padStart(2,"0")}: ${String(mint).padStart(2,"0")}: ${String(sec).padStart(2,"0")} :${String(miliSec).padStart(2,"0")}`;
};

const getTimer = () =>{
  const newParagraph = document.createElement("p");
  newParagraph.innerHTML = `The Stop Time is   ${String(hour).padStart(2,"0")} : ${String(mint).padStart(2,"0")} : ${String(sec).padStart(2,"0")} : ${String(miliSec).padStart(2,"0")}`;
  outputData.append(newParagraph);
  
};


const clrTime = () =>{
  outputData.innerHTML = "";
};

