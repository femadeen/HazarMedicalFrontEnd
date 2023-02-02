let Ma = document.querySelector("#submit")
Ma.addEventListener("click", e =>{
    e.preventDefault();
    let firstName = document.querySelector("#firstName")
    let LastName = document.querySelector("#lastName")
    let Email = document.querySelector("#email")
    let UnitFacility = document.querySelector("#unit")
    let DrivingOption = document.querySelector("#driving")
    let Appointmentdate = document.querySelector("#appointmentdate")
    let ReasonForAppointment = document.querySelector("#reason")
    let firstNameValue = firstName.value
    let LastNameValue = LastName.value
    let EmailValue = Email.value
    let UnitFacilityValue = UnitFacility.value
    let drivingOptionValue = DrivingOption.value
    let drivingOption = (drivingOptionValue == "true") ? true : false;
    let AppointmentdateValue = Appointmentdate.value
    let ReasonForAppointmentValue = ReasonForAppointment.value
    let data = {
        FirstName : firstNameValue,
        Lastname : LastNameValue,
        Email : EmailValue,
        UnitFacility : UnitFacilityValue,
        IsDriving : drivingOption,
        AppointmentTime : AppointmentdateValue,
        ReasonForAppointment : ReasonForAppointmentValue
    }
    fetch("https://localhost:7212/api/Appointment/MakeAppointment",{
        method : "Post",
        headers : {
            "Content-Type" : "application/json" 
        },
        body : JSON.stringify(data)
    }).then(prom =>{
        return prom.json();
    }).then(result =>{
        console.log(result)
        alert(output.message)
    })
})