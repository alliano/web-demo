
//////////////////////////////////////////////////
///Auth with Local storage and vanila js/////////
////////////////////////////////////////////////
if (window.localStorage.getItem("users") === null || window.localStorage.getItem("users") === undefined)window.localStorage.setItem("users",JSON.stringify([]))


// methos save dta
const getDAtaUser = (password,username,email) => {
    const saveToLocalStorage = [{
        name: username,
        password: password,
        email: email
    }];

    const data = JSON.stringify(saveToLocalStorage);
    return data;
}
const save = (args) => {
    localStorage.setItem("users", args);
}
// get elemts data input
const userNamae = document.getElementById('name');
const Email = document.getElementById('Email');
const password = document.getElementById('password');

// if button register click
document.addEventListener("click", function (args) {

    if (args.target.classList.contains("rengister")) {
        const userBuffer = userNamae.value;
        const emailBuffer = Email.value;
    
        const passwordBuffer = password.value.split("");
    
        if (passwordBuffer.length < 8) {
            alert("password must be more than 8 caracthers");
            return false
        }

    
        const data = getDAtaUser(passwordBuffer.join(""), userBuffer, emailBuffer);
        let placeholder = JSON.parse(data);
        let getToLocsls = JSON.parse(window.localStorage.getItem("users"));
        getToLocsls.push(placeholder);
    
    
        save(JSON.stringify(getToLocsls[0]));
        window.location.href = "/welcome.page.html";
        
    }
     
})

// handle Login
document.addEventListener("click", function (arg) {
    if (arg.target.classList.contains("login")) {
        const getData =  (args) => {
            const data = window.localStorage.getItem(args);
            return JSON.parse(data);
        }
    
        const username = document.getElementById("usernameLogin");
        const password = document.getElementById("passwordLogin");

        const data = getData("users");

        if (username.value === data[0].email && password.value === data[0].password) {
            alert("welcome");
            window.location.href = "./courses.html"
        } else {
            alert("your password or email is wrong")
        }


    //     let users = [["tes", "tek"]]
    //     let nama;
    //     data.forEach(item => users.push([item.email, item.password]));
    //     let tes = users.forEach(item => {
            
    //         nama = item.find((e) => {
    //             console.log(e)
    //            return e === "tes"
    //        })
    //     })
    //    console.log(nama)
        
    }
})

