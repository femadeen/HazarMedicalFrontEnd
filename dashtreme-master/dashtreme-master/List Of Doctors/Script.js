let dr = document.querySelector("#doctors")
let id = 0;
fetch("https://localhost:7212/api/Doctor/ListOfDoctors",{
    method : "Get",
}).then(prom =>{
    return prom.json();
}).then(result =>{
    result.data.forEach(element =>{
        console.log(result)
        id++
        dr.innerHTML+= `
        <tr>
        <td> ${id} </td>
        <td> ${element.firstName} </td>
        <td> ${element.lastName} </td>
        <td> ${element.email} </td>
        <td> ${element.doctorProfession} </td>
        </tr>
        `  
    })
})