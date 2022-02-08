


if (window.localStorage.getItem("users") === null || window.localStorage.getItem("users") === undefined)window.localStorage.setItem("users",JSON.stringify([]))

// add
const nama = document.getElementById("name");//fils name
const email = document.getElementById("email");//dield email
const pass = document.getElementById("password");//field pass

// update
const namaUp = document.getElementById("nameUp");
const emailUp = document.getElementById("emailUp");
const passUp = document.getElementById("passwordUp");

const tBody = document.getElementsByTagName("tbody")[0];//table body
const fromUpdate = document.getElementsByClassName("formUpdate")[0];//class from update
const addDta = document.getElementsByClassName("addData")[0];//button add on top table
const fromAdd = document.getElementsByClassName("formAdd")[0];//form update
const content = document.getElementsByClassName("content")[0];//full table



/*

---------------
    save
--------------
*/


const storage = (data) => {
    let sv = [data];
    window.localStorage.setItem(`users`, JSON.stringify(sv));
}


/*
----------------
    get data
---------------
*/

const getdata = () =>  JSON.parse(window.localStorage.getItem(`users`));



/*

--------------
    table
-------------
*/

const table = () => {
    let template = ``;
    const datas = getdata();
    if (datas !== undefined || datas !== null) {
        datas.forEach((item, index) => {
            template +=
                `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${item.name}</td>
                        <td>${item.email}</td>
                        <td>${item.password}</td>
                        <td>
                            <button style="margin-right:4px;" onclick="edit(${index})">edit</button>
                            <button onclick="destroy(${index})">delete</button>
                        </td>
                    </tr>
                `;
        });
    } else {
        return `<h1 style="color:red;">data masih kosong</h1>`
    }
    return template;
}
  

/*
----------------
    show table
---------------

*/

(function () {
    tBody.innerHTML = table();
})();

/*
-----------------
    add data
-----------------
    */


addDta.addEventListener("click", function () {
    fromAdd.style.display = "block";
    content.style.display = "none";

    nama.value = "";
    email.value = "";
    pass.value = "";
    cancel(fromAdd);
    
})
 document.addEventListener("click", (e) => {
           let data = { name: nama.value, email: email.value, password: pass.value };
           console.log(nama.value === "" ? "iya kosong" : "ada");
           if (e.target.classList.contains("add")) {
               if (nama.value === "" && email.value === "" && pass.value === "") alert("field canot be empty");
               if (nama.value !== "" && email.value !== "" && pass.value !== "") {
                   
                   let query = getdata();
                   if (typeof(query) === undefined) storage(data); tBody.innerHTML = table();
                   if (typeof(query) !== undefined) {
                       query.push(data);
                       console.log(query);
                       window.localStorage.setItem("users", JSON.stringify(query));
                       tBody.innerHTML = table();

                       fromAdd.style.display = "none";
                       content.style.display = "block";
                   }
               }
                   
               }
           })


/*
------------------------
        delete
------------------------
*/

const destroy = (id) => {
    console.log(id)
    let query = getdata();
    query.splice(id, 1);
    window.localStorage.setItem("users", JSON.stringify(query));
    console.log(query)
    tBody.innerHTML = table()
}


/*
------------------------
        edit
------------------------
*/

const edit = (id) => {
    const dumy = JSON.parse(window.localStorage.getItem("users"));
    content.style.display = "none";
    fromUpdate.style.display = "flex"

    console.log(dumy[id])

    namaUp.value = dumy[id].name;
    emailUp.value = dumy[id].email;
    passUp.value = dumy[id].password;

    cancel(fromUpdate);
    document.addEventListener("click", function (el) {
        if (el.target.classList.contains("edit")) {
           const dumy = JSON.parse(window.localStorage.getItem("users")); 
           content.style.display = "none";
           fromUpdate.style.display = "flex"
               let newData = {
                   name: namaUp.value,
                   email: emailUp.value,
                   password:passUp.value,
               }
               dumy.splice(id, 1, newData);
               if (namaUp === "" && emailUp === "" && passUp === "") alert("field canot be empty");
               if (namaUp !== "" && emailUp !== "" && passUp !== "") window.localStorage.setItem("users", JSON.stringify(dumy)); tBody.innerHTML = table();
               content.style.display = "block";
               fromUpdate.style.display = "none";
           }
       })
}



// cancel 
const cancel = (form) => {
    document.addEventListener("click", function (el) {
        if (el.target.classList.contains("cancel")) {
            form.style.display = "none";
            content.style.display = "block"
        }
    })
}




// let data = [
//     {
//         name: "allinao",
//         password: "123456787"
//     },
//     {
//         name: "gtw",
//         password: "jajjajja"
//     },
//     {
//         name: "friska",
//         password: "123456787"
//     }
// ];

