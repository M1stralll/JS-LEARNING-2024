import { tracks } from './variables/const.js';


const arrowLeft = document.querySelector(".backward");
const arrowRight = document.querySelector(".forward");
const audioPlayer = document.querySelector(".player");
let arrIndex = 0;


const audio = new Audio(
  tracks[arrIndex].music
);



const playBtn = audioPlayer.querySelector(".toggle-play");
playBtn.addEventListener(
  "click",
  () => {
    if (audio.paused) {
      playBtn.classList.remove("play");
      playBtn.classList.add("pause");
      audio.play();
    } else {
      playBtn.classList.remove("pause");
      playBtn.classList.add("play");
      audio.pause();
    }
  },
  false
);

const timeline = audioPlayer.querySelector(".bar");
timeline.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

setInterval(() => {
    const progressBar = audioPlayer.querySelector(".progress");
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
    audioPlayer.querySelector(".real-time").textContent = getTimeCodeFromNum(
      audio.currentTime
    );
  }, 500);

audio.addEventListener(
    "loadeddata",
    () => {
      audioPlayer.querySelector(" .full-time").textContent = getTimeCodeFromNum(
        audio.duration
      );
    },
    false
  );

function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;
  
    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
      seconds % 60
    ).padStart(2, 0)}`;
  }

  arrowLeft.addEventListener("click", () => {
    arrIndex++
    if (arrIndex === tracks.length){
    arrIndex = 0;
    // В этом месте я бы создал отдельный файл для функции, так как повторяется и много занимает
        const authorPage = document.querySelector('.name');
        authorPage.innerHTML = `
            <span class="author-song">${tracks[arrIndex].author}</span> <br>
                        
            <span class="name-song">${tracks[arrIndex].name}</span>
        `;
        const imgPage = document.querySelector('.change-img');
        imgPage.innerHTML = `
                <img class="player-covers" src=${tracks[arrIndex].img} alt="PlayerCovers">
            `;
        const backIMG = document.querySelector('.change-bacground');
        backIMG.innerHTML = `
                <img class="bacground-player" src=${tracks[arrIndex].img} alt="Back">
            `;


    }else{
        const authorPage = document.querySelector('.name');
        authorPage.innerHTML = `
                <span class="author-song">${tracks[arrIndex].author}</span> <br>
                            
                <span class="name-song">${tracks[arrIndex].name}</span>
            `;
        const imgPage = document.querySelector('.change-img');
        imgPage.innerHTML = `
                <img class="player-covers" src=${tracks[arrIndex].img} alt="PlayerCovers">
            `;
        const backIMG = document.querySelector('.change-bacground');
        backIMG.innerHTML = `
                <img class="bacground-player" src=${tracks[arrIndex].img} alt="Back">
            `;

    }
  }
    
);

arrowRight.addEventListener("click", () => {
    arrIndex++
    if (arrIndex === tracks.length){
    arrIndex = 0;
        const authorPage = document.querySelector('.name');
        authorPage.innerHTML = `
            <span class="author-song">${tracks[arrIndex].author}</span> <br>
                        
            <span class="name-song">${tracks[arrIndex].name}</span>
        `;
        const imgPage = document.querySelector('.change-img');
        imgPage.innerHTML = `
                <img class="player-covers" src=${tracks[arrIndex].img} alt="PlayerCovers">
            `;
        const backIMG = document.querySelector('.change-bacground');
        backIMG.innerHTML = `
                <img class="bacground-player" src=${tracks[arrIndex].img} alt="Back">
            `;
            


    }else{
        const authorPage = document.querySelector('.name');
        authorPage.innerHTML = `
                <span class="author-song">${tracks[arrIndex].author}</span> <br>
                            
                <span class="name-song">${tracks[arrIndex].name}</span>
            `;
        const imgPage = document.querySelector('.change-img');
        imgPage.innerHTML = `
                <img class="player-covers" src=${tracks[arrIndex].img} alt="PlayerCovers">
            `;
        const backIMG = document.querySelector('.change-bacground');
        backIMG.innerHTML = `
                <img class="bacground-player" src=${tracks[arrIndex].img} alt="Back">
            `;

    }
  }
    
);









