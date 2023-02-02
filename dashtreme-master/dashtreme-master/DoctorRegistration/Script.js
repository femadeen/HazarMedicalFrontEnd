let dr = document.querySelector("#register")
console.log(dr)
dr.addEventListener("click", (e) =>{
    e.preventDefault();
    let firstName = document.querySelector("#firstName")
    let lastName = document.querySelector("#lastName")
    let proffession = document.querySelector("#proffession")
    let email = document.querySelector("#email")
    let password = document.querySelector("#password")
    let firstNameValue = firstName.value 
    let lastNameValue = lastName.value
    let proffessionValue = proffession.value
    let emailValue = email.value
    let passwordValue = password.value
    let data = {
        FirstName : firstNameValue,
        LastName : lastNameValue,
        Proffession : proffessionValue,
        Email : emailValue,
        Password : passwordValue     
    }
    console.log(data)
    fetch("https://localhost:7212/api/Doctor/RegisterDoctor",{
        method : "Post",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    }).then(prom =>{
        return prom.json();
    }).then(output => {
        console.log(output)
        alert(output.message);
    })
})