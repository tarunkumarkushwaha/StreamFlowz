let home = document.getElementById("home")
let priceplan = document.getElementById("priceplan")
let loginbox = document.getElementById("login-box")
let bannertitle = document.getElementById("banner-title")
let playbtn = document.getElementById('playbtn')
let myAudio = document.getElementById('myAudio')
let currentsongname = document.getElementById("currentsongname")
let tracks = document.getElementById("trackslist")
let player = document.getElementById("player")
let range = document.getElementById('range')
let songbox = document.getElementsByClassName('songbox')

// testing sountracks 

let soundtracks = [{
    songname: "kirby alarm tone",
    tracklink: "Audio/kirby-alarm-clock-127079.mp3",
    bgimage: "img/kirbywithdonut.jpg"
},
{
    songname: "trace",
    tracklink: "https://cdn.pixabay.com/download/audio/2022/09/29/audio_4491b5f092.mp3?filename=euphoria-121294.mp3",
    bgimage: "img/movie5.jpg"
},
{
    songname: "piano",
    tracklink: "https://cdn.pixabay.com/download/audio/2022/01/25/audio_021c6ee0b9.mp3?filename=with-all-my-heart-15640.mp3",
    bgimage: "img/movie6.jpg"
}
]

const signupopener = () => {
    bannertitle.setAttribute("class", "invisible")
    loginbox.removeAttribute("class", "invisible")
    priceplan.setAttribute("class", "invisible")
    playlist.setAttribute("class", "invisible")
}
const homeopener = () => {
    window.location.reload()
}

const planopener = () => {
    bannertitle.setAttribute("class", "invisible")
    loginbox.setAttribute("class", "invisible")
    priceplan.removeAttribute("class", "invisible")
    playlist.setAttribute("class", "invisible")
}

const playlistopener = () => {
    playlist.removeAttribute("class", "invisible")
    loginbox.setAttribute("class", "invisible")
    priceplan.setAttribute("class", "invisible")
    bannertitle.setAttribute("class", "invisible")
}
setTimeout(() => { playlistopener() }, 3000)

// audioplayer 
let flag = false
let progress

let playPause = () => {
    flag ? pauseAudio() : playAudio()
    flag ? playbtn.innerText = "pause" : playbtn.innerText = "play"
}
const playAudio = (e) => {
    myAudio.play();
    flag = true
}

const pauseAudio = (e) => {
    myAudio.pause();
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
    console.log(myAudio)
    playAudio()
    
})

soundtracks.map((song) => {
    tracks.innerHTML = tracks.innerHTML + `<div class="songbox"><img class="songimg" src="${song.bgimage}" alt="song not loaded"><p class="songnames">${song.songname}</p></div>`
})
