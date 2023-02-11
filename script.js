import { soundtracks } from "/songs.js"
let startpage = document.getElementById("startpage")
let home = document.getElementById("home")
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
let search = document.getElementById('search')
let prevbtn = document.getElementById('prevbtn')
let nextbtn = document.getElementById('nextbtn')
// let searchbtn = document.getElementById('searchbtn')

// testing sountracks SameSite=Strict

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

// initiation 
soundtracks.map((song) => {
    tracks.innerHTML = tracks.innerHTML + `<div class="songbox" style="background-image:url(${song.bgimage})"><p class="songnames">${song.songname}</p></div>`
});

let setsong=soundtracks[0]

// functions 
const searcher = () => {
    let searchvalue = search.value
    let items = soundtracks.filter(item => item.songname.toLowerCase().includes(searchvalue.toLowerCase()))
    tracks.innerHTML = items.map((song) => `<div class="songbox" style="background-image:url(${song.bgimage})">
                                            <p class="songnames">${song.songname}</p></div>`)
}

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
    flag ? pauseAudio() : playAudio();
}
const playAudio = (e) => {
    myAudio.setAttribute("src", setsong.tracklink)
    currentsongname.innerText = setsong.songname
    currentimage.setAttribute("src", setsong.bgimage)
    myAudio.play();
    playbtn.innerText = "||"
    flag = true
}

const pauseAudio = (e) => {
    myAudio.pause();
    playbtn.innerText = "▶"
    flag = false
}

const next = () => {
    if(soundtracks.indexOf(setsong)!=soundtracks.length-1){setsong = soundtracks[soundtracks.indexOf(setsong)+1]}
    playAudio()
}

const previous = () => {
    if(soundtracks.indexOf(setsong)!=0){setsong = soundtracks[soundtracks.indexOf(setsong)-1]}
    playAudio()
}

// EventListeners 
startpage.addEventListener('click', startpageopener)
home.addEventListener('click', playlistopener)
plan.addEventListener('click', planopener)
signup.addEventListener('click', signupopener)
playbtn.addEventListener('click', playPause)
prevbtn.addEventListener('click', previous)
nextbtn.addEventListener('click', next)
search.addEventListener('keyup', searcher)
myAudio.addEventListener("timeupdate", () => {
    progress = parseInt((myAudio.currentTime / myAudio.duration) * 100)
    range.value = progress
})
range.addEventListener('change', () => { myAudio.currentTime = parseInt(range.value * myAudio.duration / 100) })

tracks.addEventListener('click', (e) => {
    if(e.target.innerText.length<100){setsong = soundtracks.filter(item => item.songname.toLowerCase().includes(e.target.innerText.toLowerCase()))[0]
        playAudio()
    }
})
search.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searcher()
    }
});