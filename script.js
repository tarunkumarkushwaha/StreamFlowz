let home = document.getElementById("home")
let priceplan = document.getElementById("priceplan")
let loginbox = document.getElementById("login-box")
let bannertitle = document.getElementById("banner-title")

const signupopener = ()=>{
    bannertitle.setAttribute("class","invisible")
    loginbox.removeAttribute("class","invisible")
    priceplan.setAttribute("class","invisible")
}
const homeopener = ()=>{
    window.location.reload()
}

const planopener = () =>{
    bannertitle.setAttribute("class","invisible")
    loginbox.setAttribute("class","invisible")
    priceplan.removeAttribute("class","invisible")
}

const playlistopener =()=>{
    loginbox.setAttribute("class","invisible")
    priceplan.setAttribute("class","invisible")
    bannertitle.setAttribute("class","invisible")
}