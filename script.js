import { soundtracks } from "/songs.js"
let startpage = document.getElementById("startpage")
let priceplan = document.getElementById("priceplan")
let loginbox = document.getElementById("login-box")
let bannertitle = document.getElementById("banner-title")
let playbtn = document.getElementById('playbtn')
let myAudio = document.getElementById('myAudio')
let currentsongname = document.getElementById("currentsongname")
let currentimage = document.getElementById("currentsongimage")
let tracks = document.getElementById("trackslist")
let range = document.getElementById('range')
let plan = document.getElementById('plan')
let signup = document.getElementById('signup')
let footer = document.getElementById('footer')

// testing sountracks 

// let soundtracks = [{
//     songname: "Kirby alarm tone",
//     tracklink: "Audio/kirby-alarm-clock-127079.mp3",
//     bgimage: "img/kirbywithdonut.jpg"
// },
// {
//     songname: "Trace",
//     tracklink: "https://cdn.pixabay.com/download/audio/2022/09/29/audio_4491b5f092.mp3?filename=euphoria-121294.mp3",
//     bgimage: "img/movie5.jpg"
// }
// ]

const signupopener = () => {
    bannertitle.setAttribute("class", "invisible")
    loginbox.removeAttribute("class", "invisible")
    footer.removeAttribute("class", "invisible")
    priceplan.setAttribute("class", "invisible")
    playlist.setAttribute("class", "invisible")
}
const startpageopener = () => {
    window.location.reload()
}

const planopener = () => {
    bannertitle.setAttribute("class", "invisible")
    loginbox.setAttribute("class", "invisible")
    priceplan.removeAttribute("class", "invisible")
    footer.removeAttribute("class", "invisible")
    playlist.setAttribute("class", "invisible")
}

const playlistopener = () => {
    playlist.removeAttribute("class", "invisible")
    loginbox.setAttribute("class", "invisible")
    priceplan.setAttribute("class", "invisible")
    bannertitle.setAttribute("class", "invisible")
    footer.setAttribute("class", "invisible")
}
setTimeout(() => { playlistopener() }, 3000)

// audioplayer 
let flag = false
let progress

let playPause = () => {
    flag ? pauseAudio() : playAudio() ;
}
const playAudio = (e) => {
    myAudio.play();
    playbtn.innerText = "||"
    flag = true
}

const pauseAudio = (e) => {
    myAudio.pause();
    playbtn.innerText = "▶"
    flag = false
}

myAudio.addEventListener("timeupdate", () => {
    progress = parseInt((myAudio.currentTime / myAudio.duration) * 100)
    range.value = progress
})
range.addEventListener('change', () => { myAudio.currentTime = parseInt(range.value * myAudio.duration / 100) })

tracks.addEventListener('click', (e) => {
    let setsong = soundtracks.filter(item => item.songname.toLowerCase().includes(e.target.innerText.toLowerCase()))[0]
    myAudio.setAttribute("src", setsong.tracklink)
    currentsongname.innerText = setsong.songname
    currentimage.setAttribute("src",setsong.bgimage)
    playAudio()

})

soundtracks.map((song) => {
    tracks.innerHTML = tracks.innerHTML + `<div class="songbox"><img class="songimg" src="${song.bgimage}" alt="song not loaded"><p class="songnames">${song.songname}</p></div>`
})

startpage.addEventListener('click',startpageopener)
plan.addEventListener('click',planopener)
signup.addEventListener('click',signupopener)
playbtn.addEventListener('click',playPause)