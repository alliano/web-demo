

let greet = "Hallo!! thank you for join to us";
let index = 0;
function tyepe() {
    if (index < greet.length) {
        document.getElementsByTagName("h3")[0].innerHTML += greet.charAt(index);
        setTimeout(tyepe, 100);
        index++;
    } else {
        if (index === greet.length) {
            document.getElementsByName("h3")[0].innerHTML += greet.charAt(index);
            setTimeout(tyepe, 100);
            index++
        }
    }
}
tyepe()