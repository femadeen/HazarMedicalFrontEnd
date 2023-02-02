let pt = document.querySelector("#submit")
pt.addEventListener("click", (e) =>{
    e.preventDefault()
    let fName = document.querySelector("#fname")
    let lName = document.querySelector("#lname")
    let email = document.querySelector("#email")
    let password = document.querySelector("#password")
    let address = document.querySelector("#homeAddress")
    let phoneNumber = document.querySelector("#phoneNumber")
    let dob = document.querySelector("#dateOfBirth")
    let fNameValue = fName.value;
    let lNameValue = lName.value;
    let emailValue = email.value;
    let passwordValue = password.value;
    let addressValue = address.value;
    console.log(addressValue)
    let phoneNumberValue = phoneNumber.value;
    let dobValue = dob.value;
    let data = {
        Firstname : fNameValue,
        LastName : lNameValue,
        Email : emailValue,
        password : passwordValue,
        DateOfBirth : dobValue,
        PatientAddress : addressValue,
        PhoneNumber : phoneNumberValue
    }
    fetch("https://localhost:7212/api/Patient/RegisterPatient",{
        method : "Post",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    }).then(prom =>{
        return prom.json();
    }).then(result =>{
        console.log(result)
        alert(result.message)
    })
})