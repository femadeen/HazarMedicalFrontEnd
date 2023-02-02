let lg = document.querySelector("#signin")
console.log("test")
lg.addEventListener(("click"), (l) =>{
    l.preventDefault();
    let username = document.querySelector("#email")
    let pass = document.querySelector("#password")
    let usernameValue = username.value;
    let password = pass.value;
    let data = {
        Email : usernameValue,
        Password : password
    }
    fetch("https://localhost:7212/api/User/Login", {
        method : "Post",
        headers : {
            "Content-Type":"application/json"
        },
        body : JSON.stringify(data)
    }).then(pro =>{
        return pro.json();
    }).then(output =>{
        alert(output.message);
        if(output.data.roleName === "patient")
        {
            window.location.href="../Patient-Dashboard/index.html"
        }
        else if(output.data.roleName === "doctor")
        {

        }
        else
        {
            window.location.href="../../../pluto-1.0.0/AdminDashboard/index.html"
        }
    })
})