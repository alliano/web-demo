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
    if (args.target.classList.contains("LoginAdmin")) {
        if (userNamaeA === auth.name && EmailA === auth.email && passwordA === auth.password) alert("weelcome admin"); window.location.href = "/admin.html";
        if (userNamaeA !== auth.name && EmailA !== auth.email && passwordA !== auth.password) alert("password or email wrong");
        
    }


});