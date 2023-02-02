let cr = document.querySelector("#registerPack");
// console.log(cr)
cr.addEventListener("click", (e) =>{
    e.preventDefault();
    // console.log(testing );
    fetch("https://localhost:7212/api/Parking/CreatePacking", {
        method : "Post",
    }).then(prom =>{
        return prom.json();
    }).then(output =>{
        console.log(output)
        alert(output.message);
    })
})