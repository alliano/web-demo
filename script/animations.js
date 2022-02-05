




// take name
const nme = document.getElementById("name").value;


// buton in welcome page
// if logo on click
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("logo") || e.target.classList.contains("nama")){
        window.location.href = "/index.html"
    }
})

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("start")) {
       window.location.href = "/courses.html" 
    }
})

// if card in courses on click
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("gambar1") || e.target.classList.contains("gambar2") || e.target.classList.contains("gambar3") || e.target.classList.contains("gambar4")) {
        window.location.href = "/courseDetail.html"
    }
})


let greet = `Hallo!!, ${nme} thank you for join to us`;
let index = 0;
const tyepe = () => {
    if (index < greet.length) {
        if (document.getElementById("typing")) {
            document.getElementById("typing").innerHTML += greet.charAt(index);
            setTimeout(tyepe, 100);
            index++;
        }
    } else {
        if (index === greet.length) {
            document.getElementsByClassName("start")[0].style.display = "inline-block"
        }
    }
}
tyepe();

let a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log("OKAY"))
    }, 3000)
});
 cek = async () => {
    await console.log(a)
}