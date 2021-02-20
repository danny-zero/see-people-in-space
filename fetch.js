const astrosUrl = 'http://api.open-notify.org/astros.json';


const container = document.getElementById("container")
const getPeople = document.getElementById("getPeople")

let called = false;
getPeople.addEventListener("click", async () => {
    if (!called) {
        const response = await fetch(astrosUrl);
        const data = await response.json();
        console.log(data)
        data.people.map((info) => {
            container.innerHTML += `<li>${info.name} is on the <span>${info.craft}</span></li>`;
        });
        called = true;
    } else {
        alert("already showing information")
    }
})