let admin = [
    {
        name: "admin",
        email: "admin@gmail.com",
        password: "12345678"
    }
];

localStorage.setItem("admin", JSON.stringify(admin));

const userNamaeA = document.getElementById('name');
const EmailA = document.getElementById('Email');
const passwordA = document.getElementById('password');


const auth = JSON.parse(window.localStorage.getItem("admin"));
document.addEventListener("click", function (args) {
    console.log(userNamaeA.value !== auth[0].name ? "iye":"kaga");
    console.log(EmailA.value === auth[0].email ? "iye":"kaga");
    console.log(passwordA.value === auth[0].password ? "iye" : "kaga");
    
    
    if (args.target.classList.contains("LoginAdmin")) {
        if (userNamaeA.value !== auth[0].name && EmailA.value !== auth[0].email && passwordA.value !== auth[0].password) {
            alert("password or email wrong");
        }
        if (userNamaeA.value === auth[0].name && EmailA.value === auth[0].email && passwordA.value === auth[0].password) {
            alert("weelcome admin");
            window.location.href = "/admin.html";
        }
        
    }


});