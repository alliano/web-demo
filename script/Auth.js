//////////////////////////////////////////////////
///Auth with Local storage and vanila js/////////
////////////////////////////////////////////////



const getDAtaUser = (password,username,email) => {
    const saveToLocalStorage = [{
        password: password,
        username: username,
        email: email
    }];

    const data = JSON.stringify(saveToLocalStorage);
    return data;
}
const save = (args) => {
    localStorage.setItem("key", args);
}

const userNamae = document.getElementById('name');
const Email = document.getElementById('Email');
const password = document.getElementById('password');


document.addEventListener("click", function (args) {

    if (args.target.classList.contains("rengister")) {
        const userBuffer = userNamae.value;
        const emailBuffer = Email.value;
    
        const passwordBuffer = password.value.split("");
    
        if (passwordBuffer.length < 10) {
            alert("password must be more than 8 caracthers");
            return false
        }
    
        const data = getDAtaUser(passwordBuffer.join(""), userBuffer, emailBuffer);
        save(data);
        window.location.href = "/courses.html";
        
    }
     
})

document.addEventListener("click", function (arg) {
    if (arg.target.classList.contains("login")) {
        const getData =  (args) => {
            const data = window.localStorage.getItem(args);
            return JSON.parse(data);
        }
    
        const username = document.getElementById("usernameLogin");
        const password = document.getElementById("passwordLogin");

        const data = getData("key")
        
        if (data[0].email === username.value && data[0].password === password.value) {
            alert("welcome")
            window.location.href = "/courses.html";
        } else {
            alert("password or email is wrog")
        }
    }
  })



